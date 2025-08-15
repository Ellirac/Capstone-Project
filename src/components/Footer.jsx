import React from 'react';
import './Footer.css';

export default function Footer(){
  return (
    <footer className="footer-root">
      <div className="container footer-inner">
        <div>© {new Date().getFullYear()} Tagaytay Tourism Office</div>
        <div className="footer-links">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}
