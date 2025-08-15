import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { resorts } from '../data/resorts';
import RoomCard from '../components/RoomCard';
import { currentUser } from '../utils/auth';
import './ResortDetail.css';

export default function ResortDetail(){
  const { resortId } = useParams();
  const resort = resorts.find(r => r.id === resortId);
  const navigate = useNavigate();
  const [tab, setTab] = useState('overview');
  if (!resort) return <div className="container section">Resort not found</div>;

  const handleBook = (room) => {
    const user = currentUser();
    if (!user) {
      navigate('/login', { state: { from: `/booking?resort=${resortId}&room=${room.id}` }});
      return;
    }
    navigate(`/booking?resort=${resortId}&room=${room.id}`);
  };

  return (
    <div className="container section">
      <div className="detail-top card">
        <div className="detail-gallery">
          <img src={resort.coverImage} alt={resort.name} />
        </div>

        <div className="detail-info">
          <h1>{resort.name}</h1>
          <div className="meta-row">
            <div className="muted">{resort.location} • Managed by {resort.owner}</div>
            <div className="rating">⭐ {resort.rating}</div>
          </div>
          <div className="tagline-large">{resort.tagline}</div>
          <p className="desc">{resort.description}</p>

          <div className="action-row">
            <button className="btn-primary" onClick={() => setTab('rooms')}>View Rooms</button>
            <button className="btn-outline" onClick={() => setTab('tour')}>360° / Walkthrough</button>
          </div>
        </div>
      </div>

      <div className="tabs card">
        <div className="tab-list">
          <button className={tab==='overview'?'tab active':'tab'} onClick={()=>setTab('overview')}>Overview</button>
          <button className={tab==='amenities'?'tab active':'tab'} onClick={()=>setTab('amenities')}>Amenities</button>
          <button className={tab==='offers'?'tab active':'tab'} onClick={()=>setTab('offers')}>Offers</button>
          <button className={tab==='rooms'?'tab active':'tab'} onClick={()=>setTab('rooms')}>Rooms</button>
          <button className={tab==='tour'?'tab active':'tab'} onClick={()=>setTab('tour')}>360° / Walkthrough</button>
        </div>

        <div className="tab-panel">
          {tab === 'overview' && (
            <div className="overview">
              <h3>About this resort</h3>
              <p>{resort.description}</p>
            </div>
          )}

          {tab === 'amenities' && (
            <div className="amenities-grid">
              {resort.amenities.map(a => <div key={a} className="amenity-card">{a}</div>)}
            </div>
          )}

          {tab === 'offers' && (
            <div className="offers-grid">
              {resort.offers.map(o => (
                <div key={o.id} className="offer-card">
                  <h4>{o.title}</h4>
                  <ul>{o.items.map(it => <li key={it}>{it}</li>)}</ul>
                </div>
              ))}
            </div>
          )}

          {tab === 'rooms' && (
            <div className="rooms-grid">
              {resort.rooms.map(room => (
                <div key={room.id}>
                  <RoomCard room={room} onBook={handleBook} />
                </div>
              ))}
            </div>
          )}

          {tab === 'tour' && (
            <div className="tour-panel">
              <div className="tour-actions">
                <a className="btn-outline" href={`/resort/${resort.id}/virtual-tour?mode=panorama`}>View 360°</a>
                <a className="btn-primary" href={`/resort/${resort.id}/virtual-tour?mode=video`}>Watch Walkthrough</a>
              </div>

              <div className="tour-preview">
                {resort.virtualTour ? (
                  <img src={resort.virtualTour} alt={`${resort.name} 360 preview`} />
                ) : (
                  <div className="muted">No 360° preview available.</div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
