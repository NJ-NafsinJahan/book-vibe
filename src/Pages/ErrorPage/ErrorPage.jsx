import React from "react";
import { Links } from "react-router";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-100 via-white to-purple-100 px-4">
      <div className="text-center max-w-lg">
        {/* Error Code */}
        <h1 className="text-7xl font-extrabold text-indigo-600 mb-4">404</h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          Oops! Page not found
        </h2>

        {/* Description */}
        <p className="text-gray-500 mb-6">
          The page you are looking for doesn't exist or has been moved.
        </p>

        {/* Button */}
        <Link to="/">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 transition duration-300">
            Go Back Home
          </button>
        </Link>

        {/* Decorative element */}
        <div className="mt-10 text-sm text-gray-400">
          Error Code: 404 | Not Found
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
