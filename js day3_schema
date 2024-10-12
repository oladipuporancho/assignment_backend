const mongoose = require("mongoose");
// Define the User schema
const productSchema = new mongoose.Schema(
  {
    name: String,
    price: { type: Number },
    category: String,
  },
);
// Create the User model
export const Product = mongoose.model("Product", productSchema);