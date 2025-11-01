import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-card">
        <h1>About Page</h1>
        <p>Learn more about our Remote Application</p>
        <div className="page-content">
          <h2>About Us</h2>
          <p>
            This is a remote microfrontend application built with Create React App
            and Module Federation. It can run standalone or be integrated into a
            host application.
          </p>
          <ul>
            <li>Built with React and TypeScript</li>
            <li>Module Federation for microfrontend architecture</li>
            <li>Modern UI/UX design</li>
            <li>Responsive and accessible</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

