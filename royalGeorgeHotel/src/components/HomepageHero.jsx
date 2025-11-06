import React from "react";
import menubanner from "../assets/menubanner.jpeg";

const HomepageHero = ({ hero }) => {
    const {
        overline = "Welcome to",
        title = "Royal George Hotel",
        subtitle,
        tagline,
    } = hero || {};

    return (
        <section className="flex flex-col md:flex-row items-center justify-between bg-black bg-opacity-60 text-white px-6 md:px-16 py-12 md:py-20">
            <div className="md:w-1/2 space-y-4 text-center md:text-left">
                <p className="text-md uppercase tracking-wide font-bold text-gray-400">
                    {overline}
                </p>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-lg text-gray-300 font-semibold pt-4">
                        {subtitle}
                    </p>
                )}
                {tagline && (
                    <p className="text-lg text-gray-400 italic font-bold pt-4">
                        {tagline}
                    </p>
                )}
            </div>

            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
                <img
                    src={menubanner}
                    alt="Royal George Hotel bar"
                    className="rounded-lg shadow-lg w-[293px] h-[174px] md:w-[650px] md:h-[400px] object-cover"
                />
            </div>
        </section>
    );
};

export default HomepageHero;
