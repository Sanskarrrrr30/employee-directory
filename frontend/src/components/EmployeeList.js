import React from "react";
import EmployeeCard from "./EmployeeCard";

/** EmployeeList component to display list of employees */

const EmployeeList = ({ employees, onEdit }) => {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {employees.length === 0 ? (
        <p className="text-gray-500">No employees found</p>
        ) : (
    employees.map((emp) => (
    <EmployeeCard key={emp._id} employee={emp} onEdit={onEdit} />
    ))
)}
    </div>
    );
};

export default EmployeeList;
