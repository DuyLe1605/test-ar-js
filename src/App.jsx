import React, { useState } from 'react';
import ARScene from './ARScene';
import './App.css';

function App() {
  const [startAR, setStartAR] = useState(false);

  if (startAR) {
    return <ARScene />;
  }

  return (
    <div className="app-container">
      <div className="landing-page">
          <div className="glass-card">
            <h1>Web AR Experience</h1>
            <p>Built with React & AR.js</p>
            <div className="features">
              <div className="feature">
                <span className="icon">📷</span>
                <span>Camera Access Required</span>
              </div>
              <div className="feature">
                <span className="icon">🔳</span>
                <span>Marker-Based Tracking</span>
              </div>
            </div>
            <button className="start-btn" onClick={() => setStartAR(true)}>
              Launch AR
            </button>
          </div>
          
          <div className="background-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
      </div>
  );
}

export default App;
