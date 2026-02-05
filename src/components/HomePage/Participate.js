import React from 'react';
import { Card } from 'primereact/card';
import './Participate.css';
import imagen2 from "../../assets//Fondo.png";
const Participate = () => {
  const steps = [
    {
      imagen: imagen2,
      title: 'Regístrate',
      description: 'Crea tu cuenta y completa tu perfil con tus datos personales'
    },
    {
      imagen: imagen2,
      title: 'Envía tu Aplicación',
      description: 'Completa y envía la solicitud con los requisitos necesarios'
    },
    {
      imagen: imagen2,
      title: 'Participa',
      description: 'Compite con otros participantes y demuestra tus habilidades'
    }
  ];

  return (
    <section id="como-participar" className="como-participar-section">
      <p className='title-participate'>¿Cómo Participar?</p>
      <p className='text-participate'>Sección que explica de manera muy breve las diferentes fases del evento.</p>
      <div className="participar-cards-container">
        <div style={{ minWidth: '20px' }}></div>
        {steps.map((step, index) => (
          <Card key={index} className="participar-card">
            <h3>{step.title}</h3>
            <div className="card-icon">
              <img className='imageCard' src={step.imagen} alt={step.title} />
            </div>

            <p className='card-text-participate'>{step.description}</p>
          </Card>
        ))}
        <div style={{ minWidth: '20px' }}></div>
      </div>
      <p className='text-participate' style={{color:"grey", paddingLeft: "25px", paddingRight: "25px"}}>*Si hay más registros que cupos disponibles, la selección se hará según país/código postal y nivel de engagement. Países participantes: México, Argentina, Chile, Colombia y Perú. El sexto equipo estará formado por jugadores de Latinoamérica y el Caribe.</p>
    </section>
  );
};

export default Participate;
