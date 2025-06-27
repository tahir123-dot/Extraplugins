import React from "react";
import { webLogo } from "../../assets/image";

const Stripe = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-6xl p-0 overflow-hidden flex flex-col md:flex-row">
        <div className="hidden md:block md:w-1/2">
          <img
            src={webLogo.payment}
            alt="Payment Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Secure Payment with Stripe
          </h2>

          <form className="space-y-6">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Cardholder Name
              </label>
              <input
                type="text"
                placeholder="e.g. John Doe"
                className="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Card Number
              </label>
              <input
                type="text"
                placeholder="0000 0000 0000 0000"
                className="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Expiration Date
                </label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  CVC
                </label>
                <input
                  type="text"
                  placeholder="123"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="border-t pt-6">
              <button className="w-full bg-black hover:bg-gray-900 text-white font-semibold py-3 rounded-md text-sm transition">
                Confirm and Pay
              </button>
            </div>
          </form>

          <div className="mt-8 text-center">
            <img
              src="https://stripe.com/img/v3/home/twitter.png"
              alt="Stripe Logo"
              className="mx-auto h-8"
            />
            <p className="text-xs text-gray-500 mt-2">
              Payments powered by Stripe. All transactions are secure and
              encrypted.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stripe;
