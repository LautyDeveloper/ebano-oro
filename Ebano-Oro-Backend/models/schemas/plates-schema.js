import mongoose from "mongoose";

const platoSchema = new mongoose.Schema({
  categoria: { type: String, required: true },
  title: { type: String, required: true },
  desc: { type: String, required: true },
  price: { type: Number, required: true }
});

export default platoSchema;
