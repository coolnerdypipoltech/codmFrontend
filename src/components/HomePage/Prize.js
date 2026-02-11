import React from 'react';
import './Prize.css';
import imgband from "../../assets/main/IMG_Band.png";
import video from "../../assets/videoPrize.mp4";
const Prize = () => {
  return (
    <section id="premio" className="premio-section">
      <div style={{position: "absolute", width: "100%", display: "flex", flexDirection: "row-reverse", zIndex: 2}}> <img loading="lazy" src={imgband} alt="Band" className="image-band2" /></div>
      <div className="premio-container">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
            
          }}
        >
          <source src={video} type="video/mp4" />
        </video>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          zIndex: 1
        }}></div>
        <div style={{position: "relative", zIndex: 2}}>
          <p className='title-prize'>LA GLORIA DEL BARRIO</p>
          <p className='text-prize'>*Descripción sobre el corazón del barrio.</p>
        </div>
      </div>
      
      
    </section>
  );
};

export default Prize;
