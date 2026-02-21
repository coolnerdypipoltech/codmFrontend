import "./LosBarrios.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import arrow from "../../assets/main/Icon_next-white.webp";
import actualFondo from "../../assets/main/IMG_Splash_RepresentaTuBarrio1.webp";
import actualFondo1 from "../../assets/main/IMG_Splash_RepresentaTuBarrio.webp";
import actualFondo2 from "../../assets/main/1.webp";
import actualFondo3 from "../../assets/main/2.webp";
import actualFondo4 from "../../assets/main/3.webp";
import actualFondo5 from "../../assets/main/4.webp";
import actualFondoDesktop from "../../assets/desktop/Main/IMG_Splash_RepresentaTuBarrio_web.webp";
import actualFondoDesktop1 from "../../assets/desktop/Main/Banner_desktop.webp";
import actualFondoDesktop2 from "../../assets/desktop/Main/QUALI.webp";
import imgband1 from "../../assets/main/IMG_Band.png";
import imgband2 from "../../assets/desktop/Main/IMG_Band_web.webp";

import { useViewport } from "../../context/ViewportContext";
import { useEffect, useRef, useState } from "react";

const LosBarrios = () => {
  const { isMobile } = useViewport();
  const resumeAutoplayTimeoutRef = useRef(null);
  const [isAutoPlayEnabled, setIsAutoPlayEnabled] = useState(true);
  const imgband = isMobile ? imgband1 : imgband2;

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

  let tempArray = [];
  if (!isMobile) {
    tempArray.push(actualFondoDesktop1);
    tempArray.push(actualFondoDesktop);
    tempArray.push(actualFondoDesktop2);
  } else {
    tempArray.push(actualFondo1);
    tempArray.push(actualFondo);
    tempArray.push(actualFondo2);
    tempArray.push(actualFondo3);
    tempArray.push(actualFondo4);
    tempArray.push(actualFondo5);
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
        onClick={onClick}
        style={{ left: isMobile ? "10px" : "60px", maxHeight: "0px" }}
      >
        <img
          onClick={onClick}
          onMouseEnter={pauseAutoplay}
          onMouseLeave={resumeAutoplay}
          onFocus={pauseAutoplay}
          onBlur={resumeAutoplay}
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

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType },
    } = rest;
    // onMove means if dragging or swiping in progress.
    return (
      <button
        className="react-multiple-carousel__arrow"
        onClick={onClick}
        style={{ right: isMobile ? "10px" : "60px", maxHeight: "0px" }}
      >
        <img
          onClick={onClick}
          onMouseEnter={pauseAutoplay}
          onMouseLeave={resumeAutoplay}
          onFocus={pauseAutoplay}
          onBlur={resumeAutoplay}
          loading="lazy"
          style={{
            cursor: "pointer",
            height: isMobile ? "40px" : "70px",
            width: isMobile ? "40px" : "70px",
            transform: "rotate(180deg)",
            position: "relative",
            bottom: isMobile ? "40px" : "60px",
          }}
          src={arrow}
          alt="Left Arrow"
        />
      </button>
    );
  };

  return (
    <section id="los-barrios" className="los-barrios-section">
      <div className="barrios-container">
        <Carousel
          responsive={responsive}
          infinite={true}
          showDots={true}
          arrows
          autoPlay={isMobile ? false : isAutoPlayEnabled}
          autoPlaySpeed={3000}
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
                width: "100%",
                height: "100%",
              }}
            >
              <img
                loading="lazy"
                src={url}
                alt={`Imagen ${index + 1}`}
                style={{
                  minWidth: "100%",
                  height: "auto",
                  objectFit: "fill",
                  maxWidth: "400px",
                  paddingBottom: isMobile ? "20px" : "0px",
                }}
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

      <div
        style={{
          position: "absolute",
          width: "100%",
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        {" "}
        <img
          loading="lazy"
          src={imgband}
          id="MainHost2"
          alt="Band"
          className="image-band1"
        />
      </div>
    </section>
  );
};

export default LosBarrios;
