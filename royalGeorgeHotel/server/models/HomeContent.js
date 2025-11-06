import mongoose from "mongoose";

const barSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        tags: [{ type: String }],
        description: { type: String, required: true },
    },
    { _id: false }
);

const menuItemSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        category: { type: String, required: true },
    },
    { _id: false }
);

const heroSchema = new mongoose.Schema(
    {
        overline: { type: String, default: "Welcome to" },
        title: { type: String, required: true },
        subtitle: { type: String },
        tagline: { type: String },
    },
    { _id: false }
);

const homeContentSchema = new mongoose.Schema(
    {
        hero: { type: heroSchema, required: true },
        bars: [barSchema],
        menu: [menuItemSchema],
        updatedAt: { type: Date, default: Date.now },
    },
    { timestamps: true }
);

export default
    mongoose.models.HomeContent ||
    mongoose.model("HomeContent", homeContentSchema);
