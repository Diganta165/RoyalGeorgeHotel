import React, { useState, useMemo } from "react";
import menu1 from "../assets/menu1.jpeg";
import menu2 from "../assets/menu2.jpeg";
import menu3 from "../assets/menu3.jpeg";
import menu4 from "../assets/menu4.jpeg";

const baseDefaultItems = [
    { id: 1, name: "Roshan's Favorite Dish", category: "Cocktails", image: menu2 },
    { id: 2, name: "BBQ Platter", category: "Share Plates", image: menu3 },
    { id: 3, name: "All Day Breakfast", category: "Breakfast", image: menu1 },
    { id: 4, name: "Cheese Burger", category: "Burgers", image: menu4 },
];

const Menucontent = ({ menuItems }) => {
    const [selectedCategory, setSelectedCategory] = useState("All Items");

    const menu = useMemo(() => {
        if (!menuItems || menuItems.length === 0) {
            return baseDefaultItems;
        }

        // Map API data to local structure, rotate images
        const images = [menu1, menu2, menu3, menu4];
        return menuItems.map((item, index) => ({
            id: index + 1,
            name: item.name,
            category: item.category,
            image: images[index % images.length],
        }));
    }, [menuItems]);

    const categories = [
        "All Items",
        ...Array.from(new Set(menu.map((item) => item.category))),
    ];

    const filteredItems =
        selectedCategory === "All Items"
            ? menu
            : menu.filter((item) => item.category === selectedCategory);

    return (
        <>
            {/* Filter Buttons */}
            <section className="flex flex-wrap justify-center gap-3 py-6 bg-black/60">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 rounded-full font-medium ${selectedCategory === cat
                                ? "bg-yellow-400 text-black"
                                : "bg-white text-black hover:bg-gray-300"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </section>

            {/* Menu Grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-8 py-8 bg-white">
                {filteredItems.map((item) => (
                    <div key={item.id} className="text-center">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full rounded-lg shadow-md h-72 object-cover"
                        />
                        <h3 className="mt-2 text-lg font-semibold">{item.name}</h3>
                        <p className="text-gray-500 italic">{item.category}</p>
                    </div>
                ))}
            </section>
        </>
    );
};

export default Menucontent;
