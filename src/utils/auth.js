// src/utils/auth.js
const USERS_KEY = 'rms_users';
const SESSION_KEY = 'rms_session';

function _getUsers() {
  try { return JSON.parse(localStorage.getItem(USERS_KEY) || '[]'); } catch { return []; }
}
function _saveUsers(users) { localStorage.setItem(USERS_KEY, JSON.stringify(users)); }

export function signup({ email, password, name, preferences = [], acceptedPrivacy = false, acceptedTaal = false, optIn = false }) {
  if (!acceptedPrivacy) throw new Error('You must accept Data Privacy terms (RA 10173).');
  if (!acceptedTaal) throw new Error('You must acknowledge Taal safety terms.');

  const users = _getUsers();
  if (users.find(u => u.email === email)) throw new Error('Email already registered');

  const newUser = {
    id: `u_${Date.now()}`,
    email,
    password, // WARNING: plaintext for demo only. Use hashing in production.
    name,
    preferences,
    acceptedPrivacy,
    acceptedTaal,
    optIn,
    provider: 'local',
    createdAt: Date.now()
  };
  users.push(newUser);
  _saveUsers(users);
  localStorage.setItem(SESSION_KEY, JSON.stringify({ userId: newUser.id }));
  return newUser;
}

export function login({ email, password }) {
  const users = _getUsers();
  const u = users.find(user => user.email === email && user.password === password);
  if (!u) throw new Error('Invalid email or password');
  localStorage.setItem(SESSION_KEY, JSON.stringify({ userId: u.id }));
  return u;
}

export function logout() { localStorage.removeItem(SESSION_KEY); }

export function currentUser() {
  try {
    const s = JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
    if (!s || !s.userId) return null;
    const users = _getUsers();
    return users.find(u => u.id === s.userId) || null;
  } catch { return null; }
}

// Update profile function - updates user fields provided in `updates` object.
// Example updates: { name, email, preferences, optIn, password }
export function updateProfile(userId, updates = {}) {
  const users = _getUsers();
  const idx = users.findIndex(u => u.id === userId);
  if (idx === -1) throw new Error('User not found');

  // Prevent accidental removal of required flags; only update whitelisted fields
  const allowed = ['name', 'email', 'preferences', 'optIn', 'password'];
  allowed.forEach(k => {
    if (k in updates) users[idx][k] = updates[k];
  });

  users[idx].updatedAt = Date.now();
  _saveUsers(users);

  // If this user is the current session user, refresh session store
  try {
    const s = JSON.parse(localStorage.getItem(SESSION_KEY) || 'null');
    if (s && s.userId === userId) {
      localStorage.setItem(SESSION_KEY, JSON.stringify({ userId }));
    }
  } catch (e) {
    // ignore
  }

  return users[idx];
}

// Mock Google Sign-In for development/testing only.
export function googleSignInMock() {
  const email = window.prompt('Enter Google email to simulate sign-in (e.g. you@gmail.com)');
  if (!email) throw new Error('Google sign-in cancelled');
  const name = window.prompt('Enter display name for Google account (e.g. Juan Dela Cruz)') || email.split('@')[0];
  const users = _getUsers();
  let user = users.find(u => u.email === email && u.provider === 'google');
  if (!user) {
    user = {
      id: `u_${Date.now()}`,
      email,
      password: null,
      name,
      preferences: [],
      acceptedPrivacy: true,
      acceptedTaal: true,
      optIn: false,
      provider: 'google',
      createdAt: Date.now()
    };
    users.push(user);
    _saveUsers(users);
  }
  localStorage.setItem(SESSION_KEY, JSON.stringify({ userId: user.id }));
  return user;
}
