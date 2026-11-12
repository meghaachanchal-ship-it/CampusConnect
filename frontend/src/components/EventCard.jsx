import React from 'react';
import { Link } from 'react-router-dom';

function EventCard({ event }) {
  const {
    _id,
    title,
    description,
    category,
    date,
    venue,
    organizer,
    capacity,
    registeredCount = 0,
    image
  } = event;

  const seatsLeft = Math.max(0, capacity - registeredCount);
  const percentageBooked = Math.min(100, Math.round((registeredCount / capacity) * 100));
  const isFull = seatsLeft === 0;

  const formattedDate = new Date(date).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="card card-hover" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: 0, overflow: 'hidden' }}>
      <div style={{ position: 'relative', width: '100%', height: '175px', backgroundColor: '#e2e8f0', overflow: 'hidden' }}>
        <img
          src={image || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60'}
          alt={title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60';
          }}
        />
        <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
          <span className="badge badge-category" style={{ backgroundColor: 'rgba(255,255,255,0.92)', fontWeight: 700 }}>
            {category}
          </span>
        </div>
        <div style={{ position: 'absolute', top: '12px', right: '12px' }}>
          <span className={`badge ${isFull ? 'badge-full' : 'badge-upcoming'}`}>
            {isFull ? 'Full' : 'Open'}
          </span>
        </div>
      </div>

      <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ fontSize: '1.12rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.4rem', lineHeight: 1.35 }}>
          {title}
        </h3>
        
        <p style={{ fontSize: '0.86rem', color: '#64748b', marginBottom: '1rem', flex: 1, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {description}
        </p>

        <div style={{ fontSize: '0.82rem', color: '#475569', display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '1.15rem' }}>
          <div>📅 <strong>Date:</strong> {formattedDate}</div>
          <div>📍 <strong>Venue:</strong> {venue}</div>
          <div>🏛️ <strong>Organizer:</strong> {organizer}</div>
        </div>

        {/* Capacity Bar */}
        <div style={{ marginBottom: '1.15rem', background: '#f8fafc', padding: '0.75rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.35rem' }}>
            <span style={{ color: '#475569' }}>Seats: {registeredCount} / {capacity}</span>
            <span style={{ color: isFull ? '#dc2626' : '#059669' }}>
              {isFull ? 'Housefull' : `${seatsLeft} seats left`}
            </span>
          </div>
          <div style={{ width: '100%', height: '6px', backgroundColor: '#e2e8f0', borderRadius: '999px', overflow: 'hidden' }}>
            <div
              style={{
                width: `${percentageBooked}%`,
                height: '100%',
                backgroundColor: isFull ? '#dc2626' : '#059669',
                transition: 'width 0.3s ease'
              }}
            />
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <Link to={`/events/${_id}`} className="btn btn-secondary btn-sm" style={{ flex: 1 }}>
            View Details
          </Link>
          <Link
            to={`/events/${_id}`}
            className="btn btn-primary btn-sm"
            style={{ flex: 1, opacity: isFull ? 0.6 : 1 }}
          >
            {isFull ? 'Housefull' : 'Register Now'}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventCard;