# CampusConnect – Event Registration & Management System

> **Full Stack Development II – Academic Project No. 28**  
> **Chandigarh University (BE-CSE/IT 3rd Year)**  
> **Author:** Megha Chanchal  
> **Tech Stack:** MongoDB Atlas, Express.js, React.js (Vite), Node.js, Mongoose

---

## 📌 Project Overview
**CampusConnect** is a full-stack MERN application developed for university students and administrators to streamline campus event discovery, registration, and attendee management.

Instead of traditional paper-based or basic Google Forms, CampusConnect provides atomic seat management, duplicate registration prevention, and dynamic category filtering.

---

## 🚀 Key Features

### For Students:
- **Event Discovery:** Browse campus hackathons, cultural festivals, seminars, and sports championships.
- **Search & Filter:** Instant search by title or club name, with category filtering (Technical, Cultural, Workshop, Sports).
- **Live Seat Capacity:** Real-time visual progress bar showing remaining seats vs total capacity.
- **One-Click Registration:** Easy form-based registration with unique Registration ID generation.
- **Duplicate Prevention:** Database-level compound unique index prevents multiple registrations by the same Roll No.

### For Administrators:
- **Event Creation:** Publish new events with title, venue, date/time, club organizer, and maximum seating limit directly to MongoDB Atlas.
- **Role-Based Experience:** Dynamic navigation and control states for administrators and students.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 18 (Vite), Vanilla CSS3 Design System, React Router DOM v6, Axios |
| **Backend** | Node.js, Express.js, RESTful JSON APIs, CORS |
| **Database** | MongoDB Atlas (Cloud Cluster), Mongoose ODM |
| **Tools** | VS Code, Git & GitHub, Postman |

---

## 📁 System Architecture & Directory Structure

```text
CampusConnect/
├── backend/
│   ├── config/              # MongoDB Atlas connection (db.js)
│   ├── models/              # Mongoose schemas (Event.js, Registration.js)
│   ├── routes/              # REST endpoints (eventRoutes.js, registrationRoutes.js)
│   ├── .env.example         # Environment template
│   ├── server.js            # Express server entry point
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/      # Reusable UI (Navbar, Footer, EventCard)
    │   ├── context/         # AuthContext for role-based navigation
    │   ├── layouts/         # PublicLayout and DashboardLayout
    │   ├── pages/           # Routed views (Home, Events, Details, AddEvent)
    │   ├── App.jsx          # React Router v6 configuration
    │   ├── index.css        # University-grade custom styling
    │   └── main.jsx
    └── vite.config.js       # Vite dev server with backend API proxy
```

---

## 💻 Installation & Setup Guide

### 1. Clone the repository
```bash
git clone <your-repository-url>
cd CampusConnect
```

### 2. Backend Setup
```bash
cd backend
npm install
# Configure your MONGO_URI in .env
npm run dev
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

The application runs on:
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5000`