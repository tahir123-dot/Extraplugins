import React from "react";
import ShopSidebar from "./ShopSidebar";
import Product from "../../component/Product/Product";

const Shop = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 mt-10 gap-6">
        {/* Left Sidebar */}
        <ShopSidebar />

        {/* Right Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between">
            <div className="flex items-center gap-3 px-4 py-2 border rounded-md w-fit text-sm text-gray-700">
              <label htmlFor="sort" className="font-semibold">
                Sort by:
              </label>
              <select
                id="sort"
                name="sort"
                className="border-none bg-transparent focus:outline-none"
              >
                <option value="newest">Newest</option>
                <option value="trending">Trending</option>
                <option value="low-to-high">Price: Low to High</option>
                <option value="high-to-low">Price: High to Low</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>
            <div>
              <p>Show 1-20 of 1000 results</p>
            </div>
          </div>

          <Product />
          <Product/>
        </div>
      </div>
    </>
  );
};

export default Shop;
