import React from 'react';
import { Card } from 'primereact/card';
import './Participate.css';
import imagen2 from "../../assets/main/IMG_BATTLE ROYALE.png";
import imagen1 from "../../assets/main/IMG_ENTRA AL JUEGO.png";
import imagen3 from "../../assets/main/IMG_GRAN FINAL.png"

import background from "../../assets/main/IMG_Background_comoparticipar.png"
const Participate = () => {
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
    <section id="como-participar" className="como-participar-section" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <p className='title-participate'>¿CÓMO PARTICIPAR?</p>
      <p className='text-participate' style={{paddingTop: "26px"}}>Sección que explica de manera muy breve </p>
      <p className='text-participate' style={{paddingBottom: "26px"}}>las diferentes fases del evento.</p>
      
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
      <p className='text-participate' style={{color:"#CDCDCD", paddingLeft: "25px", paddingRight: "25px", paddingTop: "20px"}}>*Si hay más registros que cupos disponibles, la selección se hará según país/código postal y nivel de engagement. Países participantes: México, Argentina, Chile, Colombia, Perú y Ecuador. El equipo mixto estará formado por participantes de Perú y Ecuador</p>
    </section>
  );
};

export default Participate;
