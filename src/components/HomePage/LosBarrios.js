import React, { useState } from 'react';
import './LosBarrios.css';

const LosBarrios = () => {
  const sections = [
    { id: 1, title: 'Barrio 1', image: 'https://via.placeholder.com/400x300?text=Barrio+Centro' },
    { id: 2, title: 'Barrio 2', image: 'https://via.placeholder.com/400x300?text=Barrio+Norte' },
    { id: 3, title: 'Barrio 3', image: 'https://via.placeholder.com/400x300?text=Barrio+Sur' },
    { id: 4, title: 'Barrio 4', image: 'https://via.placeholder.com/400x300?text=Barrio+Este' },
    { id: 4, title: 'Barrio 5', image: 'https://via.placeholder.com/400x300?text=Barrio+Este' },
    { id: 4, title: 'Barrio 6', image: 'https://via.placeholder.com/400x300?text=Barrio+Este' },
  ];

  const [selectedBarrio, setSelectedBarrio] = useState(sections[0]);

  return (
    <section id="los-barrios" className="los-barrios-section">
      <h2>Los Barrios</h2>
      <div className="barrios-container">
        <div className="barrios-display">
          <img src={selectedBarrio.image} alt={selectedBarrio.title} />
          <h3>{selectedBarrio.title}</h3>
        </div>
        <div style={{width: "100%", overflow: "overlay"}}>
          <div className="barrios-selector">
          {sections.map(section => (
            <button
              key={section.id}
              className={`barrio-btn ${selectedBarrio.id === section.id ? 'active' : ''}`}
              onClick={() => setSelectedBarrio(section)}
            >
              {section.title}
            </button>
          ))}
        </div>
        </div>
        
      </div>
    </section>
  );
};

export default LosBarrios;
