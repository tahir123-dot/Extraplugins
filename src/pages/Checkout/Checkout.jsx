import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const [stripeSelected, setStripeSelected] = useState(false);

  const handlePlaceOrder = () => {
    if (stripeSelected) {
      navigate("/stripe"); // Redirect to Stripe page
    } else {
      alert("Please select Stripe as your payment method.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
      {/* Billing Details */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">Billing details</h2>

        <form className="space-y-5">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First name *"
              defaultValue="Tahir"
              className="w-full border px-4 py-2 rounded-full text-sm"
            />
            <input
              type="text"
              placeholder="Last name *"
              defaultValue="Rashid"
              className="w-full border px-4 py-2 rounded-full text-sm"
            />
          </div>

          <select className="w-full border px-4 py-2 rounded-full text-sm">
            <option>Pakistan</option>
            {/* Add more countries here */}
          </select>

          <input
            type="text"
            placeholder="Town / City *"
            defaultValue="Islamabad"
            className="w-full border px-4 py-2 rounded-full text-sm"
          />

          <input
            type="email"
            placeholder="Email address *"
            defaultValue="tahirrashid736333@gmail.com"
            className="w-full border px-4 py-2 rounded-full text-sm"
          />
        </form>
      </div>

      {/* Order Summary */}
      <div className="bg-gray-100 rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4 border-b pb-2">Your order</h2>

        <div className="text-sm text-gray-700">
          <div className="flex justify-between border-b py-2 font-semibold">
            <span>Product</span>
            <span>Subtotal</span>
          </div>

          <div className="flex justify-between py-2 border-b">
            <span>Lexicon PCM Total Bundle - MAC OS × 1</span>
            <span>£0.00</span>
          </div>

          <div className="flex justify-between py-2 border-b">
            <span>Subtotal</span>
            <span>£0.00</span>
          </div>

          <div className="flex justify-between py-2 font-bold">
            <span>Total</span>
            <span>£0.00</span>
          </div>

          <p className="text-xs text-gray-600 mt-4">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our privacy policy.
          </p>

          <div className="mt-4">
            <label className="inline-flex items-start gap-2">
              <input
                type="checkbox"
                className="mt-1"
                checked={stripeSelected}
                onChange={() => setStripeSelected(!stripeSelected)}
              />
              <span className="text-sm">
                I have read and agree to the website{" "}
                <a href="#" className="text-blue-600 underline">
                  terms and conditions
                </a>{" "}
                and want to pay using <strong>Stripe</strong>.
              </span>
            </label>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png"
              alt="Stripe Logo"
              className="w-24 mt-2"
            />
          </div>

          <button
            onClick={handlePlaceOrder}
            className="w-full mt-6 bg-black text-white py-3 rounded-full font-semibold text-sm hover:bg-gray-900 transition"
          >
            Place order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
