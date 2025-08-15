import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { login, googleSignInMock } from '../utils/auth';
import './Login.css';

export default function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/dashboard';

  const handle = (e) => {
    e.preventDefault();
    try {
      login({ email, password });
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
        <h2>Sign In</h2>
        {err && <div className="auth-err">{err}</div>}
        <form onSubmit={handle}>
          <label>Email</label>
          <input value={email} onChange={e=> setEmail(e.target.value)} type="email" required />
          <label>Password</label>
          <input value={password} onChange={e=> setPassword(e.target.value)} type="password" required />
          <button className="btn-primary" type="submit">Sign In</button>
        </form>

        <div style={{marginTop:12}}>
          <div style={{marginBottom:8}}>Or sign in</div>
          <button className="btn-google" onClick={handleGoogle}>Sign in with Google</button>
        </div>

        <div className="auth-foot">Don't have an account? <Link to="/signup">Sign up</Link></div>
      </div>
    </div>
  );
}
