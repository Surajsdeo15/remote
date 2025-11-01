import React from 'react';
import './App.css';

function App() {
  const handleGoToProfile = () => {
    // Check if we're in standalone mode
    const remoteUrl = process.env.REACT_APP_REMOTE_URL || 'http://localhost:3001';
    const isStandalone = window.location.origin === remoteUrl;
    
    if (isStandalone) {
      // In standalone mode, navigate using window.location
      window.location.href = '/profile';
    } else {
      // When embedded, dispatch custom event for host to handle
      // Use remote URL from env or fallback
      const remoteUrl = process.env.REACT_APP_REMOTE_URL || 'http://localhost:3001';
      const event = new CustomEvent('remoteNavigate', { detail: { route: '/profile' } });
      window.dispatchEvent(event);
    }
  };

  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    // Dispatch logout event for host to handle navigation
    const logoutEvent = new CustomEvent('userLogout');
    window.dispatchEvent(logoutEvent);
    
    // Check if we're in standalone mode
    const remoteUrl = process.env.REACT_APP_REMOTE_URL || 'http://localhost:3001';
    const isStandalone = window.location.origin === remoteUrl;
    
    if (isStandalone) {
      // In standalone mode, redirect to login
      window.location.href = '/login';
    } else {
      // When embedded, the host will handle navigation via the event
      // We can also try to redirect to host login page
      const hostUrl = window.location.origin.includes('3001') 
        ? 'http://localhost:5173' 
        : window.location.origin;
      window.location.href = `${hostUrl}/login`;
    }
  };

  return (
    <div className="remote-container">
      <div className="remote-card">
        <h2>Remote Application (CRA)</h2>
        <p>This is the remote application running on port 3001</p>
        <div className="remote-features">
          <div className="feature-item">
            <strong>Framework:</strong> Create React App (CRA)
          </div>
          <div className="feature-item">
            <strong>Status:</strong> Connected via Module Federation
          </div>
          <div className="feature-item">
            <strong>Architecture:</strong> Microfrontend Remote
          </div>
        </div>
        <p className="remote-description">
          This component is dynamically loaded from the remote application
          into the host application using Module Federation.
        </p>
        <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
          <button onClick={handleGoToProfile} className="profile-button">
            Go to Profile Page
          </button>
          <button onClick={handleLogout} className="logout-button" style={{ padding: '8px 16px', cursor: 'pointer' }}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
