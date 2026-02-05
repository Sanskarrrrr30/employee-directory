import React, { useState, useEffect } from "react";

/** EmployeeForm component to add or edit employee details */

const EmployeeForm = ({ selectedEmployee, onSubmit }) => {
    // State to store employee data
    const [formData, setFormData] = useState({
        name: "",
        role: "",
        department: ""
    });

    // Effect to set the form data when an employee is selected
    useEffect(() => {
    if (selectedEmployee) {
        setFormData(selectedEmployee);
    }
    }, [selectedEmployee]);

    // Function to handle changes in the form
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ name: "", role: "", department: "" });
    };
    
    return (
        
    <form onSubmit={handleSubmit} className="space-y-3">
        <input
            name="name"
            placeholder="Name"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
            value={formData.name}
            onChange={handleChange}
            required
        />

        <input
            name="role"
            placeholder="Role"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
            value={formData.role}
            onChange={handleChange}
            required
        />
        <input
            name="department"
            placeholder="Department"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
            value={formData.department}
            onChange={handleChange}
            required
        />

        <button className="bg-green-500 hover:bg-green-600 transition text-white px-6 py-2 rounded-lg">
            {selectedEmployee ? "Update" : "Submit"}
        </button>
    </form>
    );
};

export default EmployeeForm;
