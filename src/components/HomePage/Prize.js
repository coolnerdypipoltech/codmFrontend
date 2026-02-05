import React from 'react';
import './Prize.css';
import imagen2 from "../../assets//Fondo.png";
const Prize = () => {
  return (
    <section id="premio" className="premio-section">
      <div style={{backgroundImage: `url(${imagen2})`}} className="premio-container">
        <p className='title-prize'>LA GLORIA DEL BARRIO</p>
        <p className='text-prize'>*Si hay más registros que cupos disponibles, la selección se hará según país/código postal y nivel de engagement.</p>
      </div>
      
      
    </section>
  );
};

export default Prize;
