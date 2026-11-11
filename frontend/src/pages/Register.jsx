import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '480px' }}>
      <div className="card">
        <h2 style={{ color: '#172554', fontWeight: 800, textAlign: 'center', marginBottom: '0.5rem' }}>Create Account</h2>
        <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '1.5rem' }}>Register as a student to join campus events</p>
        <p style={{ textAlign: 'center', fontSize: '0.9rem', color: '#64748b' }}>
          Already registered? <Link to="/login" style={{ color: '#2563eb', fontWeight: 600 }}>Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;