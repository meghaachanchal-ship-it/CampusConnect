import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Registration Form State
  const [studentData, setStudentData] = useState({
    studentName: '',
    rollNo: '',
    email: '',
    department: 'CSE'
  });
  const [submitting, setSubmitting] = useState(false);
  const [confirmation, setConfirmation] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  // Fetch Event from MongoDB
  const fetchEventDetails = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`/api/events/${id}`);
      if (res.data.success) {
        setEvent(res.data.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEventDetails();
  }, [id]);

  const handleInputChange = (e) => {
    setStudentData({ ...studentData, [e.target.name]: e.target.value });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await axios.post('/api/registrations', {
        eventId: id,
        ...studentData
      });

      if (response.data.success) {
        setConfirmation({
          message: response.data.message,
          registrationId: response.data.registrationId,
          studentName: studentData.studentName,
          rollNo: studentData.rollNo
        });
        // Re-fetch event to update capacity count live
        fetchEventDetails();
      }
    } catch (err) {
      setErrorMessage(err.response?.data?.message || 'Registration failed.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="container" style={{ padding: '5rem 1.5rem', textAlign: 'center' }}>
        <h3>Loading event details from MongoDB...</h3>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="container" style={{ padding: '5rem 1.5rem', textAlign: 'center' }}>
        <h2>Event Not Found</h2>
        <Link to="/events" className="btn btn-primary" style={{ marginTop: '1rem' }}>Back to Events</Link>
      </div>
    );
  }

  const seatsLeft = Math.max(0, event.capacity - event.registeredCount);
  const isFull = seatsLeft === 0;

  return (
    <div className="container" style={{ padding: '3.5rem 1.5rem 6rem' }}>
      <Link to="/events" style={{ color: '#059669', fontWeight: 600, display: 'inline-block', marginBottom: '1.5rem' }}>
        ← Back to All Events
      </Link>

      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '2.5rem', alignItems: 'start' }}>
        {/* Left Column: Event Information */}
        <div className="card" style={{ padding: '2rem' }}>
          <span className="badge badge-student" style={{ marginBottom: '1rem' }}>
            {event.category}
          </span>
          <h1 style={{ color: '#064e3b', fontWeight: 800, fontSize: '2rem', marginBottom: '1rem', lineHeight: 1.25 }}>
            {event.title}
          </h1>

          <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
            <div>📅 <strong>Date:</strong> {new Date(event.date).toLocaleString('en-IN')}</div>
            <div>📍 <strong>Venue:</strong> {event.venue}</div>
            <div>🏛️ <strong>Organizer:</strong> {event.organizer}</div>
            <div>🎟️ <strong>Capacity:</strong> {event.registeredCount} / {event.capacity} seats filled ({seatsLeft} seats left)</div>
          </div>

          <h3 style={{ color: '#064e3b', marginBottom: '0.5rem', fontSize: '1.15rem' }}>About this Event</h3>
          <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '0.95rem', whiteSpace: 'pre-line' }}>
            {event.description}
          </p>
        </div>

        {/* Right Column: Student Registration Form OR Confirmation Card */}
        <div>
          {confirmation ? (
            <div className="card" style={{ padding: '2.5rem', backgroundColor: '#ecfdf5', borderColor: '#a7f3d0', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>🎉</div>
              <h2 style={{ color: '#065f46', fontWeight: 800, marginBottom: '0.5rem' }}>Registration Confirmed!</h2>
              <p style={{ color: '#047857', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                Your seat has been reserved in MongoDB Atlas.
              </p>

              <div style={{ background: '#ffffff', padding: '1.25rem', borderRadius: '8px', border: '1px solid #a7f3d0', textAlign: 'left', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
                <div><strong>Registration ID:</strong> <span style={{ color: '#059669', fontWeight: 700 }}>{confirmation.registrationId}</span></div>
                <div style={{ marginTop: '0.35rem' }}><strong>Student Name:</strong> {confirmation.studentName}</div>
                <div style={{ marginTop: '0.35rem' }}><strong>UID / Roll No:</strong> {confirmation.rollNo}</div>
              </div>

              <Link to="/events" className="btn btn-primary" style={{ width: '100%' }}>
                Browse More Events
              </Link>
            </div>
          ) : (
            <div className="card" style={{ padding: '2rem' }}>
              <h3 style={{ color: '#064e3b', fontWeight: 800, marginBottom: '0.35rem', fontSize: '1.3rem' }}>
                Register for this Event
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.88rem', marginBottom: '1.5rem' }}>
                Enter your student details to confirm your seat.
              </p>

              {errorMessage && (
                <div style={{ padding: '0.75rem', borderRadius: '6px', marginBottom: '1.25rem', backgroundColor: '#fef2f2', color: '#991b1b', border: '1px solid #fecaca', fontSize: '0.85rem', fontWeight: 600 }}>
                  ⚠️ {errorMessage}
                </div>
              )}

              {isFull ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem', background: '#fee2e2', borderRadius: '8px', color: '#991b1b' }}>
                  <h4>Seats Full!</h4>
                  <p style={{ fontSize: '0.85rem', marginTop: '0.25rem' }}>All {event.capacity} seats for this event are fully booked.</p>
                </div>
              ) : (
                <form onSubmit={handleRegisterSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.3rem' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="studentName"
                      required
                      placeholder="e.g. Megha Chanchal"
                      value={studentData.studentName}
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '0.65rem', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.3rem' }}>
                      Student UID / Roll No *
                    </label>
                    <input
                      type="text"
                      name="rollNo"
                      required
                      placeholder="e.g. 21BCSE102"
                      value={studentData.rollNo}
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '0.65rem', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.3rem' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. megha@campus.edu"
                      value={studentData.email}
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '0.65rem', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontWeight: 600, fontSize: '0.85rem', marginBottom: '0.3rem' }}>
                      Department
                    </label>
                    <select
                      name="department"
                      value={studentData.department}
                      onChange={handleInputChange}
                      style={{ width: '100%', padding: '0.65rem', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem' }}
                    >
                      <option value="CSE">BE - Computer Science (CSE)</option>
                      <option value="IT">BE - Information Tech (IT)</option>
                      <option value="ECE">BE - Electronics (ECE)</option>
                      <option value="ME">BE - Mechanical (ME)</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn btn-primary"
                    style={{ padding: '0.75rem', marginTop: '0.5rem', width: '100%' }}
                  >
                    {submitting ? 'Confirming Seat...' : 'Confirm My Registration ➔'}
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventDetails;