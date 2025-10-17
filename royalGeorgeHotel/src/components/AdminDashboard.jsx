import React, { useState } from "react";
import BookingSummary from "./BookingSummary";

const AdminDashboard = () => {
  const [activeMenu, setActiveMenu] = useState(""); // Track which menu is clicked

  return (
    <div className="flex min-h-screen bg-gray-100" style={{ width: '100vw', height:'auto'}}>
      {/* Sidebar */}
      <aside className="w-64 bg-gray-200 flex flex-col justify-between">
        <div>
          <div className="bg-yellow-400 p-4 flex items-center space-x-2">
            <div className="flex items-center">
            <img
              src="https://royalgeorgehotel.com.au/wp-content/themes/royalgeorge/images/logo.jpg"
              alt="RG"
              className="h-10 w-auto"
            />
          </div>
            <h1 className="font-bold text-lg">Royal George Hotel</h1>
          </div>

          <div className="p-4 text-black">
            <p className="font-semibold mb-2">Admin</p>
            <p className="text-sm ">admin@gmail.com</p>
          </div>

          <nav className="mt-6">
            <ul className="space-y-2 text-black">
              <li
                className="px-6 py-2 hover:bg-gray-300 cursor-pointer rounded-r-full"
                onClick={() => setActiveMenu("home")}
              >
                Home
              </li>
              <li
                className="px-6 py-2 hover:bg-gray-300 cursor-pointer rounded-r-full"
                onClick={() => setActiveMenu("pages")}
              >
                Pages
              </li>

              <li>
                <p className="px-6 py-2 font-semibold text-gray-600">Bookings</p>
                <ul className="ml-4 space-y-1">
                  <li
                    className={`px-6 py-2 rounded-r-full cursor-pointer font-medium ${
                      activeMenu === "tables" ? "bg-yellow-400" : ""
                    }`}
                    onClick={() => setActiveMenu("tables")}
                  >
                    Table Bookings
                  </li>
                  <li
                    className={`px-6 py-2 rounded-r-full cursor-pointer hover:bg-gray-300 ${
                      activeMenu === "rooms" ? "bg-yellow-400" : ""
                    }`}
                    onClick={() => setActiveMenu("rooms")}
                  >
                    Rooms
                  </li>
                  <li
                    className={`px-6 py-2 rounded-r-full cursor-pointer hover:bg-gray-300 ${
                      activeMenu === "functions" ? "bg-yellow-400" : ""
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

        <div className="p-4 text-gray-600 text-sm space-y-2">
          <p className="cursor-pointer hover:text-gray-800">Settings</p>
          <p className="cursor-pointer hover:text-gray-800">Logout</p>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 bg-black">
        {activeMenu === "tables" && (
          <>
            <h2 className="text-2xl font-bold mb-4">Table Bookings</h2>
            <BookingSummary />
          </>
        )}

        {activeMenu === "rooms" && <h1>Room bookings will go here</h1>}
        {activeMenu === "functions" && <p>Function bookings will go here</p>}
        {activeMenu === "home" && <h1>Welcome to the admin dashboard</h1>}
        {activeMenu === "pages" && <p>Pages section content</p>}
      </main>
    </div>
  );
};

export default AdminDashboard;
