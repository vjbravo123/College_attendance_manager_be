# 🎓 College Attendance Manager - Backend

[🚀 Live Project Link](https://college-attendance-manager-be.onrender.com)
[💻 GitHub Repository](https://github.com/vjbravo123/College_attendance_manager_be.git)

---

## 🌟 Overview

Welcome to the **College Attendance Manager Backend**! This backend powers the attendance management system for students and teachers, providing a seamless and secure way to track, manage, and report attendance. Built with **Express.js** and **MongoDB**, it ensures fast and reliable performance.

<img src="https://imgs.search.brave.com/qN2qxl2fjKzCUOTIjOSsxbKwoDk3FoenCXx4b1scNrk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE1LzAxLzg4Lzkx/LzM2MF9GXzE1MDE4/ODkxNDNfenFKSlJB/ZXpHQU5HMDM1ZlQ3/WWlTUTluZW9rWU8y/aEMuanBn" alt="Backend GIF" width="400" />

## 🎯 Features

* 🔐 **User Authentication**: Secure signup and login with hashed passwords.
* 📝 **Attendance Management**: Teachers can mark and retrieve attendance.
* 📊 **Reports**: Generate stats for classes and individual students.
* 🌐 **CORS Enabled**: Communicate seamlessly with the frontend.
* 🛠️ **Environment Configurable**: Easy setup with `.env` variables.

## 🛠️ Tech Stack & Libraries

* **Node.js & Express.js**: Robust server framework
* **MongoDB & Mongoose**: Flexible NoSQL database
* **bcrypt**: Password hashing 🔑
* **CORS**: Cross-origin requests 🌍
* **dotenv**: Environment variable management ⚡

## 📂 Folder Structure

```
server/
 ├─ controllers/      # Route controllers for attendance and users
 ├─ models/           # Mongoose models for Users and Attendance
 ├─ routes/           # API routes
 ├─ middleware/       # Custom middleware (e.g., auth)
 ├─ .env              # Environment variables
 ├─ server.js         # Entry point of the application
```

## 🚀 Installation

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

Create a `.env` file in the root directory:

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

Server runs at `http://localhost:8080`

## 🔗 API Endpoints

| Method | Endpoint    | Description                 |
| ------ | ----------- | --------------------------- |
| POST   | /signup     | Register a new user         |
| POST   | /login      | Login user                  |
| POST   | /attendance | Add attendance (Teacher)    |
| GET    | /attendance | Retrieve attendance records |

💡 *More endpoints are available as per project routes.*

## 🌐 Deployment

* Hosted on **Render**: [https://college-attendance-manager-be.onrender.com](https://college-attendance-manager-be.onrender.com) 🌟

## 🤝 Contribution

* Fork the repo 🍴
* Create a feature branch (`git checkout -b feature/YourFeature`)
* Commit your changes (`git commit -m 'Add new feature'`)
* Push to branch (`git push origin feature/YourFeature`)
* Open a Pull Request 🔃

## 📄 License

MIT License

---

**Author:** Vivek Joshii
**Live Project:** [https://college-attendance-manager-be.onrender.com](https://college-attendance-manager-be.onrender.com)
**GitHub Repository:** [https://github.com/vjbravo123/College_attendance_manager_be.git](https://github.com/vjbravo123/College_attendance_manager_be.git)
