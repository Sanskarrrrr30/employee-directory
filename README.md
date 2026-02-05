# Employee Directory Application

## 📖 Project Overview
The Employee Directory Application is a full-stack web application designed to manage employee records efficiently. The application allows users to view, search, add, and edit employee details through a responsive and user-friendly interface.

---

## 🎯 Features

- Display list of employees
- Search employees by name or department
- Add new employee details
- Edit existing employee information
- Responsive and clean UI design
- Proper modular file structure
- Backend API integration with database

---

## 🛠 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js

### Database
- MongoDB (Mongoose)

---

## 📁 Project Structure

employee-directory

│
├── backend

│ ├── config # Database configuration

│ ├── controllers # Business logic

│ ├── models # Database schemas

│ ├── routes # API routes

│ ├── server.js # Entry point for backend

│ └── package.json

│
├── frontend
│ ├── public
│ ├── src
│ │ ├── components # Reusable UI components
│ │ ├── pages # Page-level views
│ │ ├── services # API calls and data handling
│ │ ├── utils # Helper functions
│ │ ├── assets # Styles or static resources
│ │ ├── App.js
│ │ └── index.js
│ └── package.json
│
└── README.md


---

## ⚙️ Installation and Setup

### Step 1: Clone Repository
git clone <https://github.com/Sanskarrrrr30/employee-directory>

cd employee-directory


---

### Step 2: Backend Setup

Navigate to backend folder:

cd backend
npm install


Create a .env file inside backend folder and add:

MONGO_URI=your_mongodb_connection_string


Start backend server:

npm start


Backend runs on:
http://localhost:5000


---

### Step 3: Frontend Setup

Open new terminal and navigate to frontend folder:

cd frontend
npm install
npm start


Frontend runs on:
http://localhost:3000


---

## 🔍 API Endpoints

| Method | Endpoint | Description |
|----------|-------------|----------------|
| GET | /api/employees | Fetch all employees |
| POST | /api/employees | Add new employee |
| PUT | /api/employees/:id | Update employee |

---

## 📸 Application Workflow

1. User opens application
2. Employee list is fetched from backend
3. User can search employees
4. User can add or edit employee data
5. Data is stored in MongoDB database

---


---
