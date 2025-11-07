import React, { useEffect, useState } from "react";
import BookingForm from "./BookingForm";

const BookingSummary = () => {
  const [bookings, setBookings] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedData, setEditedData] = useState({});
  const [showForm, setShowForm] = useState(false); // for modal

  // Fetch all bookings on load
  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    const res = await fetch("http://localhost:5000/api/bookings");
    const data = await res.json();
    setBookings(data);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this booking?")) {
      await fetch(`http://localhost:5000/api/bookings/${id}`, { method: "DELETE" });
      fetchBookings();
    }
  };

  const handleEdit = (booking) => {
    setEditingId(booking._id);
    setEditedData(booking);
  };

  const handleUpdate = async (id) => {
    await fetch(`http://localhost:5000/api/bookings/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editedData),
    });
    setEditingId(null);
    fetchBookings();
  };

  return (
    <div>
      <h3 className="text-xl mb-4">All Table Bookings</h3>

      {/* Add Table Button */}
      <button
        onClick={() => setShowForm(true)}
        className="mb-4 px-4 py-2 bg-blue-500 rounded text-white hover:bg-blue-600"
      >
        Add Table
      </button>

      <table className="w-full text-sm bg-gray-900 text-white border border-gray-700">
        <thead>
          <tr className="bg-gray-800">
            <th className="p-2">Name</th>
            <th className="p-2">Phone</th>
            <th className="p-2">Email</th>
            <th className="p-2">Date</th>
            <th className="p-2">Time</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={b._id} className="border-t border-gray-700">
              <td className="p-2">
                {editingId === b._id ? (
                  <>
                    <input
                      value={editedData.firstName || ""}
                      onChange={(e) =>
                        setEditedData({ ...editedData, firstName: e.target.value })
                      }
                      className="bg-gray-800 px-2 py-1 rounded mb-1 block"
                      placeholder="First Name"
                    />
                    <input
                      value={editedData.lastName || ""}
                      onChange={(e) =>
                        setEditedData({ ...editedData, lastName: e.target.value })
                      }
                      className="bg-gray-800 px-2 py-1 rounded block"
                      placeholder="Last Name"
                    />
                  </>
                ) : (
                  `${b.firstName} ${b.lastName}`
                )}
              </td>

              <td className="p-2">
                {editingId === b._id ? (
                  <input
                    value={editedData.phone || ""}
                    onChange={(e) =>
                      setEditedData({ ...editedData, phone: e.target.value })
                    }
                    className="bg-gray-800 px-2 py-1 rounded"
                  />
                ) : (
                  b.phone
                )}
              </td>

              <td className="p-2">
                {editingId === b._id ? (
                  <input
                    value={editedData.email || ""}
                    onChange={(e) =>
                      setEditedData({ ...editedData, email: e.target.value })
                    }
                    className="bg-gray-800 px-2 py-1 rounded"
                  />
                ) : (
                  b.email
                )}
              </td>

              <td className="p-2">
                {editingId === b._id ? (
                  <input
                    type="date"
                    value={editedData.date || ""}
                    onChange={(e) =>
                      setEditedData({ ...editedData, date: e.target.value })
                    }
                    className="bg-gray-800 px-2 py-1 rounded"
                  />
                ) : (
                  b.date
                )}
              </td>

              <td className="p-2">
                {editingId === b._id ? (
                  <input
                    type="time"
                    value={editedData.time || ""}
                    onChange={(e) =>
                      setEditedData({ ...editedData, time: e.target.value })
                    }
                    className="bg-gray-800 px-2 py-1 rounded"
                  />
                ) : (
                  b.time
                )}
              </td>

              <td className="p-2">
                {editingId === b._id ? (
                  <>
                    <button
                      className="bg-green-500 px-2 py-1 mr-2 rounded"
                      onClick={() => handleUpdate(b._id)}
                    >
                      Save
                    </button>
                    <button
                      className="bg-gray-500 px-2 py-1 rounded"
                      onClick={() => setEditingId(null)}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="bg-yellow-500 px-2 py-1 mr-2 rounded"
                      onClick={() => handleEdit(b)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 px-2 py-1 rounded"
                      onClick={() => handleDelete(b._id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-900 p-6 rounded shadow-lg w-full max-w-2xl relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-2 text-white font-bold"
            >
              X
            </button>
            <BookingForm onSuccess={() => { setShowForm(false); fetchBookings(); }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingSummary;
