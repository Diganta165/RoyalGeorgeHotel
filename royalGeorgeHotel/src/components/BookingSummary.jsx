import React, { useEffect, useState } from "react";

const BookingSummary = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/bookings") // fetch all bookings from backend
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">All Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-2 py-1">First Name</th>
              <th className="border px-2 py-1">Last Name</th>
              <th className="border px-2 py-1">Phone</th>
              <th className="border px-2 py-1">Email</th>
              <th className="border px-2 py-1">Date</th>
              <th className="border px-2 py-1">Time</th>
              <th className="border px-2 py-1">Size</th>
              <th className="border px-2 py-1">Area</th>
              <th className="border px-2 py-1">Consent</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b._id}>
                <td className="border px-2 py-1">{b.firstName}</td>
                <td className="border px-2 py-1">{b.lastName}</td>
                <td className="border px-2 py-1">{b.phone}</td>
                <td className="border px-2 py-1">{b.email}</td>
                <td className="border px-2 py-1">{b.date}</td>
                <td className="border px-2 py-1">{b.time}</td>
                <td className="border px-2 py-1">{b.size}</td>
                <td className="border px-2 py-1">{b.area}</td>
                <td className="border px-2 py-1">{b.consent ? "No" : "Yes"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BookingSummary;
