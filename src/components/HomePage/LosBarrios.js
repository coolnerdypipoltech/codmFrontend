import "./LosBarrios.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import arrow from "../../assets/main/Icon_next-white.png";
import actualFondo from "../../assets/main/IMG_Splash_RepresentaTuBarrio1.png";
import actualFondo1 from "../../assets/main/IMG_Splash_RepresentaTuBarrio.png";
import actualFondoDesktop from "../../assets/desktop/Main/IMG_Splash_RepresentaTuBarrio_web.png";
import actualFondoDesktop1 from "../../assets/desktop/Main/Banner_desktop.webp";
import imgband1 from "../../assets/main/IMG_Band.png";
import imgband2 from "../../assets/desktop/Main/IMG_Band_web.png";

import { useViewport } from "../../context/ViewportContext";

const LosBarrios = () => {
  const { isMobile } = useViewport();

  const imgband = isMobile ? imgband1 : imgband2; 

  let tempArray = [];
  if (!isMobile) {
    tempArray.push(actualFondoDesktop);
    tempArray.push(actualFondoDesktop1);
    tempArray.push(actualFondoDesktop);
  }else{
    tempArray.push(actualFondo);
    tempArray.push(actualFondo1);
    tempArray.push(actualFondo);
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
        style={{ left: "7%" }}
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
        style={{ right: "7%" }}
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
    <section id="los-barrios" className="los-barrios-section">
      <div className="barrios-container">
        <Carousel
          responsive={responsive}
          infinite={true}
          showDots={true}
          arrows
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
                }}
              />
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
