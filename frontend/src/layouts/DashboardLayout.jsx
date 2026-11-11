import React from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';

function DashboardLayout() {
  const { user } = useAuth();
  const isAdmin = user?.role === 'admin';

  return (
    <div className="app-wrapper">
      <Navbar />
      <div className="dashboard-container">
        {/* Sidebar */}
        <aside className="dashboard-sidebar">
          <div className="sidebar-title">{isAdmin ? 'Admin Console' : 'Student Portal'}</div>
          <ul className="sidebar-nav">
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/admin/dashboard" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
                    Dashboard Overview
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/admin/events" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
                    Manage Events
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/admin/events/new" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
                    + Create New Event
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/admin/registrations" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
                    Registrations Roster
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/student/dashboard" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
                    My Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/student/registrations" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
                    My Registered Events
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/student/profile" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>
                    My Profile
                  </NavLink>
                </li>
                <li>
                  <Link to="/events" className="sidebar-link">
                    Explore New Events ➔
                  </Link>
                </li>
              </>
            )}
          </ul>
        </aside>

        {/* Dashboard Content Area */}
        <main className="dashboard-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;