import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const isFormValid = () => {
    return formData.email && formData.password;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log("Login form submitted:", formData);
      navigate("/profile");
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="w-full max-w-md p-6 mx-auto pt-12">
        <div className="text-left">
          <h1 className="text-2xl font-bold text-gray-900">Signin to your</h1>
          <h1 className="text-2xl font-bold text-gray-900">PopX account</h1>
        </div>
        <p className="mt-2 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-sm font-medium text-purple-600"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              className="w-full px-3 py-3 mt-1 text-gray-700 border rounded-md focus:ring-2 focus:ring-purple-600 focus:outline-none"
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-purple-600"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full px-3 py-3 mt-1 text-gray-700 border rounded-md focus:ring-2 focus:ring-purple-600 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={!isFormValid()}
            className={`w-full py-3 mt-4 text-white rounded-md ${
              isFormValid()
                ? "bg-purple-600 hover:bg-purple-700 focus:ring-purple-600 cursor-pointer"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
