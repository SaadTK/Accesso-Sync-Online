import React from "react";
import Layout from "../Components/Layout/Layout";
import { Link } from "react-router-dom";
import errorimg from "../assets/imgs/error.jpg"; // Import the image

const PageNotFound = () => {
  return (
    <Layout>
      <div
        className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-center relative"
        style={{
          backgroundImage: `url(${errorimg})`, // Use the imported errorimg here
        }}
      >
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Main Content */}
        <div className="relative z-10 text-white px-6">
          {/* Main Heading */}
          <h1 className="text-7xl md:text-8xl font-bold mb-6">404</h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Oops! Page Not Found.
          </h2>

          {/* Message */}
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-lg mx-auto">
            The page you are looking for might have been moved or deleted.
          </p>

          {/* Go Home Button */}
          <Link
            to="/"
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default PageNotFound;
