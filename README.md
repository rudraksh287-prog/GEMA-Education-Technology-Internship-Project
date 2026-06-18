# 📋 GEMA Education Technology Internship Task

## AI & Robotics Summer Workshop Landing Page (Full-Stack MERN Application)

A fully responsive and production-ready full-stack web application developed as part of the internship assignment for **GEMA Education Technology Private Limited**. The project promotes an AI & Robotics Summer Workshop through an engaging landing page while providing a complete registration system powered by a cloud-hosted backend and MongoDB database.

---

## 👨‍💻 Candidate Information

**Candidate Name:** Rudraksh Gupta

**Organization:** GEMA Education Technology Private Limited

**Task:** Responsive Full-Stack (MERN/Vite Stack) Workshop Landing Page

---

## 🚀 Live Deployment

### Frontend (Vercel)

https://gema-education-technology-internshi.vercel.app/

### Backend API (Render)

https://gema-education-technology-internship.onrender.com/

---

## 📌 Project Overview

This application enables users to:

* Explore details about the AI & Robotics Summer Workshop
* Register through an interactive form
* Validate user inputs in real time
* Store registration data securely in MongoDB Atlas
* Communicate with a cloud-hosted backend API
* Experience a fully responsive design across devices

The project follows a decoupled client-server architecture, allowing independent deployment, scalability, and maintenance of frontend and backend services.

---

## 🛠️ Technology Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* JavaScript (ES6+)

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose ODM

### Security & Configuration

* CORS
* Dotenv

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## 🏗️ Project Architecture

```text
ai-robotics-workshop-landing-page/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── RegistrationForm.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
└── .gitignore
```

---

## ✨ Features

### Responsive User Interface

* Mobile-first responsive design
* Modern and interactive landing page
* Optimized layout for desktop, tablet, and mobile devices

### Registration System

* Workshop registration form
* Real-time form validation
* User-friendly error handling and feedback

### Client-Side Validation

* Full name validation
* Email validation using regular expressions
* Phone number validation with standardized formatting

### Server-Side Validation

* Independent request validation
* Payload sanitization
* Data integrity checks before database insertion

### MongoDB Integration

* Cloud-hosted MongoDB Atlas database
* Persistent storage of registration records
* Schema-based validation using Mongoose

### Dynamic Environment Configuration

* Environment-based API routing
* Seamless switching between local and production environments using:

```javascript
import.meta.env.VITE_API_URL
```

### Security Measures

* CORS configuration for controlled API access
* Environment variable protection
* Secure database credential management
* Prevention of sensitive information exposure through version control

---

## 🔒 Validation Strategy

### Client-Side Validation

The frontend validates:

* Full Name
* Email Address
* Phone Number

Example Email Validation Pattern:

```javascript
/\S+@\S+\.\S+/
```

### Server-Side Validation

The backend performs:

* Request sanitization
* Input validation
* Data verification
* Safe database insertion

This dual-layer validation approach improves application reliability and security.

---


## 🌐 Deployment

### Frontend Deployment

* Hosted on Vercel
* Automatic build and deployment pipeline

### Backend Deployment

* Hosted on Render
* Connected to MongoDB Atlas

### Database

* MongoDB Atlas Cloud Cluster

---

## 🎯 Learning Outcomes

This project demonstrates:

* Full-Stack MERN Development
* REST API Development
* MongoDB Atlas Integration
* Environment Variable Management
* Responsive UI Design
* Form Validation Techniques
* Cloud Deployment Workflow
* Secure Application Configuration

---

## 📄 Conclusion

The AI & Robotics Summer Workshop Landing Page is a complete full-stack solution that combines modern frontend development, backend API architecture, database integration, validation mechanisms, and cloud deployment practices. The application is designed to be scalable, secure, responsive, and production-ready while meeting all requirements of the internship assignment.
