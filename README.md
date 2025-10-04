# College Attendance Manager - Backend

[Live Project Link](https://college-attendance-manager-be.onrender.com)

[GitHub Repository](https://github.com/vjbravo123/College_attendance_manager_be.git)

## Overview

The backend of the College Attendance Manager is built using **Express.js** and **MongoDB**. It provides RESTful APIs to handle authentication, attendance management, and reporting for students and teachers. The server ensures secure password storage using **bcrypt** and enables cross-origin requests with **CORS**.

## Features

* **User Authentication**: Signup and login for students and teachers with password hashing.
* **Attendance Management**: Record and retrieve student attendance.
* **Reports**: Generate attendance statistics for classes and individual students.
* **CORS Enabled**: Allows frontend apps to communicate securely.
* **Environment Variables**: Configuration using `.env` file.

## Tech Stack & Libraries

* **Node.js & Express.js**: Server framework
* **MongoDB & Mongoose**: Database and ODM
* **bcrypt**: Password hashing
* **CORS**: Cross-origin requests
* **dotenv**: Environment variable management

## Folder Structure

```
server/
 ├─ controllers/      # Route controllers for attendance and users
 ├─ models/           # Mongoose models for Users and Attendance
 ├─ routes/           # API routes
 ├─ middleware/       # Custom middleware (e.g., auth)
 ├─ .env              # Environment variables
 ├─ server.js         # Entry point of the application
```

## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/vjbravo123/College_attendance_manager_be.git
cd College_attendance_manager_be
```

2. **Install dependencies:**

```bash
npm install
```

3. **Setup Environment Variables:**

Create a `.env` file in the root directory and add:

```
MONGO_URI=<Your MongoDB connection string>
PORT=8080
CLIENT=<Frontend URL>
```

4. **Start the server:**

```bash
npm start
```

5. **Access API:**

The backend will be running at `http://localhost:8080` by default.

## API Endpoints

* **POST /signup**: Register a new user
* **POST /login**: Login user
* **POST /attendance**: Add attendance (Teacher only)
* **GET /attendance**: Retrieve attendance data

*More endpoints are available as per the project routes.*

## Deployment

* The backend is deployed on **Render**: [https://college-attendance-manager-be.onrender.com](https://college-attendance-manager-be.onrender.com)

## Contribution

* Fork the repository
* Create your feature branch (`git checkout -b feature/YourFeature`)
* Commit your changes (`git commit -m 'Add some feature'`)
* Push to the branch (`git push origin feature/YourFeature`)
* Open a Pull Request

## License

This project is licensed under the MIT License.

---

**Author:** Vivek Joshii

**Live Project:** [https://college-attendance-manager-be.onrender.com](https://college-attendance-manager-be.onrender.com)

**GitHub Repository:** [https://github.com/vjbravo123/College_attendance_manager_be.git](https://github.com/vjbravo123/College_attendance_manager_be.git)
