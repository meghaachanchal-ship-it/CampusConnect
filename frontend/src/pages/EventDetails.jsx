import React from 'react';
import { useParams, Link } from 'react-router-dom';

function EventDetails() {
  const { id } = useParams();
  return (
    <div className="container" style={{ padding: '3rem 1.5rem' }}>
      <div className="card">
        <h2 style={{ color: '#172554' }}>Event Details View</h2>
        <p style={{ color: '#64748b', margin: '0.5rem 0 1.5rem' }}>Viewing Event ID: <strong>{id}</strong></p>
        <Link to="/events" className="btn btn-secondary">← Back to Events</Link>
      </div>
    </div>
  );
}

export default EventDetails;