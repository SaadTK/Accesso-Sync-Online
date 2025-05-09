import React from "react";
import Layout from "../Components/Layout/Layout";
import { Link } from "react-router-dom";
import errorimg from "../assets/imgs/error.jpg"; // Local error image

const PageNotFound = () => {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center bg-black px-4 text-center">
        {/* Error Image */}
        <img
          src={errorimg}
          alt="404 Error"
          className="w-full max-w-md h-auto mb-6 rounded-lg shadow-lg"
        />

        <Link
          to="/"
          className="bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold py-2 px-6 rounded hover:scale-105 transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </Layout>
  );
};

export default PageNotFound;
