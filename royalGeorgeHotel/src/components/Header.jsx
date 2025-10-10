import React from 'react';

const Header = () => {
    return (
        <div className="bg-black font-sans" style={{ width: '100vw', height:'auto'}}>
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
            <a href="/" className="text-white hover:text-yellow-300">Home</a>
            <a href="/bars" className="text-white hover:text-yellow-300">Bars</a>
            <a href="/Menu" className="text-white hover:text-yellow-300">Menu</a>
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
        </div>
    );
};

export default Header;