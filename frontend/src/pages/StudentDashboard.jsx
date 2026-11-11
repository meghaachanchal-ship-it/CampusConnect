import React from 'react';
import { useAuth } from '../context/AuthContext';

function StudentDashboard() {
  const { user } = useAuth();
  return (
    <div>
      <h1 style={{ color: '#172554', fontWeight: 800, marginBottom: '0.5rem' }}>
        Welcome back, {user?.name || 'Student'}!
      </h1>
      <p style={{ color: '#64748b', marginBottom: '2rem' }}>
        Here is what is happening with your registered campus events.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
        <div className="card">
          <h4 style={{ color: '#64748b', fontSize: '0.85rem' }}>TOTAL REGISTERED</h4>
          <p style={{ fontSize: '2rem', fontWeight: 800, color: '#172554', margin: '0.5rem 0' }}>3</p>
          <span className="badge badge-student">Active Events</span>
        </div>
        <div className="card">
          <h4 style={{ color: '#64748b', fontSize: '0.85rem' }}>UPCOMING SESSIONS</h4>
          <p style={{ fontSize: '2rem', fontWeight: 800, color: '#2563eb', margin: '0.5rem 0' }}>2</p>
          <span className="badge badge-upcoming">This Week</span>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;