// client/src/components/LostAndFoundSection.jsx
import React, { useState } from "react";

export default function LostAndFoundSection({
    headingLine1 = "Lost",
    headingLine2 = "Something?",
    onSubmit,
}) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        details: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (onSubmit) {
            onSubmit(formData);
        } else {
            // default behaviour – you can replace this with API call later
            console.log("Lost & Found form submitted:", formData);
            alert("Thanks, we’ve recorded your lost item details.");
        }

        setFormData({
            name: "",
            email: "",
            phone: "",
            details: "",
        });
    }

    return (
        <section className="w-full bg-neutral-900 py-16">
            <div className="max-w-6xl mx-auto px-4 grid gap-12 md:grid-cols-2 items-center">
                {/* Left heading */}
                <div className="text-left">
                    <h2 className="text-white text-5xl md:text-6xl font-semibold leading-tight">
                        {headingLine1}
                        <br />
                        {headingLine2}
                    </h2>
                </div>

                {/* Right form */}
                <form
                    onSubmit={handleSubmit}
                    className="text-sm text-neutral-200 space-y-6"
                >
                    <div className="space-y-1">
                        <label className="block text-xs uppercase tracking-wide text-neutral-400">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Umesh Dhakal"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-neutral-700 focus:border-white focus:outline-none py-2 text-sm placeholder:text-neutral-500"
                            required
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="block text-xs uppercase tracking-wide text-neutral-400">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="example@xyz.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-neutral-700 focus:border-white focus:outline-none py-2 text-sm placeholder:text-neutral-500"
                            required
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="block text-xs uppercase tracking-wide text-neutral-400">
                            Phone
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="1234-567-890"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-neutral-700 focus:border-white focus:outline-none py-2 text-sm placeholder:text-neutral-500"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="block text-xs uppercase tracking-wide text-neutral-400">
                            Details of Lost Product
                        </label>
                        <textarea
                            name="details"
                            rows={3}
                            placeholder="Details of Lost Product"
                            value={formData.details}
                            onChange={handleChange}
                            className="w-full bg-transparent border-b border-neutral-700 focus:border-white focus:outline-none py-2 text-sm resize-none placeholder:text-neutral-500"
                            required
                        />
                    </div>

                    <div className="flex justify-end pt-4">
                        <button
                            type="submit"
                            className="px-6 py-2 rounded-full bg-white text-black text-sm font-semibold shadow-md hover:bg-neutral-200 transition"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
