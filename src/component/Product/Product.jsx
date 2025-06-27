import React from "react";
import { product } from "../../product";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Product = ({ limit }) => {
  const displayedProducts = limit ? product.slice(0, limit) : product;

  return (
    <div className="max-w-7xl mx-auto px-4 mt-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {displayedProducts.map((item) => (
        <Link to={`/shop/${item.id}`}>
          <div
            key={item.id}
            className="bg-white overflow-hidden   transition duration-300 flex flex-col group"
          >
            {/* Category */}
            <div className="px-4 pt-4 text-xs text-gray-500 font-medium tracking-wider">
              {item.category}
            </div>

            {/* Name */}
            <div className="px-4 text-sm font-semibold text-gray-900 mb-2">
              {item.name.length > 27
                ? item.name.slice(0, 27) + "..."
                : item.name}
            </div>

            {/* Image */}
            <div className="w-full h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
              <img
                src={item.mainImage}
                alt={item.name}
                className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Price + Heart */}
            <div className="flex justify-between items-center px-4 py-4">
              <p className="text-sm font-bold text-gray-700">${item.price}</p>
              <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer transition" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Product;
