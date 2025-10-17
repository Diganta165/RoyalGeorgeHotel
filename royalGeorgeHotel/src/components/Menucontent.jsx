import React, { useState } from "react";
import menu1 from "../assets/menu1.jpeg"
import menu2 from "../assets/menu2.jpeg";
import menu3 from "../assets/menu3.jpeg";
import menu4 from "../assets/menu4.jpeg";

const Menucontent = () => {
  // ✅ State to track which category is selected
  const [selectedCategory, setSelectedCategory] = useState("All Items");

  // ✅ Menu data (you can expand this later)
  const menuItems = [
    { id: 1, name: "Roshan's Favorite Dish", category: "Cocktails", image: menu2 },
    { id: 2, name: "BBQ Platter", category: "Cocktails Platter", image: menu3 },
    { id: 3, name: "All Day Breakfast", category: "Breakfast", image: menu1 },
    { id: 4, name: "Cheese Burger", category: "Burgers", image: menu4 },
  ];

  // ✅ Filter items based on selected category
  const filteredItems =
    selectedCategory === "All Items"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  // ✅ All available categories
  const categories = [
    "All Items",
    "Cocktails",
    "Cocktails Platter",
    "Breakfast",
    "Burgers",
    "All Day Deals",
    "Share Plates",
    "Mains",
    "Pizza",
    "Salad",
  ];

  return (
    <>
      {/* Filter Buttons */}
      <section className="flex flex-wrap justify-center gap-3 py-6 bg-black">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full font-medium ${
              selectedCategory === cat
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
