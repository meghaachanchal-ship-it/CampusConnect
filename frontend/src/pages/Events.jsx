import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import EventCard from '../components/EventCard';

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Technical', 'Cultural', 'Workshop', 'Sports', 'Seminar'];

  // Fetch real events from MongoDB Atlas API
  const loadEvents = async () => {
    try {
      setLoading(true);
      const res = await axios.get('/api/events');
      if (res.data.success) {
        setEvents(res.data.data);
      }
    } catch (err) {
      console.error('Error fetching events:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEvents();
  }, []);

  // Filter events
  const filteredEvents = useMemo(() => {
    return events.filter((evt) => {
      const matchSearch =
        evt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        evt.venue.toLowerCase().includes(searchTerm.toLowerCase()) ||
        evt.organizer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchCat = selectedCategory === 'All' || evt.category === selectedCategory;
      return matchSearch && matchCat;
    });
  }, [events, searchTerm, selectedCategory]);

  return (
    <div className="container" style={{ padding: '3rem 1.5rem 5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ color: '#064e3b', fontWeight: 800, fontSize: '2.2rem' }}>Campus Events</h1>
          <p style={{ color: '#64748b' }}>Live events fetched directly from MongoDB Atlas database.</p>
        </div>
        <Link to="/admin/events/new" className="btn btn-primary">
          + Create New Event
        </Link>
      </div>

      {/* Search & Filter Bar */}
      <div className="card" style={{ padding: '1.25rem', marginBottom: '2rem' }}>
        <input
          type="text"
          placeholder="🔍 Search event by title, venue or club..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '0.95rem', marginBottom: '1rem' }}
        />
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className="btn btn-sm"
              style={{
                backgroundColor: selectedCategory === cat ? '#064e3b' : '#f1f5f9',
                color: selectedCategory === cat ? '#fff' : '#475569',
                border: '1px solid #e2e8f0'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Events Listing Grid */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '4rem' }}>
          <h3>Loading events from database...</h3>
        </div>
      ) : filteredEvents.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
          {filteredEvents.map((evt) => (
            <EventCard key={evt._id} event={evt} />
          ))}
        </div>
      ) : (
        <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
          <h3 style={{ color: '#064e3b', marginBottom: '0.5rem' }}>No Events in Database Yet!</h3>
          <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>
            Be the first to create a campus event in MongoDB Atlas.
          </p>
          <Link to="/admin/events/new" className="btn btn-primary">
            + Create Your First Event
          </Link>
        </div>
      )}
    </div>
  );
}

export default Events;