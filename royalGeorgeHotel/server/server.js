import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import Booking from "./models/Booking.js";
import HomeContent from "./models/HomeContent.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));

// --------- BOOKINGS (existing) ---------

// ✅ Create a new booking
app.post("/api/bookings", async (req, res) => {
    try {
        const booking = await Booking.create(req.body);
        res.status(201).json(booking);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to create booking" });
    }
});

// ✅ Get all bookings
app.get("/api/bookings", async (req, res) => {
    try {
        const bookings = await Booking.find().sort({ _id: -1 }); // newest first
        res.json(bookings);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch bookings" });
    }
});

// --------- HOME PAGE CONTENT ---------

// Helper to make sure there is always 1 document
const getOrCreateHomeContent = async () => {
    let doc = await HomeContent.findOne();
    if (!doc) {
        doc = await HomeContent.create({
            hero: {
                overline: "Welcome to",
                title: "Royal George Hotel",
                subtitle: "where the best night out begins",
                tagline:
                    "Discover our bars, gaming, dining and functions – all in one vibrant destination.",
            },
            bars: [
                {
                    title: "BrisVegas Gaming",
                    tags: ["Gaming Lounge", "TAB", "Keno"],
                    description:
                        "Enjoy a premium gaming experience with the latest machines in a relaxed, comfortable environment.",
                },
                {
                    title: "BrisVegas Lounge",
                    tags: ["Cocktails", "Live Music"],
                    description:
                        "Unwind with cocktails, live entertainment, and a warm atmosphere perfect for catch-ups.",
                },
                {
                    title: "Beer Garden",
                    tags: ["Outdoor", "Casual Drinks"],
                    description:
                        "Open-air vibes, cold drinks, and casual bites – ideal for afternoons that turn into evenings.",
                },
                {
                    title: "Mirror Room",
                    tags: ["Private", "Functions"],
                    description:
                        "A stylish indoor space for private events, celebrations, and special gatherings.",
                },
            ],
            menu: [
                { name: "BBQ Platter", category: "Share Plates" },
                { name: "All Day Breakfast", category: "Breakfast" },
                { name: "Cheese Burger", category: "Burgers" },
                { name: "Classic Parmigiana", category: "Mains" },
            ],
        });
    }
    return doc;
};

// ✅ Get current home page content
app.get("/api/home-content", async (req, res) => {
    try {
        const doc = await getOrCreateHomeContent();
        res.json(doc);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch home page content" });
    }
});

// ✅ Update home page content (used by Admin Panel)
app.put("/api/home-content", async (req, res) => {
    try {
        const { hero, bars, menu } = req.body;
        const doc = await getOrCreateHomeContent();

        if (hero) doc.hero = hero;
        if (Array.isArray(bars)) doc.bars = bars;
        if (Array.isArray(menu)) doc.menu = menu;

        doc.updatedAt = new Date();
        await doc.save();

        res.json(doc);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to update home page content" });
    }
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
