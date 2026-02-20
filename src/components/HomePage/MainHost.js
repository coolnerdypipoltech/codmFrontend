import "./MainHost.css";
import { useEffect, useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import arrow from "../../assets/main/Icon_next.webp";
import actualFondo1 from "../../assets/main/IMG_Background_Los barrios.webp";
import actualFondoDesktop1 from "../../assets/desktop/Main/IMG_Background_Los barrios_WEB.webp";
import losbarriosTitle from "../../assets/main/Los barrios_web.webp";

import postermobil1 from "../../assets/posters/1_Poster MX.webp";
import postermobil2 from "../../assets/posters/2_Poster COL.webp";
import postermobil3 from "../../assets/posters/3_Poster ARG.webp";
import postermobil4 from "../../assets/posters/4_Poster CL.webp";
import postermobil5 from "../../assets/posters/5_Poster PE_EC.webp";
import postermobil6 from "../../assets/posters/6_host_and-main.webp";
import postermobil7 from "../../assets/posters/7_HostMov.webp";

import posterdesktop1 from "../../assets/desktop/PostersPais/1_Poster MX.webp";
import posterdesktop2 from "../../assets/desktop/PostersPais/2_Poster COL.webp";
import posterdesktop3 from "../../assets/desktop/PostersPais/3_Poster ARG.webp";
import posterdesktop4 from "../../assets/desktop/PostersPais/4_Poster CL.webp";
import posterdesktop5 from "../../assets/desktop/PostersPais/5_Poster PE_EC.webp";
import posterdesktop6 from "../../assets/desktop/PostersPais/6_host_and-main.webp";
import posterdesktop7 from "../../assets/desktop/PostersPais/7_Caster.webp";

import { useViewport } from "../../context/ViewportContext";
const MainHost = () => {
  const { isMobile } = useViewport();
  const actualFondo = isMobile ? actualFondo1 : actualFondoDesktop1;
  const carrousel = useRef(null);
  const resumeAutoplayTimeoutRef = useRef(null);
  const [isAutoPlayEnabled, setIsAutoPlayEnabled] = useState(true);
  let tempArray = [];

  useEffect(() => {
    return () => {
      if (resumeAutoplayTimeoutRef.current) {
        clearTimeout(resumeAutoplayTimeoutRef.current);
      }
    };
  }, []);

  const pauseAutoplay = () => {
    setIsAutoPlayEnabled(false);
  };

  const resumeAutoplay = () => {
    setIsAutoPlayEnabled(true);
  };

  if (isMobile) {
    tempArray.push(postermobil1);
    tempArray.push(postermobil2);
    tempArray.push(postermobil3);
    tempArray.push(postermobil4);
    tempArray.push(postermobil5);
    tempArray.push(postermobil6);
    tempArray.push(postermobil7);
  } else {
    tempArray.push(posterdesktop1);
    tempArray.push(posterdesktop2);
    tempArray.push(posterdesktop3);
    tempArray.push(posterdesktop4);
    tempArray.push(posterdesktop5);
    tempArray.push(posterdesktop6);
    tempArray.push(posterdesktop7);
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

  const CustomLeftArrow = ({ onClick }) => {
    return (
      <button
        className="react-multiple-carousel__arrow"
        style={{ left: isMobile ? "5px" : "2%" }}
        onMouseEnter={pauseAutoplay}
        onMouseLeave={resumeAutoplay}
        onFocus={pauseAutoplay}
        onBlur={resumeAutoplay}
        onClick={onClick}
      >
        <img
          loading="lazy"
          style={{
            height: isMobile ? "40px" : "70px",
            width: isMobile ? "40px" : "70px",
            position: "relative",
            bottom: isMobile ? "40px" : "40px",
            cursor: "pointer",
          }}
          src={arrow}
          alt="Left Arrow"
        />
      </button>
    );
  };

  const CustomRightArrow = ({ onClick }) => {
    return (
      <button
        className="react-multiple-carousel__arrow"
        style={{ right: isMobile ? "5px" : "2%" }}
        onMouseEnter={pauseAutoplay}
        onMouseLeave={resumeAutoplay}
        onFocus={pauseAutoplay}
        onBlur={resumeAutoplay}
        onClick={onClick}
      >
        <img
          loading="lazy"
          style={{
            height: isMobile ? "40px" : "70px",
            width: isMobile ? "40px" : "70px",
            transform: "rotate(180deg)",
            position: "relative",
            bottom: isMobile ? "40px" : "60px",
            cursor: "pointer",
          }}
          src={arrow}
          alt="Left Arrow"
        />
      </button>
    );
  };

  return (
    <section className="mainhost-section">
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
          <>
            <img
              src={losbarriosTitle}
              style={{ height: "15vw", maxHeight: "100px" }}
              alt="Los Barrios"
            />
          </>
          <div
            className="heighModifier"
            style={{
              paddingBottom: "20px",
              width: "100%",
            }}
          >
            <Carousel
              ref={carrousel}
              responsive={responsive}
              arrows
              autoPlay={isAutoPlayEnabled}
              autoPlaySpeed={3000}
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
                  <div
                    style={{
                      height: "100%",
                      width: "100%",
                      backgroundColor: "red",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      opacity: 0,
                    }}
                  ></div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        src={actualFondo}
        className="mainhost-background"
        alt="Splash Art"
      />
      <div
        style={{
          position: "absolute",
          width: "100%",
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        {" "}
        <div loading="lazy" id="participate2" className="participate-handler" />
      </div>
    </section>
  );
};

export default MainHost;
