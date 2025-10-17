import React, { useState } from "react";
import BookingForm from "./BookingForm";

export default function BookingBubble() {
  const [bubbleOpen, setBubbleOpen] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const [showRooms, setShowRooms] = useState(false);

  return (
    <>
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
              ${
                bubbleOpen
                  ? "translate-x-[-80%] translate-y-[-220%] opacity-100 scale-100"
                  : "opacity-0 scale-0"
              }`}
            style={{ transition: "all 0.28s cubic-bezier(.2,.9,.2,1)" }}
          >
            Table
          </button>

          {/* Events Button */}
          <button
            type="button"
            onClick={() => setShowEvents(true)}
            className={`absolute w-20 h-20 lg:w-24 lg:h-24 grid place-items-center rounded-full bg-black border-2 border-white text-xs lg:text-sm font-medium hover:bg-yellow-300 hover:text-black transition
              ${
                bubbleOpen
                  ? "translate-x-[-150%] translate-y-[-90%] opacity-100 scale-100"
                  : "opacity-0 scale-0"
              }`}
            style={{ transition: "all 0.28s cubic-bezier(.2,.9,.2,1) 0.06s" }}
          >
            Events
          </button>

          {/* Rooms Button */}
          <button
            type="button"
            onClick={() => setShowRooms(true)}
            className={`absolute w-20 h-20 lg:w-24 lg:h-24 grid place-items-center rounded-full bg-black border-2 border-white text-xs lg:text-sm font-medium hover:bg-yellow-300 hover:text-black transition
              ${
                bubbleOpen
                  ? "translate-x-[-80%] translate-y-[20%] opacity-100 scale-100"
                  : "opacity-0 scale-0"
              }`}
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
            className="relative w-[90vw] sm:w-[80vw] md:w-[55vw] h-[85vh] md:h-[55vh] bg-white text-black rounded-lg shadow-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowTable(false)}
              className="absolute top-3 right-3 px-3 py-1 bg-black text-white rounded hover:bg-yellow-300 hover:text-black transition z-10"
            >
              ✕
            </button>
            <BookingForm></BookingForm>
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
            className="relative w-[90vw] sm:w-[80vw] md:w-[55vw] h-[85vh] md:h-[55vh] bg-white text-black rounded-lg shadow-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowEvents(false)}
              className="absolute top-3 right-3 px-3 py-1 bg-black text-white rounded hover:bg-yellow-300 hover:text-black transition z-10"
            >
              ✕
            </button>
            <BookingForm></BookingForm>
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
            className="relative w-[90vw] sm:w-[80vw] md:w-[55vw] h-[85vh] md:h-[55vh] bg-white text-black rounded-lg shadow-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowRooms(false)}
              className="absolute top-3 right-3 px-3 py-1 bg-black text-white rounded hover:bg-yellow-300 hover:text-black transition z-10"
            >
              ✕
            </button>
            <BookingForm></BookingForm>
          </div>
        </div>
      )}
    </>
  );
}
