import React from 'react';
import './RoomCard.css';

export default function RoomCard({ room, onBook }) {
  return (
    <article className="roomcard">
      <div className="roomcard-media"><img src={room.images[0]} alt={room.name} /></div>
      <div className="roomcard-body">
        <h3 className="roomcard-title">{room.name}</h3>
        <div className="roomcard-meta">Capacity: {room.capacity} • Rating: {room.rating}</div>
        <div className="roomcard-bottom">
          <div>
            <div className="roomcard-price">₱{room.price}</div>
            <div className="roomcard-sub">per night</div>
          </div>
          <div className="roomcard-actions">
            <button className="btn-primary" onClick={() => onBook(room)}>Book</button>
            <button className="btn-outline">Details</button>
          </div>
        </div>
      </div>
    </article>
  );
}
