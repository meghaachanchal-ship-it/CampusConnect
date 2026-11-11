import React from 'react';
import { Link } from 'react-router-dom';

function ManageEvents() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div>
          <h1 style={{ color: '#172554', fontWeight: 800 }}>Manage Campus Events</h1>
          <p style={{ color: '#64748b' }}>Create, update, monitor capacity and remove events.</p>
        </div>
        <Link to="/admin/events/new" className="btn btn-primary">+ Create New Event</Link>
      </div>
      <div className="card">
        <p style={{ color: '#64748b' }}>Event management table will load here in Phase 7.</p>
      </div>
    </div>
  );
}

export default ManageEvents;