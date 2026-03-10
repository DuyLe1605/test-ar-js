import React, { useEffect } from 'react';
import './video-fix.css';

const ARScene = () => {
  useEffect(() => {
    const handleCameraInit = () => {
      console.log('Camera initialized');
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 1000); // Wait 1 second before dispatching resize
    };

    window.addEventListener('camera-init', handleCameraInit);
    return () => {
      window.removeEventListener('camera-init', handleCameraInit);
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* 
        A-Frame scene needs to be rendered without React wrapping its elements too much,
        but simple A-Frame tags work fine inside React if we treat them as web components.
      */}
      <a-scene 
        embedded 
        arjs="sourceType: webcam; sourceWidth:1280; sourceHeight:960; displayWidth: 1280; displayHeight: 960; debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 3x3;"
        renderer="logarithmicDepthBuffer: true; antialias: true; alpha: true;"
        vr-mode-ui="enabled: false"
      >
        {/* We use the default hiro marker */}
        <a-marker preset="hiro">
          {/* A glowing, rotating cube as the AR object */}
          <a-box 
            position="0 0.5 0" 
            material="color: #4CC3D9; wireframe: true;"
            animation="property: rotation; to: 0 360 0; loop: true; dur: 2000"
          ></a-box>
          <a-sphere 
            position="0 0.5 0" 
            radius="0.4"
            material="color: #EF2D5E; opacity: 0.8; transparent: true"
            animation="property: position; to: 0 1 0; dir: alternate; loop: true; dur: 1000"
          ></a-sphere>
        </a-marker>

        <a-entity camera></a-entity>
      </a-scene>

      {/* Modern UI Overlay */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)',
        padding: '15px 30px',
        borderRadius: '20px',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        color: 'white',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        textAlign: 'center',
        zIndex: 1000
      }}>
        <h2 style={{ margin: '0 0 10px 0', fontSize: '1.2rem', fontWeight: '600' }}>Duy Lee</h2>
        <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.9 }}>Point your camera at a Hero marker to see the 3D object.</p>
        <a 
          href="https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png" 
          target="_blank" 
          rel="noreferrer"
          style={{ 
            display: 'inline-block',
            marginTop: '10px',
            color: '#61dafb', 
            textDecoration: 'none',
            fontSize: '0.85rem'
          }}
        >
          Get Hiro Marker here
        </a>
      </div>
    </div>
  );
};

export default ARScene;
