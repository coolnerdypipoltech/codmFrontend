import React from 'react';
import imagen2 from "../../assets//Fondo.png";
const BuyTickets = () => {
  return (
    <section id="buyTickets" className="premio-section" style={{minHeight: "150px"}}>
      <div className="premio-container" style={{backgroundImage: `url(${imagen2})`, minHeight: "150px"}} >
        <p className='title-prize' style={{fontSize: "14px", color: "white"}}>COMPRAR BOLETOS PARA LA FINAL EN VIVO</p>
        <p className='text-prize'>Comprar Boletos.</p>
      </div>
      
      
    </section>
  );
};

export default BuyTickets;
