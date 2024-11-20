const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");

const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://admin:admin1234@webservicemanagement.crbvb.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB!"); // Debug: Log successful connection
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err); // Debug: Log connection error
  });

// Routes
app.use("/api/products", productRoute);

// Test route
app.get("/", (req, res) => {
  res.send("Hello from Node API");
});

console.log("Hello World!");
