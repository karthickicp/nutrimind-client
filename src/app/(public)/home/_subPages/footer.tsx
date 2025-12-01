import React from "react";

export const Footer = () => {
  return (
    <footer className="container">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 lg:gap-0">
        {/* Left - Brand */}
        <div className="text-left">
          <h3 className="text-lg md:text-2xl mb-2">NutriMind</h3>
          <p className="text-[#4F4B4B] lg:text-xl">Body. Mind. Connected.</p>
        </div>

        {/* Center - App Store Badges */}
        <div className="flex justify-center gap-4 md:gap-6 lg:gap-8">
          <div>
            <img
              src={"/images/home/play_store.png"}
              alt="Download on App Store and Google Play"
            />
          </div>
          <div>
            <img
              src={"/images/home/app_store.png"}
              alt="Download on App Store and Google Play"
            />
          </div>
        </div>

        {/* Right - Contact */}
        <div className="">
          <p className="text-[#4F4B4B] mb-1">Contact</p>
          <p className="text-gray-400 lg:text-xl">contact@nutrimind.com</p>
        </div>
      </div>
    </footer>
  );
};
