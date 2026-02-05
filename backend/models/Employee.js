const mongoose = require("mongoose");

/**
 * Schema defining employee structure in database
 * Each employee must have name, role and department
 */

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Employee", employeeSchema);
