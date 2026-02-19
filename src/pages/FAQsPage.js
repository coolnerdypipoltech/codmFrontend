import React, { useEffect } from "react";

import "./FAQsPage.css";
import image from "../assets/desktop/Registro/IMG_PreguntasFrecunetes.webp";
import buttonlayout from "../assets/registration/Button_Continuar.webp";
import { useNavigate } from "react-router";
import FAQsItem from "../components/FAQsItem";
import { useViewport } from "../context/ViewportContext";
const FAQsPage = () => {
  const navigate = useNavigate();
  const { isMobile } = useViewport();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{backgroundColor: "#1D1D1D", backgroundPosition: "center", backgroundSize: "200% auto", display: "flex", flexDirection: "column"}}>
      <div style={{ width: "100%", minHeight: "100px" }}></div>
      
      <div style={{minHeight: "70px"}}></div>

      <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
        <img loading="lazy" src={image} alt="title" style={{width: "80%", maxWidth: "500px"}}></img>
      </div>
    
      <div style={{width:"80%" , display: "flex", flexDirection: "column", alignContent: "center", justifyContent: "center", marginLeft: "10%", marginTop: "60px", gap: "16px", overflowX: "clip"}}>
        <p className="guild-regular-font" style={{fontSize: isMobile ? "24px" : "30px", color: "#FFB838"}}>Registro y Participación</p>
        <FAQsItem title={"¿Cómo puedo registrarme para participar en el torneo?"} text={"Debes ingresar al registro en https://codmbarrioslatinos.com, completar el formulario y validar tu correo electrónico."}></FAQsItem>
        <FAQsItem title={"¿Es obligatorio validar mi correo electrónico?"} text={"Sí. Es indispensable validar tu correo electrónico mediante el enlace enviado en el correo de bienvenida. Sin esta validación no serás considerado participante oficial."}></FAQsItem>
        <FAQsItem title={"¿Cómo sabré si mi registro fue exitoso?"} text={"Recibirás un correo de confirmación después de validar tu cuenta."}></FAQsItem>
        <FAQsItem title={"¿Hay fecha límite para registrarse?"} text={"Sí. El 05 de Marzo del 2026 11:59 hora CDMX."}></FAQsItem>
        <FAQsItem title={"¿Tiene algún costo registrarse?"} text={"No. El registro es gratuito, en caso de ser seleccionado, los gastos de transporte y hospedaje y viáticos esenciales a la Gran Final serán cubiertos por el organizador."}></FAQsItem>
        <FAQsItem title={"¿Puedo editar mi información después de registrarme?"} text={"No. Verifica que tus datos sean correctos al momento de llenar el formulario, ya que no podrás hacer cambios una vez realizado el registro."}></FAQsItem>
        <FAQsItem title={"¿Hay restricciones de edad para participar?"} text={"Sí. Debes tener al menos 18 años para participar."}></FAQsItem>
        <FAQsItem title={"¿Dónde puedo consultar el reglamento?"} text={"En los Términos y Condiciones del evento podrás encontrar todos los requisitos de participación y la información necesaria a considerar para competir. Puedes consultarlo directamente aquí"}></FAQsItem>
        <p className="guild-regular-font" style={{fontSize: isMobile ? "24px" : "30px", color: "#FFB838"}}>Clasificatorias Regionales</p>
        <FAQsItem title={"¿Qué países pueden participar en el torneo?"} text={"México, Chile, Argentina, Colombia, Perú y Ecuador."}></FAQsItem>
        <FAQsItem title={"¿Cómo están conformados los equipos?"} text={"México, Chile, Argentina y Colombia conformarán sus propios equipos. Perú y Ecuador (Tropa Andina) formarán un equipo combinado. Cada equipo cuenta con 5 participantes, un MC (urban freestyler) y un capitán."}></FAQsItem>
        <FAQsItem title={"¿Las clasificatorias son por país/región?"} text={"Sí."}></FAQsItem>
        <FAQsItem title={"¿Cómo se llevarán a cabo las clasificatorias?"} text={"Las clasificatorias se realizarán en línea. Las primeras dos partidas serán en Isolated, participarán 200 jugadores por cada país, distribuidos en 2 partidas de 100 jugadores cada una; los 20 mejores de cada partida avanzarán a una ronda decisiva con 40 jugadores en modalidad Battle Royale en el mapa Alcatraz. El top 5 final será seleccionado para conformar el equipo que representará a su país/región en la siguiente fase del torneo."}></FAQsItem>
        <FAQsItem title={"¿Habrá transmisión de las clasificatorias?"} text={"Si. Podrás ver la transmisión a través de distintas plataformas oficiales de la marca. https://www.facebook.com/LATAMCallOfDutyMobile https://www.youtube.com/@LATAMCallOfDutyMobile"}></FAQsItem>
        <FAQsItem title={"¿Qué día y hora serán las partidas de clasificatorias?"} text={"El día Viernes 6 de Marzo jugarán México y Argentina. El día Sábado 7 de Marzo jugarán Colombia, Chile, Ecuador y Perú. Para ambos días el horario de inicio de las partidas será: 5PM México, 6PM Colombia, 6PM Ecuador, 6PM Perú, 8PM Argentina, 8PM Chile."}></FAQsItem>
        <FAQsItem title={"¿Cómo se determina quién participa en las clasificatorias regionales?"} text={"Los participantes serán elegidos aleatoriamente."}></FAQsItem>
        <FAQsItem title={"¿Cómo sabré el horario de mi partida en las regional qualifiers?"} text={"Si quedaste seleccionado para participar en las regional qualifiers, te contactaremos por correo electrónico para brindarte la información y los pasos a seguir."}></FAQsItem>
        <FAQsItem title={"¿Qué sucede si tengo problemas técnicos durante una partida de regional qualifiers?"} text={"El jugador será responsable de participar con un equipo móvil y conexión a internet estable para participar en las partidas regionales."}></FAQsItem>
        <FAQsItem title={"Si fui seleccionado para la Gran Final, ¿qué sigue?"} text={"Recibirás un correo con toda la información y los siguientes pasos."}></FAQsItem>
        <p className="guild-regular-font" style={{fontSize: isMobile ? "24px" : "30px", color: "#FFB838"}}>La Gran Final</p>
        <FAQsItem title={"¿Cuándo se llevará a cabo la Gran Final en vivo?"} text={"La Gran Final se realizará el 18 de abril en el Venue House of Vans, ubicado en Rubens 6, San Juan, Benito Juárez, 03730, Ciudad de México, CDMX. Horario de arranque del evento: 3PM CDMX, 4PM Colombia, 4PM Ecuador, 4PM Perú, 6PM Argentina, 6PM Chile."}></FAQsItem>
        <FAQsItem title={"¿Qué gano por participar?"} text={"El equipo ganador obtendrá “El corazón del Barrio” un trofeo único en su tipo, esculpido a mano en material de bronce, por un artista mexicano. Para tener el corazón del barrio siempre presente, recordando que simboliza las skills, rimas y el barrio que late siempre en todo LATAM. Equipo Infinix NOTE 60 Pro. Paquete de Cod Points."}></FAQsItem>
        <FAQsItem title={"¿La final será presencial o en línea?"} text={"Habrá un evento presencial, pero también se podrá ver la transmisión por distintas plataformas online oficiales de la marca."}></FAQsItem>
        <FAQsItem title={"¿Qué sucede si tengo problemas técnicos durante una partida en la Gran Final?"} text={"Queremos que todos los jugadores compitan en las mismas condiciones y vivan la mejor experiencia posible. Por ello, durante la Gran Final se proporcionará a cada participante el mismo modelo de dispositivo Infinix, por lo que no será necesario (ni estará permitido) utilizar tu propio teléfono móvil. Asimismo, la conexión a internet será proporcionada y supervisada por el organizador para asegurar la mayor estabilidad posible. En caso de presentarse algún inconveniente técnico, el equipo del evento estará disponible para brindarte soporte de inmediato."}></FAQsItem>
        <FAQsItem title={"¿Aún tienes dudas?"} text={"No te preocupes, envíanos un mensaje por nuestro Instagram oficial https://www.instagram.com/callofdutymobilelatam"}></FAQsItem>
      </div>

      <div style={{paddingTop: "20px"}}>
        <div
          onClick={() => navigate("/")}
          style={{ maxHeight: "70px", display: "flex", justifyContent: "center" }}
          className="buttonLayoutInstructions"
        >
          <div>
          <img loading="lazy" src={buttonlayout} style={{ height: "64px" }} alt="Cerrar" />

          <p
            className="guild-font"
            style={{
              fontSize: "12px",
              color: "#EDCC00",
              position: "relative",
              top: "-43px",
              right: "-33px",
            }}
          >
            REGRESAR
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQsPage;
