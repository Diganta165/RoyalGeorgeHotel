import React, { useState } from 'react';

const HomePageContent = () => {
    const [heroCont, setHeroCont] = useState({
        title: ""
    });


    const handleChange = (e) => {
        console.log(e.target.value)
        const { name, value, type, checked } = e.target;
        setHeroCont({ ...heroCont, [name]: type === "checkbox" ? checked : value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submit clicked!");
        try {
            const response = await fetch("http://localhost:5000/api/pages/heroContent", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(heroCont),
            });

            const data = await response.json();

            if (response.ok) {
                alert("Booking submitted successfully!");
                setHeroCont({
                    title: "",
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
        <div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <input name="title" value={heroCont.title} onChange={handleChange} placeholder="First Name" className="bg-transparent border border-gray-500 px-4 py-2 rounded" />
                    {/* <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="bg-transparent border border-gray-500 px-4 py-2 rounded" /> */}
                </div>

                <div className="text-center">
                    <button type="submit" className="px-8 py-2 bg-white text-black rounded hover:bg-gray-200">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default HomePageContent;