import React from 'react';
import './Setting.css';

const Setting: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-card">
        <h1>Settings Page</h1>
        <p>Manage your application settings</p>
        <div className="page-content">
          <div className="settings-section">
            <h2>General Settings</h2>
            <div className="setting-item">
              <label>Language</label>
              <select>
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
            <div className="setting-item">
              <label>Theme</label>
              <select>
                <option>Light</option>
                <option>Dark</option>
              </select>
            </div>
          </div>
          <div className="settings-section">
            <h2>Account Settings</h2>
            <div className="setting-item">
              <label>Notifications</label>
              <input type="checkbox" defaultChecked />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;

