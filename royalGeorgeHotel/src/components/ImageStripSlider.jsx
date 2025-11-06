import React, { useEffect, useRef } from "react";
import strip1 from "../assets/slide1.png";

// Default images
const defaultImages = [
    { id: 1, src: strip1, alt: "Bar ambience" },
    { id: 2, src: strip1, alt: "Cocktail and bottles" },
    { id: 3, src: strip1, alt: "Friends at the bar" },
    { id: 4, src: strip1, alt: "Dance floor" },
];

export default function ImageStripSlider({
    images = defaultImages,
    heightClass = "h-40 md:h-52",
    title,
    className = "",
    speed = 1, // lower = faster scroll
}) {
    const scrollRef = useRef(null);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        let scrollAmount = 0;
        const scrollStep = () => {
            if (container.scrollLeft >= container.scrollWidth / 2) {
                container.scrollLeft = 0; // reset to start for seamless loop
            }
            container.scrollLeft += speed;
            scrollAmount += speed;
            requestAnimationFrame(scrollStep);
        };

        // duplicate content once for smooth looping
        container.innerHTML += container.innerHTML;
        requestAnimationFrame(scrollStep);
    }, [speed]);

    return (
        <section className={`w-full bg-black py-8 overflow-hidden ${className}`}>
            <div className="w-full">
                {title && (
                    <h2 className="text-white text-xl md:text-2xl font-semibold mb-4 px-4">
                        {title}
                    </h2>
                )}

                <div
                    ref={scrollRef}
                    className="flex overflow-x-scroll whitespace-nowrap select-none scroll-smooth [&::-webkit-scrollbar]:hidden"
                    style={{
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                    }}
                >
                    {images.map((img) => (
                        <img
                            key={img.id}
                            src={img.src}
                            alt={img.alt || ""}
                            className={`${heightClass} w-screen object-cover flex-shrink-0`}
                        />
                    ))}
                </div>
            </div>
        </section>

    );
}
