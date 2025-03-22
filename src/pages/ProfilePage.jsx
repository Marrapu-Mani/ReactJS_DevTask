import React from "react";
import profileImage from "../assets/profile.jpg";

const ProfilePage = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <div className="w-full bg-white p-4 border-b">
        <h1 className="text-xl text-gray-800">Account Settings</h1>
      </div>

      <div className="p-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative">
            <img
              src={profileImage}
              alt="Profile"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-purple-600 p-1 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-medium text-gray-900">Marry Doe</h2>
            <p className="text-gray-600">Marry@Gmail.Com</p>
          </div>
        </div>

        <p className="text-gray-700 mb-6">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>

        <div className="mx-[-24px] border-t border-dashed border-gray-300"></div>

        <div className="mt-96 mx-[-24px] border-t border-dashed border-gray-300"></div>
      </div>
    </div>
  );
};

export default ProfilePage;
