import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import './TestPage.css';

const TestPage = () => {
  const audioRef = useRef(null);
  const lastScrollTime = useRef(0);

  useEffect(() => {
    // Crear el audio (puedes cambiar la URL por tu propio archivo de sonido)
    audioRef.current = new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3');
    audioRef.current.volume = 0.3;

    const handleScroll = () => {
      const now = Date.now();
      // Throttle: solo reproducir si han pasado al menos 500ms desde el último scroll
      if (now - lastScrollTime.current > 500) {
        lastScrollTime.current = now;
        
        if (audioRef.current) {
          audioRef.current.currentTime = 0;
          audioRef.current.play().catch(err => {
            console.log('Error al reproducir audio:', err);
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
      <div style={{backgroundColor: "red", minWidth: "100vw", minHeight: "200vh"}}>
      </div>
      <div style={{backgroundColor: "black", minWidth: "100vw", minHeight: "200vh"}}>
      </div>
    </div>
  );
};

export default TestPage;
