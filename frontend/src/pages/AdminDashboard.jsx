import React from 'react';

function AdminDashboard() {
  return (
    <div>
      <h1 style={{ color: '#172554', fontWeight: 800, marginBottom: '0.5rem' }}>Administrator Console</h1>
      <p style={{ color: '#64748b', marginBottom: '2rem' }}>Overview of campus events, student footfall, and registration metrics.</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
        <div className="card">
          <h4 style={{ color: '#64748b', fontSize: '0.85rem' }}>TOTAL EVENTS</h4>
          <p style={{ fontSize: '2rem', fontWeight: 800, color: '#172554', margin: '0.5rem 0' }}>12</p>
          <span className="badge badge-student">Published</span>
        </div>
        <div className="card">
          <h4 style={{ color: '#64748b', fontSize: '0.85rem' }}>TOTAL REGISTRATIONS</h4>
          <p style={{ fontSize: '2rem', fontWeight: 800, color: '#2563eb', margin: '0.5rem 0' }}>480</p>
          <span className="badge badge-upcoming">Across Campus</span>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;