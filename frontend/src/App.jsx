import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [backendStatus, setBackendStatus] = useState({
    checked: false,
    online: false,
    message: 'Testing connection to Express API...',
    timestamp: null,
  });

  const checkBackendHealth = async () => {
    try {
      setBackendStatus({
        checked: false,
        online: false,
        message: 'Pinging http://localhost:5000/api/health...',
        timestamp: null,
      });

      const response = await axios.get('/api/health');
      if (response.data && response.data.status === 'healthy') {
        setBackendStatus({
          checked: true,
          online: true,
          message: 'Express backend is online & responding cleanly!',
          timestamp: response.data.timestamp,
        });
      }
    } catch (error) {
      setBackendStatus({
        checked: true,
        online: false,
        message: 'Could not connect to backend server. Make sure backend is running on port 5000.',
        timestamp: null,
      });
    }
  };

  useEffect(() => {
    checkBackendHealth();
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ background: '#172554', color: '#ffffff', padding: '1.25rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ margin: 0, fontWeight: 800 }}>Campus<span style={{ color: '#60a5fa' }}>Connect</span></h2>
            <small style={{ color: '#94a3b8' }}>Event Registration & Management System</small>
          </div>
          <span className="badge badge-upcoming">Phase 1: Setup</span>
        </div>
      </header>

      <main className="container" style={{ flex: 1, padding: '3rem 1.5rem' }}>
        <div className="card" style={{ textAlign: 'center', padding: '3rem 2rem', marginBottom: '2rem' }}>
          <h1 style={{ color: '#172554', marginBottom: '1rem' }}>CampusConnect Project Initialized</h1>
          <p style={{ color: '#475569', maxWidth: '650px', margin: '0 auto 1.5rem' }}>
            Full Stack Development II – Academic Project No. 28. Client and Server architecture is running locally on your machine.
          </p>
          <button className="btn btn-primary" onClick={checkBackendHealth}>
            Re-test Backend API Connection
          </button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          <div className="card">
            <h4>Frontend Status</h4>
            <p style={{ color: '#475569', fontSize: '0.9rem', margin: '0.5rem 0' }}>React 18 + Vite running on port 5173</p>
            <span className="badge badge-connected">Active</span>
          </div>

          <div className="card">
            <h4>Backend API Status</h4>
            <p style={{ color: '#475569', fontSize: '0.9rem', margin: '0.5rem 0' }}>{backendStatus.message}</p>
            <span className={`badge ${backendStatus.online ? 'badge-connected' : 'badge-error'}`}>
              {backendStatus.online ? 'Connected' : 'Offline / Waiting'}
            </span>
          </div>
        </div>
      </main>

      <footer style={{ background: '#ffffff', borderTop: '1px solid #e2e8f0', padding: '1.5rem 0', textAlign: 'center', color: '#64748b' }}>
        <p>CampusConnect &copy; 2026 | CSE Full Stack Development II</p>
      </footer>
    </div>
  );
}

export default App;