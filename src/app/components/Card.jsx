import Image from "next/image";
import Link from "next/link";
import axios from "axios";

async function getData(category) {
  try {
    console.log(category);
    const res = await axios.get(
      `https://e-commerce-backend-4l6u.onrender.com/api/user/category/${category}`
        );

    console.log(res.data);

    return res.data.data ?? [];
    
  } catch (error) {
    console.error("getData error:", error);
    return [];
  }
}

export default async function BestCollections({ category = "Men" }) {
  const data = await getData(category);
  // console.log(data); /* data has name, brand, gender, product type, description, price, discounted price, product images, color, material, movement, water resistance, warranty, availability  */

  if (data.length === 0) return null;

  return (
    <section id="collection" className="mt-12 p-3">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
        {category == "Recommendations"
          ? "Recommendations for you"
          : category + "'s collection"}
      </h2>

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {data.map((item) => (
          <div
            key={item._id || item.id}
            className="group relative flex flex-col justify-between overflow-hidden rounded border border-zinc-200/80 bg-white p-1 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
          >
            {/* Clickable Card Link Container */}
            <Link href={`/product/${item.id || item._id}`} className="block">
              {/* Product Image */}
              <div className="relative aspect-square w-full overflow-hidden rounded bg-zinc-100 dark:bg-zinc-800">
                <Image
                  src={item.images?.[0] || "/placeholder.jpg"}
                  alt={item.name || "Product Image"}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5" />
              </div>

              {/* Details */}
              <div className="mt-4 flex flex-col px-1">
                {/* Brand */}
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                  {item.brand || "Casio"}
                </p>

                {/* Name */}
                <h3 className="mt-1 line-clamp-1 text-base font-semibold text-zinc-900 transition-colors group-hover:text-red-700 dark:text-zinc-100 dark:group-hover:text-indigo-400">
                  {item.name || "Classic Silver Chronograph"}
                </h3>

                {/* Tags / Specs */}
                {/* <div className="mt-3 flex flex-wrap gap-1.5">
                  <span className="rounded-md bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                    {item.movement || "analog"}
                  </span>
                  <span className="rounded-md bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                    {item.strapType || "metal"}
                  </span>
                  <span className="rounded-md bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                    {item.warranty || "No warranty"}
                  </span>
                </div> */}

                {/* Price & Stock */}
                <div className="mt-4 flex items-baseline justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                      ₹{item.price?.toLocaleString()}
                    </span>
                    {item.originalPrice && (
                      <span className="text-xs text-zinc-400 line-through">
                        ₹{item.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    In Stock
                  </span>
                </div>
              </div>
            </Link>

            {/* Action Button */}
            {/* <div className="mt-4 px-1 pb-1">
              <button
                type="button"
                className="w-full rounded-xl bg-zinc-900 py-2.5 text-xs font-semibold text-white transition-all hover:bg-zinc-800 active:scale-[0.98] dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                Add to Cart
              </button>
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
}
