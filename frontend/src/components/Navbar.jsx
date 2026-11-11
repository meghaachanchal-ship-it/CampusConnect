import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { user, switchRole, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-brand">
          Campus<span>Connect</span>
        </Link>

        <nav>
          <ul className="navbar-links">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/events" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Browse Events
              </NavLink>
            </li>

            {user?.role === 'student' && (
              <>
                <li>
                  <NavLink to="/student/dashboard" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/student/registrations" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                    My Registrations
                  </NavLink>
                </li>
              </>
            )}

            {user?.role === 'admin' && (
              <>
                <li>
                  <NavLink to="/admin/dashboard" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                    Admin Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/admin/events" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                    Manage Events
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>

        <div className="nav-auth-actions">
          {/* Viva Demo Role Switcher */}
          <div className="role-switcher" title="Role change karke Student ya Admin navigation test karein">
            <span>Role:</span>
            <select
              value={user ? user.role : 'guest'}
              onChange={(e) => switchRole(e.target.value)}
            >
              <option value="guest">Guest (Public)</option>
              <option value="student">Student</option>
              <option value="admin">Administrator</option>
            </select>
          </div>

          {!user ? (
            <>
              <Link to="/login" className="btn btn-secondary btn-sm" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
                Login
              </Link>
              <Link to="/register" className="btn btn-primary btn-sm">
                Register
              </Link>
            </>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span className={`badge ${user.role === 'admin' ? 'badge-admin' : 'badge-student'}`}>
                {user.role}
              </span>
              <button onClick={handleLogout} className="btn btn-secondary btn-sm" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;