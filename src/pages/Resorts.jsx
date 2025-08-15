import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { resorts } from '../data/resorts';
import SearchBar from '../components/SearchBar';
import './Resorts.css';

export default function Resorts(){
  const [q, setQ] = useState('');
  const [filtered, setFiltered] = useState(resorts);

  const handleSearch = () => {
    const term = q.trim().toLowerCase();
    const res = resorts.filter(r => r.name.toLowerCase().includes(term) || r.location.toLowerCase().includes(term) || (r.tagline || '').toLowerCase().includes(term));
    setFiltered(res);
  };

  return (
    <div className="container">
      <div className="search-section card">
        <SearchBar q={q} onChange={setQ} onSearch={handleSearch} />
      </div>

      <div className="container section">
        <div className="resort-grid">
          {filtered.map(r => (
            <div className="resort-card card" key={r.id}>
              <img src={r.coverImage} alt={r.name} />
              <div className="resort-card-body">
                <h3>{r.name}</h3>
                <div className="muted">{r.location} • {r.classification}</div>
                <p className="desc">{r.tagline}</p>
                <div className="resort-actions">
                  <Link to={`/resort/${r.id}`} className="btn-primary">View</Link>
                  <Link to={`/resort/${r.id}/virtual-tour?mode=panorama`} className="btn-outline">360°</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
