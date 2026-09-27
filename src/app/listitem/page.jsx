import React from "react";

export default async function page() {

  async function getlist() {
   try {
    const res = await fetch(
      `https://e-commerce-backend-4l6u.onrender.com/api/admin/list`,
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch collections: ${res.status}`);
    }

    const data = await res.json();
    console.log(data)
    return data.list ?? [];
  } catch (error) {
    console.error("getData error:", error);
    return [];
  }
  }
  const data = await getlist();
  console.log(data)

  return (
    <div className="mx-4 mt-4">
      <div className="w-full overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
        
        
        <table  className="w-full min-w-[500px] text-left text-sm">
          {/* <!-- Table Header --> */}
          <thead className="border-b border-gray-200 bg-gray-50">
            <tr>
              <th className="px-6 py-4 font-semibold text-gray-700">
                Products Name
              </th>

              <th className="px-6 py-4 font-semibold text-gray-700">Price</th>

              <th className="px-6 py-4 font-semibold text-gray-700">
                In Stock
              </th>
            </tr>
          </thead>

         <tbody className="divide-y divide-zinc-100">
  {data.map((d) => (
    <tr
      key={d._id}
      className="group transition-colors hover:bg-zinc-50"
    >
      {/* Product Name */}
      <td className="px-6 py-4">
        <span className="font-medium text-zinc-900">
          {d.name}
        </span>
      </td>

      {/* Price */}
      <td className="px-6 py-4">
        <span className="font-semibold text-zinc-900">
          ₹{d.price}
        </span>
      </td>

      {/* Stock Status */}
      <td className="px-6 py-4">
        <span
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium ring-1 ring-inset ${
            d.isAvailable === "In Stock"
              ? "bg-emerald-50 text-emerald-700 ring-emerald-200"
              : d.isAvailable === "Out of Stock"
              ? "bg-red-50 text-red-700 ring-red-200"
              : "bg-amber-50 text-amber-700 ring-amber-200"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              d.isAvailable === "In Stock"
                ? "bg-emerald-500"
                : d.isAvailable === "Out of Stock"
                ? "bg-red-500"
                : "bg-amber-500"
            }`}
          />

          {d.isAvailable}
        </span>
      </td>
    </tr>
  ))}
</tbody>
        
          
        </table>
      </div>
    </div>
  );
}
