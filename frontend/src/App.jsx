import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';

// Layouts
import PublicLayout from './layouts/PublicLayout';
import DashboardLayout from './layouts/DashboardLayout';

// Public Pages
import Home from './pages/Home';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import Login from './pages/Login';
import Register from './pages/Register';

// Student Pages
import StudentDashboard from './pages/StudentDashboard';
import MyRegistrations from './pages/MyRegistrations';
import StudentProfile from './pages/StudentProfile';

// Admin Pages
import AdminDashboard from './pages/AdminDashboard';
import ManageEvents from './pages/ManageEvents';
import AddEvent from './pages/AddEvent';
import EditEvent from './pages/EditEvent';
import ManageRegistrations from './pages/ManageRegistrations';

// Fallback
import NotFound from './pages/NotFound';

// Protected Route Guards
function StudentRoute({ children }) {
  const { user } = useAuth();
  if (!user || user.role !== 'student') {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function AdminRoute({ children }) {
  const { user } = useAuth();
  if (!user || user.role !== 'admin') {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Pages with Standard Header & Footer */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          {/* Student Protected Portal with Sidebar */}
          <Route path="/student" element={
            <StudentRoute>
              <DashboardLayout />
            </StudentRoute>
          }>
            <Route path="dashboard" element={<StudentDashboard />} />
            <Route path="registrations" element={<MyRegistrations />} />
            <Route path="profile" element={<StudentProfile />} />
          </Route>

          {/* Admin Protected Console with Sidebar */}
          <Route path="/admin" element={
            <AdminRoute>
              <DashboardLayout />
            </AdminRoute>
          }>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="events" element={<ManageEvents />} />
            <Route path="events/new" element={<AddEvent />} />
            <Route path="events/edit/:id" element={<EditEvent />} />
            <Route path="registrations" element={<ManageRegistrations />} />
          </Route>

          {/* 404 Catch-All */}
          <Route path="*" element={<PublicLayout><NotFound /></PublicLayout>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;