import React, { useState } from "react";
import heroBanner from "../assets/contact_hero_background.jpg";


export default function ContactUs() {
  // React state for bubble and modals
  const [bubbleOpen, setBubbleOpen] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const [showRooms, setShowRooms] = useState(false);

  return (
    <div className="bg-black text-white font-sans relative" style={{ width: '100vw', height: '100vh' }}>

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
            <a href="/" className="text-white hover:text-yellow-300">Home</a>
            <a href="#" className="text-white hover:text-yellow-300">Bars</a>
            <a href="#" className="text-white hover:text-yellow-300">Menu</a>
            <a
              href="#"
              className="text-yellow-300 relative inline-flex flex-col items-center"
            >
              Contact Us
              <span className="mt-1 h-0.5 w-20 rounded-full bg-yellow-300"></span>
            </a>
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

      {/* Hero Banner */}
      <section className="relative">
        <img
          src={heroBanner}
          alt="Hotel Banner"
          className="w-full h-72 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-sm max-w-2xl">
            Get in touch! Fill the form out below and one of our friendly staff will be in touch as soon as we can. Alternatively, use the buttons below to get in direct contact with us. Please check our opening times in the footer to ensure we are open.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#191A1C] min-h-screen flex items-center justify-center px-2 py-8 sm:px-0">
        <div className="relative w-full max-w-6xl mx-auto rounded-2xl bg-white p-2 sm:p-4 flex flex-col md:flex-row items-stretch border-4 border-white border-opacity-80">
          {/* Left - Contact Info */}
          <div className="relative bg-black rounded-xl py-10 px-6 md:px-10 w-full md:w-[410px] flex flex-col justify-between md:mr-6 mb-6 md:mb-0">
            <div>
              <h2 className="text-white text-3xl font-bold mb-2">Contact Information</h2>
              <p className="text-white/80 text-base mb-8 mt-1">Say something to start a live chat!</p>
              <div className="space-y-7">
                <div className="flex items-center space-x-4">
                  <span className="text-lg">📞</span>
                  <a href="tel:0732522524" className="text-white text-lg underline">(07) 3252 2524</a>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-lg">📧</span>
                  <a href="mailto:demo@gmail.com" className="text-white text-lg">demo@gmail.com</a>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-lg">📍</span>
                  <span className="text-white text-lg leading-tight">
                    Cnr Ann & Brunswick Streets,
                    <br />
                    Fortitude Valley, Brisbane
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-lg">🕒</span>
                  <span className="text-white text-lg leading-tight">
                    Sunday to Thursday: 10am — 5:30am
                    <br />
                    Friday & Saturday: 10am — 5:30am
                  </span>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white transition">
                <img src="https://www.google.com/s2/favicons?sz=64&domain=twitter.com" alt="Twitter" className="w-6 h-6"/>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white transition">
                <img src="https://www.google.com/s2/favicons?sz=64&domain=instagram.com" alt="Instagram" className="w-6 h-6"/>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white transition">
                <img src="https://www.google.com/s2/favicons?sz=64&domain=discord.com" alt="Discord" className="w-6 h-6"/>
              </a>
            </div>
          </div>

          {/* Right - Form */}
    <form class="bg-white rounded-xl py-8 px-4 sm:px-8 w-full md:w-[60%] min-h-[570px] flex flex-col relative z-10">
      <div class="flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0 mb-8">
        <div class="w-full sm:w-1/2">
          <label class="block text-gray-700 text-base font-medium mb-2" for="firstName">First Name</label>
          <input type="text" id="firstName" placeholder="John" class="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none py-1 text-black text-xl"/>
        </div>
        <div class="w-full sm:w-1/2">
          <label class="block text-gray-700 text-base font-medium mb-2" for="lastName">Last Name</label>
          <input type="text" id="lastName" placeholder="Doe" class="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none py-1 text-black text-xl"/>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row sm:space-x-6 space-y-6 sm:space-y-0 mb-8">
        <div class="w-full sm:w-1/2">
          <label class="block text-gray-700 text-base font-medium mb-2" for="email">Email</label>
          <input type="email" id="email" placeholder="" class="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none py-1 text-black text-xl"/>
        </div>
        <div class="w-full sm:w-1/2">
          <label class="block text-gray-700 text-base font-medium mb-2" for="phone">Phone Number</label>
          <div class="flex items-center">
            <input type="tel" id="phone" value="+1 012 3456 789" class="w-full bg-transparent border-b border-black focus:border-yellow-500 outline-none py-1 text-black text-xl"/>
          </div>
        </div>
      </div>
      <div class="mb-8">
        <label class="block text-black text-base font-semibold mb-2">Select Subject?</label>
        <div class="flex flex-wrap items-center gap-x-8 gap-y-2">
          <label class="flex items-center space-x-2 text-black font-medium"><input checked type="radio" name="subject" class="accent-black"/><span>General Inquiry</span></label>
          <label class="flex items-center space-x-2 text-black font-medium"><input type="radio" name="subject" class="accent-black"/><span>General Inquiry</span></label>
          <label class="flex items-center space-x-2 text-black font-medium"><input type="radio" name="subject" class="accent-black"/><span>General Inquiry</span></label>
          <label class="flex items-center space-x-2 text-black font-medium"><input type="radio" name="subject" class="accent-black"/><span>General Inquiry</span></label>
        </div>
      </div>
      <div class="mb-5">
        <label class="block text-gray-400 text-base font-medium mb-2" for="message">Message</label>
        <textarea id="message" placeholder="Write your message.." class="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none py-1 text-black text-lg resize-none h-20"></textarea>
        <div class="text-xs text-gray-400 mt-1">* Offline: 9am – 5pm AEST *</div>
      </div>
      <div class="flex justify-end items-center mt-6">
        <button type="submit" class="bg-black text-white rounded-lg px-10 py-3 font-medium text-lg shadow-lg hover:bg-yellow-300 hover:text-black">Send Message</button>
      </div>
    </form>

  </div>

      </section>

      {/* --- Floating Bookings Bubble --- */}
      <div className="fixed top-1/2 right-10 -translate-y-1/2 z-50">
        <div className="relative">
          <button
            type="button"
            onClick={() => setBubbleOpen(!bubbleOpen)}
            className="w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-black border-2 border-white grid place-items-center text-sm font-medium hover:bg-yellow-300 hover:text-black transition"
          >
            Bookings
          </button>

          {/* Table Button */}
          <button
            type="button"
            onClick={() => setShowTable(true)}
            className={`absolute w-20 h-20 lg:w-24 lg:h-24 grid place-items-center rounded-full bg-black border-2 border-white text-xs lg:text-sm font-medium hover:bg-yellow-300 hover:text-black transition
              ${bubbleOpen ? "translate-x-[-80%] translate-y-[-220%] opacity-100 scale-100" : "opacity-0 scale-0"}`}
            style={{ transition: "all 0.28s cubic-bezier(.2,.9,.2,1)" }}
          >
            Table
          </button>

          {/* Events Button */}
          <button
            type="button"
            onClick={() => setShowEvents(true)}
            className={`absolute w-20 h-20 lg:w-24 lg:h-24 grid place-items-center rounded-full bg-black border-2 border-white text-xs lg:text-sm font-medium hover:bg-yellow-300 hover:text-black transition
              ${bubbleOpen ? "translate-x-[-150%] translate-y-[-90%] opacity-100 scale-100" : "opacity-0 scale-0"}`}
            style={{ transition: "all 0.28s cubic-bezier(.2,.9,.2,1) 0.06s" }}
          >
            Events
          </button>

          {/* Rooms Button */}
          <button
            type="button"
            onClick={() => setShowRooms(true)}
            className={`absolute w-20 h-20 lg:w-24 lg:h-24 grid place-items-center rounded-full bg-black border-2 border-white text-xs lg:text-sm font-medium hover:bg-yellow-300 hover:text-black transition
              ${bubbleOpen ? "translate-x-[-80%] translate-y-[20%] opacity-100 scale-100" : "opacity-0 scale-0"}`}
            style={{ transition: "all 0.28s cubic-bezier(.2,.9,.2,1) 0.12s" }}
          >
            Rooms
          </button>
        </div>
      </div>

      {/* --- Table Modal --- */}
      {showTable && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setShowTable(false)}
        >
          <div
            className="relative w-[90vw] sm:w-[80vw] md:w-[70vw] h-[85vh] md:h-[70vh] max-w-[1200px] max-h-[90vh] bg-white text-black rounded-lg shadow-xl overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setShowTable(false)}
              className="absolute top-3 right-3 px-3 py-1 bg-black text-white rounded hover:bg-yellow-300 hover:text-black transition z-10"
            >
              ✕
            </button>
            <iframe
              src="bookingpage.html"
              title="Table Booking"
              className="w-full h-full border-0"
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
            ></iframe>
          </div>
        </div>
      )}

      {/* --- Events Modal --- */}
      {showEvents && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setShowEvents(false)}
        >
          <div
            className="relative w-[90vw] sm:w-[80vw] md:w-[70vw] h-[85vh] md:h-[70vh] max-w-[1200px] max-h-[90vh] bg-white text-black rounded-lg shadow-xl overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setShowEvents(false)}
              className="absolute top-3 right-3 px-3 py-1 bg-black text-white rounded hover:bg-yellow-300 hover:text-black transition z-10"
            >
              ✕
            </button>
            <iframe
              src="functionbooking.html"
              title="Events"
              className="w-full h-full border-0"
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
            ></iframe>
          </div>
        </div>
      )}

      {/* --- Rooms Modal --- */}
      {showRooms && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setShowRooms(false)}
        >
          <div
            className="relative w-[90vw] sm:w-[80vw] md:w-[70vw] h-[85vh] md:h-[70vh] max-w-[1200px] max-h-[90vh] bg-white text-black rounded-lg shadow-xl overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setShowRooms(false)}
              className="absolute top-3 right-3 px-3 py-1 bg-black text-white rounded hover:bg-yellow-300 hover:text-black transition z-10"
            >
              ✕
            </button>
            <iframe
              src="hotelbooking.html"
              title="Rooms"
              className="w-full h-full border-0"
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
            ></iframe>
          </div>
        </div>
      )}



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
