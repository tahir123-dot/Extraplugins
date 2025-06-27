import React from "react";
import { product } from "../../product";
import { Trash2 } from "lucide-react";

const WhishList = () => {
  const wishlistItems = [product[0]]; // Replace with actual wishlist state

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Heading (Desktop only) */}
      <div className="hidden md:grid grid-cols-5 font-semibold text-gray-700 text-sm border-b pb-3 mb-4">
        <h2 className="col-span-2">Product</h2>
        <h2 className="text-center">Price</h2>
        <h2 className="text-center">Add to Cart</h2>
        <h2 className="text-center">Remove</h2>
      </div>

      {/* Product Rows */}
      {wishlistItems.map((item) => (
        <div
          key={item.id}
          className="border-b py-4 text-sm md:grid md:grid-cols-5 md:items-center md:gap-4"
        >
          {/* Product Info */}
          <div className="flex items-center gap-4 md:col-span-2">
            <img
              src={item.mainImage}
              alt={item.name}
              className="w-16 h-16 object-cover rounded-md border"
            />
            <div>
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-gray-500">{item.category}</p>
            </div>
          </div>

          {/* Mobile layout for Price, Add to Cart, Remove */}
          <div className="flex flex-col mt-4 md:mt-0 md:hidden gap-3">
            <div className="flex justify-between">
              <span className="text-gray-500">Price:</span>
              <span className="font-medium text-gray-800">${item.price}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Add to Cart:</span>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded-md text-sm">
                Add to Cart
              </button>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Remove:</span>
              <button className="text-red-500 hover:text-red-700">
                <Trash2 className="w-5 h-5 inline-block" />
              </button>
            </div>
          </div>

          {/* Desktop layout */}
          <div className="hidden md:block text-center font-medium text-gray-800">
            ${item.price}
          </div>
          <div className="hidden md:block text-center">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1 rounded-md text-sm">
              Add to Cart
            </button>
          </div>
          <div className="hidden md:block text-center">
            <button className="text-red-500 hover:text-red-700">
              <Trash2 className="w-5 h-5 inline-block" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhishList;
