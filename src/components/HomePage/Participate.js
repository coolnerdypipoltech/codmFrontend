
import './Participate.css';

import background from "../../assets/main/IMG_Background_comoparticipar.webp"
import backgroundDesktop from "../../assets/desktop/Main/IMG_Background_Participar.webp"
import { useViewport } from "../../context/ViewportContext";
import { useNavigate } from "react-router";
const Participate = () => {

  const imagen1 = "https://res.cloudinary.com/dqsdjfi92/image/upload/v1774654843/Tarjeta_1_t8huha.webp"
  const imagen2 = "https://res.cloudinary.com/dqsdjfi92/image/upload/v1774654843/Tarjeta_1_t8huha.webp"
  const imagen3 = "https://res.cloudinary.com/dqsdjfi92/image/upload/v1774654843/Tarjeta_3_jzqspn.webp"
  const imagen4 = "https://res.cloudinary.com/dqsdjfi92/image/upload/v1774654843/Tarjeta_4_wxxz4y.webp"
  const background = "https://res.cloudinary.com/dqsdjfi92/image/upload/v1774553851/IMG_Background_comoparticipar_bn6jog.webp"

    const navigate = useNavigate();
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
          <div>
            <img className="participar-card" src={step.imagen} alt={`Step ${index + 1}`} />
            {index === 0 && (<div style={{ width: "0px", height: "0px", overflow: "visible"}}>
              <div style={{ width: "50px", height: "50px", position: "absolute",}}>
              <div onClick={() => {navigate('/registro')}} style={{cursor: "pointer", backgroundColor: "transparent", width: "50px", height: "30px", position: "relative", top: isMobile ? "-225px" : "-234px", left: "140px"}}>
              
              </div>
              </div>
            </div>)}
          </div>
        ))}
        <div style={{ minWidth: '5px' }}></div>
      </div>
      <p className='text-participate' style={{ paddingLeft: "25px", paddingRight: "25px", paddingTop: "20px"}}>*Los participantes serán elegidos aleatoriamente</p>
    </section>
  );
};

export default Participate;
