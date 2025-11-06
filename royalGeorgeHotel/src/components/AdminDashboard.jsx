import React, { useState } from "react";
import BookingSummary from "./BookingSummary";
import HomeContentForm from "./HomeContentForm.jsx";
// import BarContentForm from "./BarContentForm"; // create later if needed

const AdminDashboard = () => {
    // which panel is active
    const [activeMenu, setActiveMenu] = useState("home");

    // collapsible state for Pages
    const [isPagesOpen, setIsPagesOpen] = useState(true);

    return (
        <div className="min-h-screen flex bg-neutral-100">
            {/* SIDEBAR */}
            <aside className="w-64 bg-white shadow-md flex flex-col justify-between">
                <div>
                    {/* Logo / Title */}
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h1 className="text-lg font-semibold text-black">
                            Royal George Admin
                        </h1>
                        <p className="text-xs text-gray-500">
                            Manage content & bookings
                        </p>
                    </div>

                    {/* NAV */}
                    <nav className="mt-6">
                        <ul className="space-y-2 text-black">
                            {/* Dashboard / Home */}
                            <li
                                className={`px-6 py-2 cursor-pointer rounded-r-full hover:bg-gray-300 ${activeMenu === "home" ? "bg-yellow-400" : ""
                                    }`}
                                onClick={() => setActiveMenu("home")}
                            >
                                Home
                            </li>

                            {/* COLLAPSIBLE PAGES GROUP */}
                            <li>
                                {/* Parent row: Pages */}
                                <div
                                    className="px-6 py-2 cursor-pointer rounded-r-full hover:bg-gray-300 flex items-center justify-between"
                                    onClick={() => setIsPagesOpen((prev) => !prev)}
                                >
                                    <span>Pages</span>
                                    <span className="text-xs text-gray-600">
                                        {isPagesOpen ? "▾" : "▸"}
                                    </span>
                                </div>

                                {/* Submenu items */}
                                {isPagesOpen && (
                                    <ul className="ml-4 mt-1 space-y-1 text-sm">
                                        <li
                                            className={`px-6 py-2 rounded-r-full cursor-pointer hover:bg-gray-300 ${activeMenu === "homePage" ? "bg-yellow-400" : ""
                                                }`}
                                            onClick={() => setActiveMenu("homePage")}
                                        >
                                            Home Page
                                        </li>
                                        <li
                                            className={`px-6 py-2 rounded-r-full cursor-pointer hover:bg-gray-300 ${activeMenu === "barPage" ? "bg-yellow-400" : ""
                                                }`}
                                            onClick={() => setActiveMenu("barPage")}
                                        >
                                            Bar Page
                                        </li>
                                        {/* Add more pages later if needed */}
                                        {/* <li ...>Menu Page</li> */}
                                    </ul>
                                )}
                            </li>

                            {/* BOOKINGS SECTION */}
                            <li>
                                <p className="px-6 py-2 font-semibold text-gray-600">
                                    Bookings
                                </p>
                                <ul className="ml-4 space-y-1">
                                    <li
                                        className={`px-6 py-2 rounded-r-full cursor-pointer font-medium ${activeMenu === "tables"
                                                ? "bg-yellow-400"
                                                : "hover:bg-gray-300"
                                            }`}
                                        onClick={() => setActiveMenu("tables")}
                                    >
                                        Table Bookings
                                    </li>
                                    <li
                                        className={`px-6 py-2 rounded-r-full cursor-pointer hover:bg-gray-300 ${activeMenu === "rooms" ? "bg-yellow-400" : ""
                                            }`}
                                        onClick={() => setActiveMenu("rooms")}
                                    >
                                        Rooms
                                    </li>
                                    <li
                                        className={`px-6 py-2 rounded-r-full cursor-pointer hover:bg-gray-300 ${activeMenu === "functions" ? "bg-yellow-400" : ""
                                            }`}
                                        onClick={() => setActiveMenu("functions")}
                                    >
                                        Functions
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Bottom links */}
                <div className="p-4 text-gray-600 text-sm space-y-2 border-t border-gray-200">
                    <p className="cursor-pointer hover:text-gray-800">Settings</p>
                    <p className="cursor-pointer hover:text-gray-800">Logout</p>
                </div>
            </aside>

            {/* MAIN CONTENT */}
            <main className="flex-1 p-6 bg-black text-white">
                {/* Dashboard landing */}
                {activeMenu === "home" && (
                    <div>
                        <h1 className="text-2xl font-bold mb-2">
                            Welcome to the admin dashboard
                        </h1>
                        <p className="text-sm text-gray-300">
                            Use the menu on the left to manage pages and bookings.
                        </p>
                    </div>
                )}

                {/* PAGES SUBMENU CONTENT */}
                {activeMenu === "homePage" && <HomeContentForm />}

                {activeMenu === "barPage" && (
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Bar Page Content</h2>
                        <p className="text-sm text-gray-300">
                            Later you can create a{" "}
                            <code className="text-xs bg-gray-800 px-1 py-0.5 rounded">
                                BarContentForm
                            </code>{" "}
                            component (similar to{" "}
                            <code className="text-xs bg-gray-800 px-1 py-0.5 rounded">
                                HomeContentForm
                            </code>
                            ) and render it here to edit the Bar page content from the admin
                            panel.
                        </p>
                    </div>
                )}

                {/* BOOKINGS CONTENT */}
                {activeMenu === "tables" && (
                    <>
                        <h2 className="text-2xl font-bold mb-4">Table Bookings</h2>
                        <BookingSummary />
                    </>
                )}

                {activeMenu === "rooms" && (
                    <h1 className="text-2xl font-bold">Room bookings will go here</h1>
                )}

                {activeMenu === "functions" && (
                    <p className="text-lg">Function bookings will go here</p>
                )}
            </main>
        </div>
    );
};

export default AdminDashboard;
