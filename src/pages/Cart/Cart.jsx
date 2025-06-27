import React from "react";
import { product } from "../../product";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = [product[0]]; // Sample item, you can map from cart state
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Heading (Desktop only) */}
      <div className="hidden md:grid grid-cols-5 font-semibold text-gray-700 text-sm border-b pb-3 mb-4">
        <h2 className="col-span-2">Product</h2>
        <h2 className="text-center">Price</h2>
        <h2 className="text-center">Quantity</h2>
        <h2 className="text-center">Remove</h2>
      </div>

      {/* Product Row */}
      {cartItems.map((item) => (
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

          {/* Mobile layout for Price, Quantity, Remove */}
          <div className="flex flex-col mt-4 md:mt-0 md:hidden gap-3">
            <div className="flex justify-between">
              <span className="text-gray-500">Price:</span>
              <span className="font-medium text-gray-800">${item.price}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Quantity:</span>
              <input
                type="number"
                min={1}
                defaultValue={1}
                className="w-20 text-center border rounded-md px-2 py-1 text-sm"
              />
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
            <input
              type="number"
              min={1}
              defaultValue={1}
              className="w-16 text-center border rounded-md px-2 py-1 text-sm"
            />
          </div>
          <div className="hidden md:block text-center">
            <button className="text-red-500 hover:text-red-700">
              <Trash2 className="w-5 h-5 inline-block" />
            </button>
          </div>
        </div>
      ))}

      {/* Footer */}
      <div className="mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        {/* Checkout Button */}
        <Link to="/checkout">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition">
          Proceed to Checkout
        </button>
        </Link>

        {/* Totals */}
        <div className=" p-4 shadow-sm w-full sm:w-auto">
          <div className="flex justify-between gap-8 text-sm text-gray-600 mb-1">
            <span>Subtotal:</span>
            <span className="font-medium text-gray-800">
              ${subtotal.toFixed(2)}
            </span>
          </div>
          <div className="border-t border-gray-300 mt-3 pt-3"></div>
          <div className="flex justify-between gap-8 text-base font-semibold text-gray-900">
            <span>Total:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
