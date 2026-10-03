"use client";

import React, { useState } from "react";
import { LoaderCircle } from "lucide-react";
import axios from "axios";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    brand: "",
    category: "",
    price: "",
    discountedPrice: "",
    images: [],
    color: "",
    material: "",
    type: "",
    movement: "",
    strapType: "",
    waterResistance: "",
    warranty: "",
    isFeatured: false,
    isAvailable: "In Stock",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImages = (e) => {
    const files = Array.from(e.target.files);

    setProduct((prev) => ({
      ...prev,
      images: files,
    }));
  };

  const register = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const formData = new FormData();

      formData.append("name", product.name);
      formData.append("description", product.description);
      formData.append("brand", product.brand);
      formData.append("category", product.category);
      formData.append("price", product.price);
      formData.append("discountedPrice", product.discountedPrice);
      formData.append("color", product.color);
      formData.append("material", product.material);

      if (product.type) {
        formData.append("type", product.type);
      }

      if (product.movement) {
        formData.append("movement", product.movement);
      }

      if (product.strapType) {
        formData.append("strapType", product.strapType);
      }

      formData.append("waterResistance", product.waterResistance);
      formData.append("warranty", product.warranty);
      formData.append("isFeatured", product.isFeatured);
      formData.append("isAvailable", product.isAvailable);

      product.images.forEach((image) => {
        formData.append("images", image);
      });

      const res = await axios.post(`https://e-commerce-backend-4l6u.onrender.com/api/admin/add`, formData);

      console.log(res.data);
      
    } catch (error) {
      console.log(error);
    } finally{
      setLoading(false);
    }
  };

  return (
    <div className="mb-9">
      <form
        onSubmit={register}
        className="mx-auto max-w-4xl space-y-8 rounded-2xl bg-white p-6 shadow-lg"
      >
        {/* // Header  */}
        <div>
          <h2 className="text-2xl font-bold text-zinc-900">Add Product</h2>
          <p className="mt-1 text-sm text-zinc-500">
            Enter the product details below.
          </p>
        </div>

        {/* // Basic Information  */}
        <div className="space-y-5">
          <h3 className="border-b pb-2 text-lg font-semibold text-zinc-800">
            Basic Information
          </h3>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* // Product Name  */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-zinc-700"
              >
                Product Name
                <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                value={product.name}
                onChange={handleChange}
                type="text"
                placeholder="e.g. G-SHOCK Watch"
                required
                className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm outline-none transition focus:border-black focus:ring-2 focus:ring-zinc-200"
              />
            </div>

            {/* // Brand  */}
            <div className="space-y-2">
              <label
                htmlFor="brand"
                className="text-sm font-medium text-zinc-700"
              >
                Brand
                <span className="text-red-500">*</span>
              </label>
              <input
                id="brand"
                name="brand"
                value={product.brand}
                onChange={handleChange}
                type="text"
                placeholder="e.g. Casio"
                required
                className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm outline-none transition focus:border-black focus:ring-2 focus:ring-zinc-200"
              />
            </div>

            {/* // category  */}
            <div className="space-y-2">
              <label
                htmlFor="category"
                className="text-sm font-medium text-zinc-700"
              >
                category
                <span className="text-red-500">*</span>
              </label>
              <select
                id="category"
                name="category"
                value={product.category}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-black focus:ring-2 focus:ring-zinc-200"
              >
                <option value="">Select category</option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Kids">Kids</option>
              </select>
            </div>

            {/* // Type  */}
            <div className="space-y-2">
              <label
                htmlFor="type"
                className="text-sm font-medium text-zinc-700"
              >
                Product Type
              </label>
              <select
                id="type"
                value={product.type}
                onChange={handleChange}
                name="type"
                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-black focus:ring-2 focus:ring-zinc-200"
              >
                <option value="">Select type</option>
                <option value="Wrist Watch">Wrist Watch</option>
                <option value="Wall Clock">Wall Clock</option>
                <option value="Alarm">Alarm Clock</option>
              </select>
            </div>
          </div>

          {/* // Description  */}
          <div className="space-y-2">
            <label
              htmlFor="description"
              className="text-sm font-medium text-zinc-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={product.description}
              onChange={handleChange}
              rows="4"
              placeholder="Describe the product..."
              className="w-full resize-none rounded-lg border border-zinc-300 px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-2 focus:ring-zinc-200"
            ></textarea>
          </div>
        </div>

        {/* // Pricing  */}
        <div className="space-y-5">
          <h3 className="border-b pb-2 text-lg font-semibold text-zinc-800">
            Pricing
            
          </h3>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* // Price  */}
            <div className="space-y-2">
              <label
                htmlFor="price"
                className="text-sm font-medium text-zinc-700"
              >
                Price
                <span className="text-red-500">*</span>
              </label>

              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">
                  ₹
                </span>

                <input
                  id="price"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                  type="number"
                  min="0"
                  placeholder="0"
                  required
                  className="w-full rounded-lg border border-zinc-300 py-2.5 pl-8 pr-4 text-sm outline-none focus:border-black focus:ring-2 focus:ring-zinc-200"
                />
              </div>
            </div>

            {/* // Discounted Price  */}
            <div className="space-y-2">
              <label
                htmlFor="discountedPrice"
                className="text-sm font-medium text-zinc-700"
              >
                Discounted Price
              </label>

              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">
                  ₹
                </span>

                <input
                  id="discountedPrice"
                  name="discountedPrice"
                  value={product.discountedPrice}
                  onChange={handleChange}
                  type="number"
                  min="0"
                  placeholder="0"
                  className="w-full rounded-lg border border-zinc-300 py-2.5 pl-8 pr-4 text-sm outline-none focus:border-black focus:ring-2 focus:ring-zinc-200"
                />
              </div>
            </div>
          </div>
        </div>

        {/* // Images  */}
        <div className="space-y-5">
          <h3 className="border-b pb-2 text-lg font-semibold text-zinc-800">
            Product Images
            
          </h3>

          <div className="space-y-2">
            <label
              htmlFor="images"
              className="text-sm font-medium text-zinc-700"
            >
              Upload Images
            </label>

            <input
              id="images"
              name="images"
              type="file"
              onChange={handleImages}
              accept="image/*"
              multiple
              required
              className="block w-full cursor-pointer rounded-lg border border-zinc-300 bg-zinc-50 text-sm text-zinc-600 file:mr-4 file:border-0 file:bg-zinc-900 file:px-4 file:py-2.5 file:text-sm file:font-medium file:text-white hover:file:bg-zinc-800"
            />

            <p className="text-xs text-red-500">
             upload at least one image
            </p>
          </div>
        </div>

        {/* // Specifications  */}
        <div className="space-y-5">
          <h3 className="border-b pb-2 text-lg font-semibold text-zinc-800">
            Specifications
          </h3>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* // Color  */}
            <div className="space-y-2">
              <label
                htmlFor="color"
                className="text-sm font-medium text-zinc-700"
              >
                Color
              </label>
              <input
                id="color"
                name="color"
                value={product.color}
                onChange={handleChange}
                type="text"
                placeholder="e.g. Black"
                className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm outline-none focus:border-black focus:ring-2 focus:ring-zinc-200"
              />
            </div>

            {/* // Material  */}
            <div className="space-y-2">
              <label
                htmlFor="material"
                className="text-sm font-medium text-zinc-700"
              >
                Material
              </label>
              <input
                id="material"
                name="material"
                value={product.material}
                onChange={handleChange}
                type="text"
                placeholder="e.g. Stainless Steel"
                className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm outline-none focus:border-black focus:ring-2 focus:ring-zinc-200"
              />
            </div>

            {/* // Movement  */}
            <div className="space-y-2">
              <label
                htmlFor="movement"
                className="text-sm font-medium text-zinc-700"
              >
                Movement
              </label>
              <select
                id="movement"
                name="movement"
                value={product.movement}
                onChange={handleChange}
                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-black focus:ring-2 focus:ring-zinc-200"
              >
                <option value="">Select movement</option>
                <option value="Analog">Analog</option>
                <option value="Digital">Digital</option>
                <option value="Analog-Digital">Analog-Digital</option>
                <option value="Smart">Smart</option>
              </select>
            </div>

            {/* // Strap Type  */}
            <div className="space-y-2">
              <label
                htmlFor="strapType"
                className="text-sm font-medium text-zinc-700"
              >
                Strap Type
              </label>
              <select
                id="strapType"
                name="strapType"
                value={product.strapType}
                onChange={handleChange}
                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-black focus:ring-2 focus:ring-zinc-200"
              >
                <option value="">Select strap type</option>
                <option value="Leather Strap">Leather Strap</option>
                <option value="Rubber Strap">Rubber Strap</option>
                <option value="Metal Strap">Metal Strap</option>
                <option value="Metal Bracelet">Metal Bracelet</option>
              </select>
            </div>

            {/* // Water Resistance  */}
            <div className="space-y-2">
              <label
                htmlFor="waterResistance"
                className="text-sm font-medium text-zinc-700"
              >
                Water Resistance
              </label>
              <input
                id="waterResistance"
                name="waterResistance"
                type="text"
                placeholder="e.g. 50M"
                className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm outline-none focus:border-black focus:ring-2 focus:ring-zinc-200"
              />
            </div>

            {/* // Warranty  */}
            <div className="space-y-2">
              <label
                htmlFor="warranty"
                className="text-sm font-medium text-zinc-700"
              >
                Warranty
              </label>
              <input
                id="warranty"
                name="warranty"
                type="text"
                placeholder="e.g. 2 Years"
                className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm outline-none focus:border-black focus:ring-2 focus:ring-zinc-200"
              />
            </div>
          </div>
        </div>

        {/* // Availability  */}
        <div className="space-y-5">
          <h3 className="border-b pb-2 text-lg font-semibold text-zinc-800">
            Availability
          </h3>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* // Availability  */}
            <div className="space-y-2">
              <label
                htmlFor="isAvailable"
                className="text-sm font-medium text-zinc-700"
              >
                Availability
              </label>

              <select
                id="isAvailable"
                name="isAvailable"
                className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-black focus:ring-2 focus:ring-zinc-200"
              >
                <option value="In Stock">In Stock</option>
                <option value="Out of Stock">Out of Stock</option>
                <option value="Coming Soon">Coming Soon</option>
              </select>
            </div>

            {/* // Featured  */}
            <div className="flex items-center gap-3 pt-7">
              <input
                id="isFeatured"
                name="isFeatured"
                type="checkbox"
                className="h-4 w-4 rounded border-zinc-300 text-black focus:ring-zinc-400"
              />

              <label
                htmlFor="isFeatured"
                className="text-sm font-medium text-zinc-700"
              >
                Mark as Featured Product
              </label>
            </div>
          </div>
        </div>

        {/* // Buttons  */}
        <div className="flex flex-col-reverse gap-3 border-t pt-6 sm:flex-row sm:justify-end">
          <button
            type="reset"
            className="rounded-lg border border-zinc-300 px-6 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 cursor-pointer"
          >
            Cancel
          </button>
          

          {
  loading ? (
    <button
      type="submit"
      disabled
      className="flex items-center justify-center gap-2 rounded-lg bg-zinc-900 px-6 py-2.5 text-sm font-medium text-white transition cursor-not-allowed opacity-80"
    >
      <LoaderCircle className="h-4 w-4 animate-spin" />
      Adding Product...
    </button>
  ) : (
    <button
      type="submit"
      className="flex items-center justify-center gap-2 rounded-lg bg-black px-6 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800 cursor-pointer"
    >
      Add Product
    </button>
  )
}
          
        </div>
      </form>
    </div>
  );
}
