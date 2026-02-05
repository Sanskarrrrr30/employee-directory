const mongoose = require("mongoose");

/** 
 * Connecting to the database(MongoDB)
 * If connection is successful, log a message
 * If connection is failed, log an error and exit the process
*/
const connectDB = async () => {
    try {
        // Attempt to connect to the database
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Database connection failed");
        process.exit(1);
    }
};

module.exports = connectDB;
