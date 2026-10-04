import Image from "next/image";
import React from "react";

async function getDetails(id) {
  try {
    const res = await fetch(
      `https://e-commerce-backend-4l6u.onrender.com/api/admin/item/${id}`,
    );

    const data = await res.json();

    console.log(data);
    return data.item;
  } catch (error) {
    console.log(error);
  }
}

export default async function page({ params }) {
  const { id } = await params;
  const details = await getDetails(id);

  return (
    <div className="w-full min-h-[500px] bg-white">
      <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 md:gap-14">
        {/* Image */}
        <div className="flex justify-center md:justify-start">
          <Image
            src={details.images[0]}
            width={260}
            
  unoptimized
            height={390}
            alt="Regalia Opulent LII Quartz Multifunction Watch"
            className="p-4 rounded border-2 border-zinc-500 ring-1 ring-black/5"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col gap-6 pt-1">
          <div className="space-y-2">
            <span className="text-sm tracking-wide text-neutral-500">
              brand: {details.brand}
            </span>
            <h3 className="text-xl md:text-2xl font-medium leading-snug text-neutral-900 max-w-xl">
              {details.name}
            </h3>
            <p className="text-sm text-neutral-400">{details.description}</p>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-2xl font-semibold text-neutral-900">
              ₹ {details.price}
            </span>
            <span className="text-base text-neutral-400 line-through">
              ₹{details.discountedPrice}
            </span>
            <span className="text-sm font-medium text-emerald-700">
              43% off
            </span>
          </div>

          <div className="space-y-3 pt-2 border-t border-netral-100">
            <h4 className="text-sm font-medium text-neutral-700">
              Product Colors
            </h4>
            <div className="flex gap-3">
              <span
                className={`w-7 h-7 rounded-full bg-${details.color}-600 ring-1 ring-black/10 ring-offset-2 ring-offset-white cursor-pointer hover:ring-black/30 transition`}
              />
              <span className="w-7 h-7 rounded-full bg-blue-600 ring-1 ring-black/10 ring-offset-2 ring-offset-white cursor-pointer hover:ring-black/30 transition" />
              <span className="w-7 h-7 rounded-full bg-green-600 ring-1 ring-black/10 ring-offset-2 ring-offset-white cursor-pointer hover:ring-black/30 transition" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
