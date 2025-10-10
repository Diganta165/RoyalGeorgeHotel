import React, { useState } from "react";
import heroBanner from "../assets/contact_hero_background.jpg";
import Header from "./header";
import Footer from "./Footer";


export default function ContactUs() {
  // React state for bubble and modals
  const [bubbleOpen, setBubbleOpen] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const [showRooms, setShowRooms] = useState(false);

  return (
    <div className="bg-black text-white font-sans relative" style={{ width: '100vw', height: '100vh' }}>

      {/* Navbar */}
      <Header></Header>

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
            Feel free to get in touch! Fill the form out below and one of our friendly staff will be in touch as soon as we can. Alternatively, use the buttons below to get in direct contact with us. Please check our opening times in the footer to ensure we are open.
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



      <Footer></Footer>
    </div>
  );
}
