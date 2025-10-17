import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, trim: true },
  phone: { type: String, required: true },
  email: { type: String, trim: true },
  date: { type: String },   // store as ISO string or date depending on needs
  time: { type: String },
  size: { type: Number },
  area: { type: String },
  consent: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Booking || mongoose.model("Booking", bookingSchema);
