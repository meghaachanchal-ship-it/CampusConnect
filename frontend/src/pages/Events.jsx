import React from 'react';
import { Link } from 'react-router-dom';

function Events() {
  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ color: '#172554', fontWeight: 800 }}>Explore Events</h1>
          <p style={{ color: '#64748b' }}>Browse through technical, cultural, and sports events happening around campus.</p>
        </div>
      </div>
      <div className="card" style={{ textAlign: 'center', padding: '3rem' }}>
        <p style={{ color: '#64748b' }}>Events listing component will be connected here in Phase 3.</p>
        <Link to="/" className="btn btn-secondary" style={{ marginTop: '1rem' }}>Back to Home</Link>
      </div>
    </div>
  );
}

export default Events;