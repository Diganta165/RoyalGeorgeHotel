import React, { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    size: "",
    area: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("Submit clicked!");
  try {
    const response = await fetch("http://localhost:5000/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Booking submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        size: "",
        area: "",
        consent: false,
      }); // reset form
      // navigate("/booking-summary", { state: { formData } }); // optional
    } else {
      alert("Error submitting booking: " + (data.error || "unknown error"));
    }
  } catch (error) {
    console.error(error);
    alert("Error connecting to server");
  }
};



  return (
    <div className="bg-[#2e2e38] text-white w-full max-w-4xl mx-auto rounded-md shadow-lg p-8">
      <h2 className="text-2xl font-bold text-center mb-4">Table Booking</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="bg-transparent border border-gray-500 px-4 py-2 rounded" />
          <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="bg-transparent border border-gray-500 px-4 py-2 rounded" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="bg-transparent border border-gray-500 px-4 py-2 rounded" />
          <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="bg-transparent border border-gray-500 px-4 py-2 rounded" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input type="date" name="date" value={formData.date} onChange={handleChange} className="bg-transparent border border-gray-500 px-4 py-2 rounded" />
          <input type="time" name="time" value={formData.time} onChange={handleChange} className="bg-transparent border border-gray-500 px-4 py-2 rounded" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input name="size" value={formData.size} onChange={handleChange} placeholder="Booking Size" className="bg-transparent border border-gray-500 px-4 py-2 rounded" />
          <input name="area" value={formData.area} onChange={handleChange} placeholder="Preferred Area" className="bg-transparent border border-gray-500 px-4 py-2 rounded" />
        </div>

        <div className="flex items-center">
          <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} className="mr-2" />
          <label className="text-xs text-gray-300">I do not consent to join marketing list.</label>
        </div>

        <div className="text-center">
          <button type="submit" className="px-8 py-2 bg-white text-black rounded hover:bg-gray-200">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
