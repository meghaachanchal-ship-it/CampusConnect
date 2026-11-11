import React from 'react';
import { useAuth } from '../context/AuthContext';

function StudentProfile() {
  const { user } = useAuth();
  return (
    <div>
      <h1 style={{ color: '#172554', fontWeight: 800, marginBottom: '1.5rem' }}>Student Profile</h1>
      <div className="card" style={{ maxWidth: '600px' }}>
        <p><strong>Name:</strong> {user?.name || 'Student'}</p>
        <p style={{ marginTop: '0.5rem' }}><strong>Email:</strong> {user?.email || 'student@campus.edu'}</p>
        <p style={{ marginTop: '0.5rem' }}><strong>Role:</strong> {user?.role || 'student'}</p>
      </div>
    </div>
  );
}

export default StudentProfile;