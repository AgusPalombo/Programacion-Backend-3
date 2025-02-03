import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ["dog", "cat"], required: true },
  adopted: { type: Boolean, default: false },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
  createdAt: { type: Date, default: Date.now }
});

export const Pet = mongoose.model("Pet", petSchema);