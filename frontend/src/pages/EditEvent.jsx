import React from 'react';
import { useParams, Link } from 'react-router-dom';

function EditEvent() {
  const { id } = useParams();
  return (
    <div>
      <h1 style={{ color: '#172554', fontWeight: 800, marginBottom: '1rem' }}>Edit Event #{id}</h1>
      <div className="card">
        <p style={{ color: '#64748b' }}>Edit form will be added in Phase 7.</p>
        <Link to="/admin/events" className="btn btn-secondary" style={{ marginTop: '1rem' }}>Cancel</Link>
      </div>
    </div>
  );
}

export default EditEvent;