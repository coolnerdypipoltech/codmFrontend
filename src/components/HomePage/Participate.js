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
      <h2>¿Cómo Participar?</h2>
      <div className="participar-cards-container">
        {steps.map((step, index) => (
          <Card key={index} className="participar-card">
            <div className="card-icon">
              <img className='imageCard' src={step.imagen} alt={step.title} />
            </div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Participate;
