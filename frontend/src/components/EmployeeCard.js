import React from "react";

/** EmployeeCard component to display employee details */

const EmployeeCard = ({ employee, onEdit }) => {
    return (
        <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition duration-300">

            <h2 className="text-xl font-bold text-gray-800">
                {employee.name}
            </h2>

            <p className="text-gray-600 mt-1">
                {employee.role}
            </p>

            <p className="text-sm text-gray-400">
                {employee.department}
            </p>

            <button
                className="mt-4 bg-blue-500 hover:bg-blue-600 transition text-white px-4 py-2 rounded-lg"
                onClick={() => onEdit(employee)}
            >
            Edit
            </button>

</div>

    );
};

export default EmployeeCard;
