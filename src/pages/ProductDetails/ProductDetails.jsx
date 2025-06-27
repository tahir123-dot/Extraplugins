import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { product } from "../../product";
import { Star } from "lucide-react";
import Product from "../../component/Product/Product";
import Subheading from "../../component/Subheading";

const ProductDetails = () => {
  const { id } = useParams();
  const myProduct = product.find((item) => item.id === parseInt(id));

  const [activeTab, setActiveTab] = useState("description");

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-4 h-4 ${
            i <= rating ? "text-yellow-500" : "text-gray-300"
          }`}
          fill={i <= rating ? "#facc15" : "none"}
        />
      );
    }
    return stars;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Product Image */}
        <div className="w-full">
          <img
            src={myProduct.mainImage}
            alt="Product"
            className="rounded-lg object-cover w-full h-[400px] lg:h-[500px]"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            {myProduct.Downloads && (
              <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                Free Downloads
              </span>
            )}
            <span className="text-gray-500 text-sm">{myProduct.category}</span>
          </div>

          <h2 className="text-3xl font-bold">{myProduct.name}</h2>

          <div className="flex items-center gap-2">
            <div className="flex">{renderStars(myProduct.rating)}</div>
            <span className="text-gray-500 text-sm">
              ({myProduct.totalReviews} reviews)
            </span>
          </div>
          <div className="border-t border-gray-300 mb-0  pt-2 text-center text-sm text-gray-600"></div>

          <div>
            <h3 className="font-semibold mb-2">System Requirements:</h3>
            <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
              {myProduct.BulletPoints?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="border-t mb-0 border-gray-300  pt-4 text-center text-sm text-gray-600"></div>
          {/* Thumbnails */}
          <div className="flex flex-wrap gap-2">
            {myProduct.img.map((item, index) => (
              <img
                key={index}
                src={item}
                alt="Thumbnail"
                className="w-16 h-16 object-cover rounded-md border"
              />
            ))}
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Operating System</h2>
            <div className="flex flex-wrap gap-6">
              {myProduct.operatingSystem.map((item, i) => (
                <label
                  key={i}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="operatingSystem"
                    value={item}
                    className="form-radio text-blue-600"
                  />
                  <span className="text-sm text-gray-700">{item}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-300 mb-0  pt-2 text-center text-sm text-gray-600"></div>

          <div className="text-2xl font-bold text-gray-800">
            Price: ${myProduct.price}
          </div>

          {/* Quantity + Add to Cart */}
          <div className="mt-4 flex flex-row items-center gap-4">
            <input
              type="number"
              min={1}
              defaultValue={1}
              className="w-24 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg shadow transition duration-300 text-sm">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="mt-12">
        <div className="flex gap-6 border-b">
          {["description", "specification", "reviews"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 capitalize border-b-2 ${
                activeTab === tab
                  ? "border-blue-600 text-blue-600 font-semibold"
                  : "border-transparent text-gray-500"
              } transition duration-200`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-6 text-sm text-gray-700">
          {activeTab === "description" && <p>{myProduct.Description}</p>}

          {activeTab === "specification" && (
            <ul className="list-disc pl-5 space-y-1">
              {myProduct.operatingSystem.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}

          {activeTab === "reviews" && (
            <div className="space-y-4">
              {myProduct.reviewsList.map((item) => (
                <div
                  key={item.userId}
                  className="border p-3 rounded-md bg-gray-50"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm">
                      {item.imgUser}
                    </span>
                    <h4 className="font-semibold">{item.name}</h4>
                  </div>
                  <p className="text-sm text-gray-700">{item.description}</p>
                  <div className="flex mt-1">{renderStars(item.rating)}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div>
        <Subheading
          subHeading=""
          mainHeading="Related Products"
          description="Explore our top-rated production tools."
          view={false}
        />

        <Product limit={4} />
      </div>
    </div>
  );
};

export default ProductDetails;
