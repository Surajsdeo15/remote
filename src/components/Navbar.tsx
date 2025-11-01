import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (route: string) => {
    const remoteUrl = process.env.REACT_APP_REMOTE_URL || 'http://localhost:3001';
    const isStandalone = window.location.origin === remoteUrl;

    if (isStandalone) {
      // In standalone mode, use React Router navigation
      navigate(route);
    } else {
      // When embedded, dispatch custom event for host to handle
      const event = new CustomEvent('remoteNavigate', { detail: { route } });
      window.dispatchEvent(event);
    }
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h2>Remote App</h2>
        </div>
        <div className="navbar-menu">
          <button
            onClick={() => handleNavigation('/')}
            className={`navbar-button ${isActive('/') ? 'active' : ''}`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavigation('/about')}
            className={`navbar-button ${isActive('/about') ? 'active' : ''}`}
          >
            About
          </button>
          <button
            onClick={() => handleNavigation('/product')}
            className={`navbar-button ${isActive('/product') ? 'active' : ''}`}
          >
            Product
          </button>
          <button
            onClick={() => handleNavigation('/setting')}
            className={`navbar-button ${isActive('/setting') ? 'active' : ''}`}
          >
            Setting
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

