import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #172554 0%, #1e3a8a 100%)', color: '#fff', padding: '5rem 0 6rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge badge-upcoming" style={{ marginBottom: '1.25rem', backgroundColor: 'rgba(255,255,255,0.15)', color: '#fff' }}>
            Campus Event Registration & Management
          </span>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            Discover, Register & Lead <br />
            <span style={{ color: '#60a5fa' }}>University Events with Ease</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cbd5e1', maxWidth: '650px', margin: '0 auto 2.5rem' }}>
            From technical hackathons and symposiums to cultural fests. CampusConnect keeps students and faculty organizers perfectly in sync.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/events" className="btn btn-primary" style={{ padding: '0.8rem 1.75rem', fontSize: '1rem' }}>
              Explore Campus Events
            </Link>
            <Link to="/register" className="btn btn-secondary" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)', padding: '0.8rem 1.75rem', fontSize: '1rem' }}>
              Student Registration
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="container" style={{ padding: '4rem 1.5rem' }}>
        <h2 style={{ textAlign: 'center', color: '#172554', marginBottom: '2.5rem', fontWeight: 800 }}>
          Designed for the Modern Campus
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div className="card">
            <h3 style={{ color: '#2563eb', marginBottom: '0.5rem' }}>Seamless Registration</h3>
            <p style={{ color: '#64748b' }}>One-click event signups with automated capacity tracking and instant digital passes.</p>
          </div>
          <div className="card">
            <h3 style={{ color: '#2563eb', marginBottom: '0.5rem' }}>Real-time Capacity</h3>
            <p style={{ color: '#64748b' }}>Atomic database operations prevent overbooking so you always know available seats.</p>
          </div>
          <div className="card">
            <h3 style={{ color: '#2563eb', marginBottom: '0.5rem' }}>Organizer Dashboard</h3>
            <p style={{ color: '#64748b' }}>Administrators can manage event schedules, monitor attendees, and export rosters.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;