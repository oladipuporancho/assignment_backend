const mongoose = require("mongoose");
const express = require("express");
const { Product } = require("./schema");
// Connect to MongoDB

const app = express();

app.use(express.json());

const createProduct = async () => {
  const newProduct = new Product({
    name: "wristwatches",
    price: 700,
    category: "accesories",
  });
  try {
    const savedProduct = await newProduct.save();
    console.log("Product created:", savedProduct);
  } catch (err) {
    console.error("Error creating user:", err);
  }
};

const getProducts = async () => {
  try {
    const products = await Producct.find();
    console.log("All Products:", products);
  } catch (err) {
    console.error("Error retrieving products:", err);
  }
};

const updateProduct = async (name, newPrice) => {
  try {
    const updatedProduct = await User.findOneAndUpdate(
      { name }, // Query
      { price: newPrice }, // Update
      { new: true } // Return the updated document
    );
    console.log("product updated:", updatedProduct);
  } catch (err) {
    console.error("Error updating product:", err);
  }
};

const deleteProduct = async (name) => {
  try {
    const deletedProduct = await User.findOneAndDelete({ name });
    console.log("Product deleted:", deletedProduct);
  } catch (err) {
    console.error("Error deleting product:", err);
  }
};
// Example usage

mongoose
  .connect("mongodb://localhost:27017/my_database", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(5000, () => {
      console.log("App is running on port 5000");
    });
  })
  .catch((err) => {
    console.error("Connection error", err);
  });

createProduct();
getProducts();
updateProduct("wristwatches", 800);
deleteProduct("wristwatches");