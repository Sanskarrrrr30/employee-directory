const Employee = require("../models/Employee");

/**
 * Fetching all employees
 */
exports.getEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
};

/**
 * Adding new employee
 */
exports.addEmployee = async (req, res) => {
    const employee = new Employee(req.body);
    const savedEmployee = await employee.save();
    res.json(savedEmployee);
};

/**
 * Updating employee details
 */
exports.updateEmployee = async (req, res) => {
    const updatedEmployee = await Employee.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(updatedEmployee);
};
