import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { currentUser, logout } from '../utils/auth';
import './Navbar.css';

export default function Navbar(){
  const user = currentUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    window.location.reload();
  };

  return (
    <header className="nav-root">
      <div className="container nav-inner">
        <Link to="/" className="brand">
          <div className="brand-logo">TR</div>
          <div className="brand-text">
            <div className="brand-name">Tagaytay Resorts</div>
            <div className="brand-sub">Tourism Office Listing</div>
          </div>
        </Link>

        <nav className="nav-links">
          <NavLink to="/resorts" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Resorts</NavLink>
          {user ? (
            <>
              <NavLink to="/dashboard" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Dashboard</NavLink>
              <button className="btn-ghost" onClick={handleLogout}>Sign Out</button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">Sign in</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
