import React from "react";

export default function Home() {
  return (
    <div className="bg-black font-sans min-h-screen" style={{ width: '100vw', height: '100vh' }}>
      {/* Navbar */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://royalgeorgehotel.com.au/wp-content/themes/royalgeorge/images/logo.jpg"
              alt="RG"
              className="h-10 w-auto"
            />
          </div>

          <nav className="hidden md:flex items-center justify-center gap-8">
            <a
              href="#"
              className="text-yellow-300 relative inline-flex flex-col items-center"
            >
              Home
              <span className="mt-1 h-0.5 w-20 rounded-full bg-yellow-300"></span>
            </a>
            <a href="#" className="text-white hover:text-yellow-300">Bars</a>
            <a href="#" className="text-white hover:text-yellow-300">Menu</a>
            <a href="/contact" className="text-white hover:text-yellow-300">Contact Us</a>
            
          </nav>

          <div className="hidden sm:flex items-center justify-end">
            <a className="px-6 py-2 rounded-full bg-white text-black font-semibold">
              Login
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button className="text-white focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      
      {/* Footer */}
      <footer className="bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 space-y-4">
            <img
              src="https://royalgeorgehotel.com.au/wp-content/themes/royalgeorge/images/logo.jpg"
              alt="RG logo"
              className="h-14 w-auto"
            />
            <p className="text-base leading-7">
              The Royal George Hotel is where the best night out begins. Our
              family owned pub is made up of 4 separate bars including the
              valley’s largest beer garden.
            </p>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-yellow-600">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-600">
                    Bars
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-600">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-600">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-yellow-600">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-600">
                    Career
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-600">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-600">
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="w-full overflow-hidden rounded-md ring-1 ring-black/10">
              <iframe
                className="w-full h-64 md:h-72 lg:h-80"
                loading="lazy"
                title="Royal George Hotel - Map"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Royal%20George%20Hotel%20327%20Brunswick%20St%20Fortitude%20Valley%20QLD%204006&output=embed"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="bg-black text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 text-center text-sm">
            The Royal George Hotel, Cnr Ann & Brunswick Streets, Fortitude
            Valley{" "}
            <a
              href="tel:+61732525224"
              className="underline underline-offset-2 hover:text-yellow-400"
            >
              (07) 3252 5224
            </a>{" "}
            • Copyright RoyalGeorgeHotel. ©️
          </div>
        </div>
      </footer>
    </div>
  );
}
