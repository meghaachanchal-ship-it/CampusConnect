import React from 'react';
import { Link } from 'react-router-dom';

function AddEvent() {
  return (
    <div>
      <h1 style={{ color: '#172554', fontWeight: 800, marginBottom: '1rem' }}>Create New Campus Event</h1>
      <div className="card" style={{ maxWidth: '700px' }}>
        <p style={{ color: '#64748b' }}>Event creation form with capacity and deadlines will be added in Phase 7.</p>
        <Link to="/admin/events" className="btn btn-secondary" style={{ marginTop: '1rem' }}>Back to Events</Link>
      </div>
    </div>
  );
}

export default AddEvent;
