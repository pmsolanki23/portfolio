#  Portfolio - MERN Stack Developer

A modern, fully responsive **Portfolio Web Application** built using the MERN stack (MongoDB, Express, React, Node.js).
It showcases projects, skills, reviews, and includes a secure admin dashboard.

---

## 🌐 Live Demo

* 🔗 Frontend: https://portfolio-peach-ten-24.vercel.app
* 🔗 Backend API: https://portfolio-rhzr.onrender.com

---

## ✨ Features

### 👨‍💻 User Side

* Responsive modern UI (Glassmorphism design)
* View projects with live demo & GitHub links
* Submit contact form
* View approved reviews
* Smooth animations using Framer Motion

### 🔐 Admin Panel

* Secure admin login (JWT)
* Add / Edit / Delete projects
* Upload project images (Cloudinary)
* Manage reviews (Approve / Reject)
* Soft delete & restore system

---

## 🛠️ Tech Stack

### Frontend

* React.js (Vite)
* Tailwind CSS
* Framer Motion
* Axios

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication

### Other Tools

* Cloudinary (Image Upload)
* Render (Backend Hosting)
* Vercel (Frontend Hosting)

---

## 📁 Folder Structure

```
PORTFOLIO/
│
├── frontend/         # React App
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── services/
│
├── backend/          # Node/Express API
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   └── config/
│
└── README.md
```

---

## ⚙️ Environment Variables

### 🔹 Frontend (.env)

```
VITE_API_URL=https://portfolio-rhzr.onrender.com/api
```

### 🔹 Backend (.env)

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
FRONTEND_URL=https://portfolio-peach-ten-24.vercel.app
```

---

##  Installation & Setup

### 1️⃣ Clone Repository

```
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
npm run dev
```

---

### 3️⃣ Frontend Setup

```
cd frontend
npm install
npm run dev
```

---

## 📦 API Endpoints

### 🔹 Auth

* POST `/api/auth/login`

### 🔹 Projects

* GET `/api/projects`
* POST `/api/projects`
* PUT `/api/projects/:id`
* DELETE `/api/projects/:id`

### 🔹 Reviews

* GET `/api/reviews`
* GET `/api/reviews/approved`
* POST `/api/reviews`

---

## 🧠 Key Concepts Used

* REST API Architecture
* JWT Authentication
* File Upload Handling
* MVC Pattern
* Responsive UI Design
* Protected Routes

---

## 📸 Screenshots

(Add your screenshots here)

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Pruthvi Solanki**

* MERN Stack Developer
* GitHub: https://github.com/your-username
* LinkedIn: https://linkedin.com/in/your-profile

---

⭐ If you like this project, don't forget to give it a star!
