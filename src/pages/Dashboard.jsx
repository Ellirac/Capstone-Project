import React, { useEffect, useState } from 'react';
import { currentUser } from '../utils/auth';
import { resorts } from '../data/resorts';
import './Dashboard.css';

export default function Dashboard(){
  const user = currentUser();
  const [bookings, setBookings] = useState([]);

  useEffect(()=> {
    try {
      const all = JSON.parse(localStorage.getItem('rms_bookings') || '[]');
      setBookings(all.filter(b => b.userId === (user?.id || '')));
    } catch {
      setBookings([]);
    }
  }, [user]);

  if (!user) return (
    <div className="container section">
      <div className="card">Please sign in to view your dashboard.</div>
    </div>
  );

  return (
    <div className="container">
      <h1>Welcome, {user.name}</h1>
      <div className="dash-grid">
        <div className="dash-card card">
          <h3>Profile</h3>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Member since:</b> {new Date(user.createdAt).toLocaleDateString()}</p>
        </div>

        <div className="dash-card card" style={{gridColumn:'span 2'}}>
          <h3>Your Bookings</h3>
          {bookings.length === 0 ? <div>No bookings yet.</div> : (
            bookings.map(b => {
              const resort = resorts.find(r => r.id === b.resortId);
              const room = resort?.rooms.find(rr => rr.id === b.roomId);
              return (
                <div key={b.id} className="booking-row">
                  <div><b>{resort?.name}</b> — {room?.name}</div>
                  <div>{b.checkin} → {b.checkout}</div>
                  <div>Status: {b.status}</div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
