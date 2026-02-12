import React from 'react';
import { Card } from 'primereact/card';
import './Participate.css';
import imagen2 from "../../assets/main/IMG_BATTLE ROYALE.png";
import imagen1 from "../../assets/main/IMG_ENTRA AL JUEGO.png";
import imagen3 from "../../assets/main/IMG_GRAN FINAL.png"

import background from "../../assets/main/IMG_Background_comoparticipar.png"
import backgroundDesktop from "../../assets/desktop/Main/IMG_Background_Participar.png"
import { useViewport } from "../../context/ViewportContext";
const Participate = () => {

  const { isMobile } = useViewport();

  const backgroundImage = isMobile ? background : backgroundDesktop;

  const steps = [
    {
      imagen: imagen1,
      title: 'ENTRA AL JUEGO',
      description: '200 jugadores por país entran a las clasificatorias.'
    },
    {
      imagen: imagen2,
      title: 'BATTLE ROYALE',
      description: 'Juega 2 partidas de Battle Royale y llega al Top 20 para avanzar. Solo 5 sobreviven al enfrentamiento en Alcatraz.'
    },
    {
      imagen: imagen3,
      title: 'GRAN FINAL',
      description: '3 partidas por país + Batalla Final de MC Freestyle. El primero en llegar a 5 puntos gana.'
    }
  ];

  return (
    <section id="como-participar" className="como-participar-section" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'contain', backgroundPosition: 'center' }}>
      <p className='title-participate'>¿CÓMO PARTICIPAR?</p>
      
      <div className="participar-cards-container">
        <div style={{ minWidth: '5px' }}></div>
        {steps.map((step, index) => (
          <Card key={index} className="participar-card">
            <p className='guild-font' style={{color: "white", fontSize: "18px", textAlign: "left", paddingBottom: "16px"}}>{step.title}</p>
            <div className="card-icon">
              <img loading="lazy" className='imageCard-participate' src={step.imagen} alt={step.title} />
            </div>

            <p className='card-text-participate'>{step.description}</p>
          </Card>
        ))}
        <div style={{ minWidth: '5px' }}></div>
      </div>
      <p className='text-participate' style={{color:"#CDCDCD", paddingLeft: "25px", paddingRight: "25px", paddingTop: "20px"}}>*Los participantes serán elegidos aleatoreamente</p>
    </section>
  );
};

export default Participate;
