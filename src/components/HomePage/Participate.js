
import './Participate.css';
import imagen1 from "../../assets/cards/Tarjeta_1.webp";
import imagen2 from "../../assets/cards/Tarjeta_2.webp";
import imagen3 from "../../assets/cards/Tarjeta_3.webp";
import imagen4 from "../../assets/cards/Tarjeta_4.webp";

import background from "../../assets/main/IMG_Background_comoparticipar.webp"
import backgroundDesktop from "../../assets/desktop/Main/IMG_Background_Participar.webp"
import { useViewport } from "../../context/ViewportContext";
const Participate = () => {

  const { isMobile } = useViewport();

  const backgroundImage = isMobile ? background : backgroundDesktop;

  const steps = [
    {
      imagen: imagen1,   },
    {
      imagen: imagen2,  },
    {
      imagen: imagen3,
   },
    {
      imagen: imagen4,
   }
  ];

  return (
    <section id="como-participar" className="como-participar-section" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'contain', backgroundPosition: 'center' }}>
      <p className='title-participate'>¿CÓMO PARTICIPAR?</p>
      
      <div className="participar-cards-container">
        <div style={{ minWidth: '5px' }}></div>
        {steps.map((step, index) => (
          <img className="participar-card" src={step.imagen} alt={`Step ${index + 1}`} />
        ))}
        <div style={{ minWidth: '5px' }}></div>
      </div>
      <p className='text-participate' style={{color:"#CDCDCD", paddingLeft: "25px", paddingRight: "25px", paddingTop: "20px"}}>*Los participantes serán elegidos aleatoreamente</p>
    </section>
  );
};

export default Participate;
