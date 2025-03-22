import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "Marry Doe",
    phoneNumber: "Marry Doe",
    email: "Marry Doe",
    password: "Marry Doe",
    companyName: "Marry Doe",
    agency: "yes",
  });

  const isFormValid = () => {
    const { fullName, phoneNumber, email, password, agency } = formData;
    return fullName && phoneNumber && email && password && agency;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log("Form submitted:", formData);
      navigate("/profile");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-white">
      <div className="w-full max-w-lg p-6">
        <div className="text-left">
          <h1 className="text-2xl font-bold text-gray-900">Create your</h1>
          <h1 className="text-2xl font-bold text-gray-900">PopX account</h1>
        </div>
        <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              className={`block text-sm font-medium ${
                formData.fullName ? "text-purple-700" : "text-gray-500"
              }`}
              htmlFor="fullName"
            >
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 text-sm text-gray-700 border rounded-md focus:ring-2 focus:ring-purple-600 focus:outline-none"
            />
          </div>
          <div>
            <label
              className={`block text-sm font-medium ${
                formData.phoneNumber ? "text-purple-700" : "text-gray-500"
              }`}
              htmlFor="phoneNumber"
            >
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 text-sm text-gray-700 border rounded-md focus:ring-2 focus:ring-purple-600 focus:outline-none"
            />
          </div>
          <div>
            <label
              className={`block text-sm font-medium ${
                formData.email ? "text-purple-700" : "text-gray-500"
              }`}
              htmlFor="email"
            >
              Email address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 text-sm text-gray-700 border rounded-md focus:ring-2 focus:ring-purple-600 focus:outline-none"
            />
          </div>
          <div>
            <label
              className={`block text-sm font-medium ${
                formData.password ? "text-purple-700" : "text-gray-500"
              }`}
              htmlFor="password"
            >
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 text-sm text-gray-700 border rounded-md focus:ring-2 focus:ring-purple-600 focus:outline-none"
            />
          </div>
          <div>
            <label
              className={`block text-sm font-medium ${
                formData.companyName ? "text-purple-700" : "text-gray-500"
              }`}
              htmlFor="companyName"
            >
              Company name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 text-sm text-gray-700 border rounded-md focus:ring-2 focus:ring-purple-600 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900">
              Are you an Agency?<span className="text-red-500">*</span>
            </label>
            <div className="flex items-center mt-2 space-x-4">
              <label className="flex items-center text-sm font-medium text-gray-700">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={formData.agency === "yes"}
                  onChange={handleChange}
                  className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-600"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="flex items-center text-sm font-medium text-gray-700">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={formData.agency === "no"}
                  onChange={handleChange}
                  className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-600"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>
          <button
            type="submit"
            disabled={!isFormValid()}
            className={`w-full py-2 mt-4 text-white rounded-md ${
              isFormValid()
                ? "bg-purple-600 hover:bg-purple-700 focus:ring-purple-600 cursor-pointer"
                : "bg-gray-300 cursor-not-allowed"
            } focus:outline-none`}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
