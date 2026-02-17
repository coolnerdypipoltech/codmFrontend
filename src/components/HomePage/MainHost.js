import "./MainHost.css";
import { useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import arrow from "../../assets/main/Icon_next.png";
import actualFondo1 from "../../assets/main/IMG_Background_Los barrios.png";
import actualFondoDesktop1 from "../../assets/desktop/Main/IMG_Background_Los barrios_WEB.png";
import losbarriosTitle from "../../assets/main/Los barrios_web.png";

import postermobil1 from "../../assets/posters/1_Poster MX.png";
import postermobil2 from "../../assets/posters/2_Poster COL.png";
import postermobil3 from "../../assets/posters/3_Poster ARG.png";
import postermobil4 from "../../assets/posters/4_Poster CL.png";
import postermobil5 from "../../assets/posters/5_Poster PE_EC.png";
import postermobil6 from "../../assets/posters/6_host_and-main.png";
import imgband1 from "../../assets/main/IMG_Band.png";
import imgband2 from "../../assets/desktop/Main/IMG_Band_web.png";

import posterdesktop1 from "../../assets/desktop/PostersPais/1_Poster MX.png";
import posterdesktop2 from "../../assets/desktop/PostersPais/2_Poster COL.png";
import posterdesktop3 from "../../assets/desktop/PostersPais/3_Poster ARG.png";
import posterdesktop4 from "../../assets/desktop/PostersPais/4_Poster CL.png";
import posterdesktop5 from "../../assets/desktop/PostersPais/5_Poster PE_EC.png";
import posterdesktop6 from "../../assets/desktop/PostersPais/6_host_and-main.png";
import { useViewport } from "../../context/ViewportContext";
const MainHost = () => {

  const { isMobile } = useViewport();
  const imgband = isMobile ? imgband1 : imgband2;
  const actualFondo = isMobile ? actualFondo1 : actualFondoDesktop1;
  const carrousel = useRef(null);
  let tempArray = [];
  
  if(isMobile){
    tempArray.push(postermobil1)
    tempArray.push(postermobil2)
    tempArray.push(postermobil3);
    tempArray.push(postermobil4);
    tempArray.push(postermobil5);
    tempArray.push(postermobil6);
  }else{
    tempArray.push(posterdesktop1)
    tempArray.push(posterdesktop2)
    tempArray.push(posterdesktop3);
    tempArray.push(posterdesktop4);
    tempArray.push(posterdesktop5);
    tempArray.push(posterdesktop6);
  }
  


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };


  const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <button
        className="react-multiple-carousel__arrow"
        style={{ left: isMobile ? "0%" : "2%" }}
        onClick={() => onClick()}
      >
        <img
          loading="lazy"
          style={{ height: "40px", width: "40px" }}
          src={arrow}
          alt="Left Arrow"
        />
      </button>
    );
  };

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <button
        className="react-multiple-carousel__arrow"
        style={{ right: isMobile ? "0%" : "2%" }}
        onClick={() => onClick()}
      >
        <img
          loading="lazy"
          style={{
            height: "40px",
            width: "40px",
            transform: "rotate(180deg)",
            marginTop: "-15px",
          }}
          src={arrow}
          alt="Left Arrow"
        />
      </button>
    );
  };

  return (
    <section  className="mainhost-section">
      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          display: "flex",
          paddingTop: "5%",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <div className="mainhost-container">
          <><img src={losbarriosTitle} style={{height: "15vw", maxHeight: "100px"}} alt="Los Barrios" /></>
          <div
            className="heighModifier"
            style={{
              paddingBottom: "20px",
              width: "90%",
            }}
          >
            <Carousel
              ref={carrousel}
              responsive={responsive}
              arrows
              infinite
              customLeftArrow={<CustomLeftArrow />}
              customRightArrow={<CustomRightArrow />}
              itemClass="carousel-item-padding-40-px"
            >
              {tempArray.map((url, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                  }}
                >
                  <img
                    loading="lazy"
                    src={url}
                    className="heighModifier"
                    alt={`Imagen ${index + 1}`}
                  />
                </div>
              ))}
            </Carousel>
          </div>

        </div>
      </div>
      <img loading="lazy" src={actualFondo} className="mainhost-background" alt="Splash Art" />
      <div  style={{position: "absolute", width: "100%", display: "flex", flexDirection: "row-reverse"}}> <img loading="lazy" id='participate2' alt="Band" className='participate-handler' /></div>
    </section>
  );
};

export default MainHost;
