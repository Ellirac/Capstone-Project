import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { resorts } from '../data/resorts';
import { currentUser } from '../utils/auth';
import './Booking.css';

function _getBookings(){ try { return JSON.parse(localStorage.getItem('rms_bookings') || '[]'); } catch { return []; } }
function _saveBooking(b){ const arr=_getBookings(); arr.push(b); localStorage.setItem('rms_bookings', JSON.stringify(arr)); }

export default function Booking(){
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const resortId = searchParams.get('resort');
  const roomId = searchParams.get('room');
  const resort = resorts.find(r => r.id === resortId);
  const room = resort?.rooms.find(rr => rr.id === roomId);
  const user = currentUser();

  const [form, setForm] = useState({ fullname:'', email:'', checkin:'', checkout:'', payment:'GCash' });

  useEffect(()=>{
    if (!user) {
      navigate('/login', { state: { from: window.location.pathname + window.location.search }});
    } else {
      setForm(f => ({ ...f, fullname: user.name || '', email: user.email || '' }));
    }
  }, [user, navigate]);

  if (!resort || !room) return <div className="container section">Invalid booking parameters.</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    const booking = {
      id: `b_${Date.now()}`,
      userId: user.id,
      resortId: resort.id,
      roomId: room.id,
      fullname: form.fullname,
      email: form.email,
      checkin: form.checkin,
      checkout: form.checkout,
      payment: form.payment,
      status: 'PENDING',
      createdAt: Date.now()
    };
    _saveBooking(booking);
    alert('Booking saved locally (mock). Replace with real backend/payment in production.');
    navigate('/dashboard');
  };

  return (
    <div className="container">
      <h1>Booking — {resort.name} / {room.name}</h1>
      <div className="booking-grid">
        <div className="card booking-left">
          <img src={room.images[0]} alt={room.name} />
          <div className="booking-info">
            <div className="price">₱{room.price} / night</div>
            <div className="meta">Capacity: {room.capacity}</div>
            <ul className="amenities">{resort.amenities.map(a => <li key={a}>{a}</li>)}</ul>
          </div>
        </div>

        <div className="card booking-right">
          <form onSubmit={handleSubmit} className="booking-form">
            <label>Full name</label>
            <input type="text" required value={form.fullname} onChange={e=> setForm({...form, fullname: e.target.value})} />

            <label>Email</label>
            <input type="email" required value={form.email} onChange={e=> setForm({...form, email: e.target.value})} />

            <label>Check-in</label>
            <input type="date" required value={form.checkin} onChange={e=> setForm({...form, checkin: e.target.value})} />

            <label>Check-out</label>
            <input type="date" required value={form.checkout} onChange={e=> setForm({...form, checkout: e.target.value})} />

            <label>Payment method</label>
            <select value={form.payment} onChange={e=> setForm({...form, payment: e.target.value})}>
              <option>GCash</option>
              <option>Card (placeholder)</option>
              <option>Bank Transfer</option>
            </select>

            <div className="booking-actions">
              <button className="btn-primary" type="submit">Confirm Booking</button>
            </div>

            <div className="note">* This demo stores bookings locally. Replace with a secure payment gateway and backend in production.</div>
          </form>
        </div>
      </div>
    </div>
  );
}
