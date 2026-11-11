import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <h3 style={{ color: '#172554', fontWeight: 800, marginBottom: '0.5rem' }}>
            Campus<span style={{ color: '#2563eb' }}>Connect</span>
          </h3>
          <p style={{ color: '#64748b', fontSize: '0.9rem', maxWidth: '380px' }}>
            Centralized Campus Event Registration and Management System. Designed for university clubs, symposiums, and cultural fests.
          </p>
        </div>
        <div>
          <h4 style={{ color: '#172554', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li><Link to="/" style={{ color: '#64748b' }}>Home</Link></li>
            <li><Link to="/events" style={{ color: '#64748b' }}>Browse Events</Link></li>
            <li><Link to="/login" style={{ color: '#64748b' }}>Student Login</Link></li>
          </ul>
        </div>
        <div>
          <h4 style={{ color: '#172554', marginBottom: '0.75rem', fontSize: '0.95rem' }}>Academic Details</h4>
          <p style={{ color: '#64748b', fontSize: '0.85rem' }}>
            CSE Full Stack Development II<br />
            Project No. 28 – MERN Event Registration System
          </p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>&copy; 2026 CampusConnect | Built with React.js & Express.js</p>
      </div>
    </footer>
  );
}

export default Footer;