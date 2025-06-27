import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Stylish Purple Gradient Section */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-purple-700 to-indigo-800 items-center justify-center px-10 py-12 relative">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white bg-opacity-10 rounded-full blur-2xl animate-pulse"></div>
        <div className="text-white text-center z-10 space-y-6 max-w-md">
          <h1 className="text-5xl font-extrabold leading-tight tracking-wide">
            Unlock Your Sound
          </h1>
          <p className="text-lg font-light leading-relaxed">
            Join{" "}
            <span className="font-semibold text-yellow-300">Extra Plugins</span>{" "}
            — your gateway to top-tier Kontakt libraries, premium sample packs,
            and powerful audio plugins for professional music production.
          </p>
          <p className="text-sm text-gray-200">No limits. Just creativity.</p>
        </div>
      </div>

      {/* Right Side - Registration Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 px-4 py-12">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-xl">
          <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">
            Create Your Account
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Create a password"
                className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
            >
              Register
            </button>
          </form>

          <div className="text-center mt-4 text-sm">
            Already have an account?{" "}
            <Link to="/sign-in" className="text-indigo-600 hover:underline">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
