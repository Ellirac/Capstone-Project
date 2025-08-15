import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { signup, googleSignInMock } from '../utils/auth';
import './Signup.css';

const AMENITIES = ['Pool', 'Restaurant', 'Breakfast', 'WiFi', 'Function Hall', 'BBQ'];

export default function Signup(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
  const [acceptedTaal, setAcceptedTaal] = useState(false);
  const [preferences, setPreferences] = useState([]);
  const [optIn, setOptIn] = useState(false);
  const [err, setErr] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/dashboard';

  const togglePref = (p) => setPreferences(prev => prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p]);

  const handle = (e) => {
    e.preventDefault();
    setErr('');
    try {
      signup({ email, password, name, preferences, acceptedPrivacy, acceptedTaal, optIn });
      navigate(from);
      window.location.reload();
    } catch (e) {
      setErr(e.message);
    }
  };

  const handleGoogle = () => {
    try {
      googleSignInMock();
      navigate(from);
      window.location.reload();
    } catch (e) {
      setErr(e.message);
    }
  };

  return (
    <div className="container">
      <div className="auth-card card">
        <h2>Create an account</h2>
        {err && <div className="auth-err">{err}</div>}
        <form onSubmit={handle}>
          <label>Full name</label>
          <input value={name} onChange={e=> setName(e.target.value)} required />

          <label>Email</label>
          <input value={email} onChange={e=> setEmail(e.target.value)} type="email" required />

          <label>Password</label>
          <input value={password} onChange={e=> setPassword(e.target.value)} type="password" required />

          <div className="checkbox-row">
            <input id="privacy" type="checkbox" checked={acceptedPrivacy} onChange={e=> setAcceptedPrivacy(e.target.checked)} />
            <label htmlFor="privacy">I accept the Data Privacy terms (RA 10173)</label>
          </div>

          <div className="checkbox-row">
            <input id="taal" type="checkbox" checked={acceptedTaal} onChange={e=> setAcceptedTaal(e.target.checked)} />
            <label htmlFor="taal">I acknowledge Taal Volcano safety information</label>
          </div>

          <div className="prefs">
            <label>Amenity preferences (optional)</label>
            <div className="prefs-grid">
              {AMENITIES.map(a => (
                <label key={a} className="pref-item">
                  <input type="checkbox" checked={preferences.includes(a)} onChange={()=> togglePref(a)} />
                  {a}
                </label>
              ))}
            </div>
          </div>

          <div className="checkbox-row">
            <input id="optin" type="checkbox" checked={optIn} onChange={e=> setOptIn(e.target.checked)} />
            <label htmlFor="optin">Opt-in for personalized recommendations</label>
          </div>

          <button className="btn-primary" type="submit">Sign up</button>
        </form>

        <div style={{marginTop:12}}>
          <div style={{marginBottom:8}}>Or sign up quickly with</div>
          <button className="btn-google" onClick={handleGoogle}>Sign in with Google</button>
        </div>

        <div className="auth-foot">Already have an account? <a href="/login">Sign in</a></div>
      </div>
    </div>
  );
}
