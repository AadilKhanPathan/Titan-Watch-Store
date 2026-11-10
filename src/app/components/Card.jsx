import Image from "next/image";
import Link from "next/link";
import { api } from "@/lib/axios";
import LinkLoader from "../loading/LinkLoader";

async function getData(category) {
  try {
    const res = await api.get(`/user/category/${category}`);
    return res.data.data ?? [];
  } catch (error) {
    console.error("getData error:", error);
    return [];
  }
}

export default async function BestCollections({ category = "Men" }) {
  const data = await getData(category);

  if (data.length === 0) return null;

  return (
    <section id="collection" className="mt-12 p-3">
      <h2 className="text-4xl font-bold mb-2 tracking-wide text-foreground font-heading text-center">
        {category == "Recommendations"
          ? "Recommendations for you"
          : category + "'s Collection"}
      </h2>
      <h2 className="font-sans text-center mb-6 text-muted-foreground">
        Precision, presence, and timeless design.
      </h2>

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data.map((item) => (
          <div
            key={item._id || item.id}
            className="group relative flex flex-col justify-between overflow-hidden rounded border border-border bg-card p-1 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl"
          >
            <Link href={`/product/${item.id || item._id}`} className=" block">
              {/* Product Image */}
              <div className="relative aspect-square w-full overflow-hidden rounded bg-muted">
                <Image
                  src={item.images?.[0] || "/placeholder.jpg"}
                  alt={item.name || "Product Image"}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/5" />
                <LinkLoader/>
              </div>

              {/* Details */}
              <div className="mt-4 flex flex-col px-1">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground font-sans">
                  {item.brand || "Casio"}
                </p>

                <h3 className="mt-1 line-clamp-1 text-base font-semibold text-foreground transition-colors group-hover:text-accent font-heading">
                  {item.name || "Classic Silver Chronograph"}
                </h3>

                {/* Price & Stock */}
                <div className="mt-4 flex items-baseline justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold text-foreground">
                      ₹{item.price?.toLocaleString()}
                    </span>
                    {item.originalPrice && (
                      <span className="text-xs text-muted-foreground line-through">
                        ₹{item.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    In Stock
                  </span>
                </div>
              </div>
              
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}