import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="container" style={{ padding: '4rem 1.5rem', maxWidth: '480px' }}>
      <div className="card">
        <h2 style={{ color: '#172554', fontWeight: 800, textAlign: 'center', marginBottom: '0.5rem' }}>Welcome Back</h2>
        <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '1.5rem' }}>Login to access your CampusConnect account</p>
        <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem', fontSize: '0.85rem', color: '#475569' }}>
          💡 <em>Tip: You can use the Role Switcher in the top navigation bar to test Student or Admin views instantly!</em>
        </div>
        <p style={{ textAlign: 'center', fontSize: '0.9rem', color: '#64748b' }}>
          Don't have an account? <Link to="/register" style={{ color: '#2563eb', fontWeight: 600 }}>Register here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;