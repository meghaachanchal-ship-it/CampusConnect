import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container" style={{ textAlign: 'center', padding: '6rem 1.5rem' }}>
      <h1 style={{ fontSize: '4rem', fontWeight: 800, color: '#172554' }}>404</h1>
      <h2 style={{ marginBottom: '1rem' }}>Page Not Found</h2>
      <p style={{ color: '#64748b', marginBottom: '2rem' }}>The page you are looking for does not exist on CampusConnect.</p>
      <Link to="/" className="btn btn-primary">Return to Homepage</Link>
    </div>
  );
}

export default NotFound;