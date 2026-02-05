const express = require("express");
const router = express.Router();
const {
    getEmployees,
    addEmployee,
    updateEmployee
} = require("../controllers/employeeController");

// Route to get all employees
router.get("/", getEmployees);  
// Route to add a new employee
router.post("/", addEmployee);
// Route to update an employee
router.put("/:id", updateEmployee);

module.exports = router;
