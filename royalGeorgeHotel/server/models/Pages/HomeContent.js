import mongoose from "mongoose";

const heroContentSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },

});


export default mongoose.models.heroContent || mongoose.model("heroContent", heroContentSchema);
