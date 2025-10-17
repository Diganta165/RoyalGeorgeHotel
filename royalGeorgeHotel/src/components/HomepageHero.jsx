import React from "react";
import menubanner from "../assets/menubanner.jpeg"; // 

const HomepageHero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-black text-white px-6 md:px-16 py-12 md:py-20">
      {/* Left text block */}
      <div className="md:w-1/2 space-y-4 text-center md:text-left">
        <p className="text-md uppercase tracking-wide font-bold text-gray-400">
          Welcome to
        </p>
        <h1 className="text-8xl md:text-8xl font-bold leading-tight">
          Royal <br /> George Hotel
        </h1>
        <p className="text-lg text-gray-400 italic font-bold pt-6">
          where the best night out begins
        </p>
      </div>

      {/* Right image */}
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
        <img
          src={menubanner}
          alt="Royal George Hotel bar"
          className="rounded-lg shadow-lg w-[293px] h-[174px] md:w-[650px] md:h-[400px] object-cover"
        />
      </div>
    </section>
  );
}
export default HomepageHero;
