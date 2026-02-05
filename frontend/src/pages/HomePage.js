import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import EmployeeList from "../components/EmployeeList";
import EmployeeForm from "../components/EmployeeForm";
import {
    fetchEmployees,
    createEmployee,
    editEmployee
} from "../services/employeeService";

/** 
 * HomePage component to display the home page 
 * It displays the employee directory, search bar, employee form and employee list
 */

const HomePage = () => {
    // State to store employees
    const [employees, setEmployees] = useState([]);
    // State to store search term
    const [searchTerm, setSearchTerm] = useState("");
    // State to store selected employee
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    // Function to load employees
    const loadEmployees = async () => {
    const res = await fetchEmployees();
    setEmployees(res.data);
    };

    // Effect to load employees
    useEffect(() => {
        loadEmployees();
    }, []);

    // Function to handle form submission
    const handleSubmit = async (data) => {
    if (data._id) {
        await editEmployee(data._id, data);
    } else {
        await createEmployee(data);
    }
    setSelectedEmployee(null);
    loadEmployees();
    };

    // Function to filter employees
    const filteredEmployees = employees.filter(
    (emp) =>
        emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        emp.department.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
            <div className="max-w-5xl mx-auto space-y-8">


            <h1 className="text-3xl font-semibold text-center">
                Employee Directory
            </h1>

            <div className="bg-white p-6 rounded-xl shadow">
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
    
            <div className="bg-white p-6 rounded-xl shadow">
                <EmployeeForm
                selectedEmployee={selectedEmployee}
                onSubmit={handleSubmit}
                />
            </div>
    
            <EmployeeList
                employees={filteredEmployees}
                onEdit={setSelectedEmployee}
            />
    
            </div>
        </div>
        );
    
};

export default HomePage;
