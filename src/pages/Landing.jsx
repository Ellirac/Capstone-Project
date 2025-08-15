// src/pages/Landing.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { resorts } from '../data/resorts';
import './Landing.css';

export default function Landing() {
  const [query, setQuery] = useState('');
  const [filterClass, setFilterClass] = useState('All');

  const heroVideo = '/assets/360-hero.mp4';
  const heroImage = '/assets/360-hero.jpg';

  const searchMatches = (r, q) => {
    if (!q) return true;
    const t = q.toLowerCase();
    return r.name.toLowerCase().includes(t) || r.location.toLowerCase().includes(t) || (r.tagline || '').toLowerCase().includes(t);
  };

  const filtered = resorts.filter(r => (filterClass === 'All' ? true : r.classification === filterClass) && searchMatches(r, query));

  const grouped = {
    Public: filtered.filter(r => r.classification === 'Public'),
    Private: filtered.filter(r => r.classification === 'Private')
  };

  return (
    <div className="landing-root">
      <div className="hero-outer">
        <video className="hero-bg" src={heroVideo} autoPlay muted loop playsInline>
          <source src={heroVideo} type="video/mp4" />
          <img src={heroImage} alt="Tagaytay 360" />
        </video>

        <div className="hero-overlay container">
          <div className="hero-content">
            <h1>Find & Book Tagaytay Resorts</h1>
            <p className="muted">Tourism Office–verified resorts with immersive 360° previews</p>

            <div className="search-overlay">
              <input type="text" placeholder="Search resort name, location, or tagline" value={query} onChange={e => setQuery(e.target.value)} />
              <select value={filterClass} onChange={e => setFilterClass(e.target.value)}>
                <option value="All">All classifications</option>
                <option value="Public">Public</option>
                <option value="Private">Private</option>
              </select>
              <Link className="btn-primary" to="/resorts">Browse</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container section">
        <h2>Featured Resorts</h2>
        <div className="featured-scroll">
          {resorts.slice(0,6).map(r => (
            <div className="featured-card card" key={r.id}>
              <img src={r.coverImage} alt={r.name} />
              <div className="featured-info">
                <div className="f-top">
                  <h4>{r.name}</h4>
                  <span className={`badge ${r.classification.toLowerCase()}`}>{r.classification}</span>
                </div>
                <div className="tagline">{r.tagline}</div>
                <div className="f-actions">
                  <Link to={`/resort/${r.id}`} className="btn-outline small">View</Link>
                  <Link to={`/resort/${r.id}/virtual-tour?mode=panorama`} className="btn-primary small">360°</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container section">
        <h2>All Resorts</h2>

        {['Public', 'Private'].map(cat => (
          <div key={cat} className="category-block">
            <div className="category-header">
              <h3>{cat} Resorts</h3>
            </div>

            <div className="resort-grid">
              {grouped[cat].length === 0 ? <div className="muted">No resorts found in this category.</div> :
                grouped[cat].map(r => (
                  <div className="resort-card card" key={r.id}>
                    <img src={r.coverImage} alt={r.name} />
                    <div className="resort-card-body">
                      <div className="card-top">
                        <h4>{r.name}</h4>
                        <span className={`badge ${r.classification.toLowerCase()}`}>{r.classification}</span>
                      </div>
                      <div className="tagline">{r.tagline}</div>
                      <p className="muted small">{r.location}</p>
                      <div className="card-actions">
                        <Link to={`/resort/${r.id}`} className="btn-primary">View details</Link>
                        <Link to={`/resort/${r.id}/virtual-tour?mode=panorama`} className="btn-outline">360°</Link>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
