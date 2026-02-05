const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config(); // Load environment variables from .env file
connectDB(); // Connect to database

const app = express(); // Create express application

// Middleware to handle CORS and JSON data
app.use(cors());
app.use(express.json());

// Employee routes
app.use("/api/employees", require("./routes/employeeRoutes"));

const PORT = 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
