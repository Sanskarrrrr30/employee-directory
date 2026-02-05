import axios from "axios";

const API_URL = "http://localhost:5000/api/employees";

/**
 * Getting all employees
 */
export const fetchEmployees = () => axios.get(API_URL);

/**
 * Adding new employee
 */
export const createEmployee = (employeeData) =>
    axios.post(API_URL, employeeData);

/**
 * Updating employee
 */
export const editEmployee = (id, employeeData) =>
    axios.put(`${API_URL}/${id}`, employeeData);
