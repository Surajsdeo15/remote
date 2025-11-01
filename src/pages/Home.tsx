import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-card">
        <h1>Home Page</h1>
        <p>Welcome to the Home page of the Remote Application!</p>
        <div className="page-content">
          <p>This is the main landing page of your remote microfrontend application.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

