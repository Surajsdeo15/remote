import React from 'react';
import './Profile.css';

function Profile() {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  
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
    <div className="remote-profile-container">
      <div className="remote-profile-card">
        <h2>Remote Profile Component</h2>
        <p className="subtitle">This component is loaded from the remote application (CRA)</p>
        
        <div className="profile-info">
          <div className="info-item">
            <strong>First Name:</strong> {user.firstName || 'N/A'}
          </div>
          <div className="info-item">
            <strong>Last Name:</strong> {user.lastName || 'N/A'}
          </div>
          <div className="info-item">
            <strong>Username:</strong> {user.username || 'N/A'}
          </div>
          <div className="info-item">
            <strong>Email:</strong> {user.email || 'N/A'}
          </div>
          <div className="info-item">
            <strong>Phone:</strong> {user.phone || 'N/A'}
          </div>
          <div className="info-item">
            <strong>Age:</strong> {user.age || 'N/A'}
          </div>
        </div>

        <div className="profile-badge">
          <span>✓ Loaded via Module Federation</span>
        </div>

        <button onClick={handleLogout} className="logout-button" style={{ marginTop: '20px', padding: '8px 16px', cursor: 'pointer' }}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;

