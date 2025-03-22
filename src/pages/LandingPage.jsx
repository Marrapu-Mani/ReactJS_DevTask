import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-gray-50 flex items-end pb-20">
      <div className="w-full max-w-sm px-6 mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 text-left">
          Welcome to PopX
        </h1>
        <p className="mt-2 text-gray-500 text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <div className="mt-6 space-y-4">
          <button
            onClick={() => navigate("/signup")}
            className="w-full py-2 text-white font-medium bg-purple-600 rounded-md hover:bg-purple-700 cursor-pointer"
          >
            Create Account
          </button>
          <button
            onClick={() => navigate("/login")}
            className="w-full py-2 text-black font-medium bg-purple-100 rounded-md hover:bg-purple-200 cursor-pointer"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
