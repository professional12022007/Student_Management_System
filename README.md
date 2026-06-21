# 🎓 Student Management System

A simple Student Management System built using **Node.js, Express.js, MongoDB, Mongoose, and EJS**. This application allows users to manage student records with complete CRUD (Create, Read, Update, Delete) functionality and search students by name.

---

## 🚀 Features

* ➕ Add New Student
* 📋 View All Students
* ✏️ Edit Student Information
* ❌ Delete Student Records
* 🔍 Search Students by Name
* 🎨 Responsive User Interface with Internal CSS
* 🗄️ MongoDB Database Integration
* ⚡ Server-side Rendering using EJS

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* EJS Templates

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

---

## 📂 Project Structure

```bash
Student Management System/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── studentController.js
│
├── middleware/
│   ├── authHandler.js
│   └── logger.js
│
├── models/
│   └── student.js
│
├── routes/
│   └── studentRoutes.js
│
├── views/
│   ├── home.ejs
│   ├── form.ejs
│   ├── student.ejs
│   ├── edit.ejs
│   └── search.ejs
│
├── error/
│   └── error.html
│
├── app.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/student-management-system.git
```

### Navigate to Project Directory

```bash
cd student-management-system
```

### Install Dependencies

```bash
npm install
```

### Start MongoDB

Make sure MongoDB is running on your system.

```bash
mongod
```

### Run the Application

```bash
npm start
```

or

```bash
nodemon app.js
```

---

## 🌐 Routes

| Method | Route           | Description       |
| ------ | --------------- | ----------------- |
| GET    | /               | Home Page         |
| GET    | /getdata        | View All Students |
| GET    | /insertdata     | Add Student Form  |
| POST   | /createdata     | Create Student    |
| GET    | /edit/:userid   | Edit Student Form |
| POST   | /update/:userid | Update Student    |
| GET    | /delete/:id     | Delete Student    |
| GET    | /search         | Search Student    |

---

## 📊 Student Schema

```javascript
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String,
    email: String,
    city: String
});
```

---

## 🎯 Learning Outcomes

This project demonstrates:

* MVC Architecture
* Express Routing
* CRUD Operations
* MongoDB Integration
* Mongoose Models
* Form Handling
* EJS Templating
* Error Handling
* Search Functionality

---

## 📸 Screens Included

* Home Dashboard
* Add Student Page
* Student List Page
* Edit Student Page
* Search Student Page

---

## 👨‍💻 Author

**Divyansh Gupta**

B.Tech CSE (AI & ML)

Passionate about Web Development, Data Structures & Algorithms, and Building Real-World Applications.

---

## ⭐ Future Improvements

* User Authentication
* Pagination
* Profile Pictures
* Export Data to Excel/PDF
* REST API Integration
* Admin Dashboard
* Dark Mode

---

## 📜 License

This project is created for educational and learning purposes.
