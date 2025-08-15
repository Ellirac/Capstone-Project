import React from 'react';
import './SearchBar.css';

export default function SearchBar({ q, onChange, onSearch }) {
  return (
    <div className="searchbar">
      <input value={q} onChange={e => onChange(e.target.value)} placeholder="Search resorts, location or tag..." />
      <button onClick={onSearch} className="btn-search">Search</button>
    </div>
  );
}
