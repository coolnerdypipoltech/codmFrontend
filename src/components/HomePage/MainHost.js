import "./MainHost.css";
import { useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import arrow from "../../assets/main/Icon_next.png";
import fondo from "../../assets/main/Poster_Losbarrios_MEX.png";
import actualFondo1 from "../../assets/main/IMG_Background_Los barrios.png";
import actualFondoDesktop1 from "../../assets/desktop/Main/IMG_Background_Los barrios_WEB.png";
import brushNavMenu from "../../assets/main/Brush_selector.png";
import losbarriosTitle from "../../assets/main/Los barrios_web.png";
import posterAczino from "../../assets/desktop/Main/poster_aczino.png"
import { useViewport } from "../../context/ViewportContext";
const MainHost = () => {

  const { isMobile } = useViewport();

  const actualFondo = isMobile ? actualFondo1 : actualFondoDesktop1;
  const posters = isMobile ? fondo : posterAczino
  const carrousel = useRef(null);
  const options = ["CHILE", "MEX", "PE/ECU", "ARG", "COL", "COD:M"];
  const [currentOption, setCurrentOption] = useState(0);
  let tempArray = [];
  if (true) {
    for (let index = 0; index < 6; index++) {
      tempArray.push(posters);

    }
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

  const optionHelperLeft = () => {
    if (currentOption === -2) {
      return options[options.length - 3];
    }
    if (currentOption === -1) {
      return options[options.length - 2];
    }
    if (currentOption === 0) {
      return options[options.length - 1];
    } else {
      return options[currentOption - 1];
    }
  };

  const optionHelperMiddle = () => {
    if (currentOption === -1) {
      return options[options.length - 1];
    }
    if (currentOption === -2) {
      return options[options.length - 2];
    }
    if (currentOption === options.length ) {
      return options[0];
    }

    return options[currentOption];
  };

  const optionHelperRight = () => {
    if (currentOption === -2) {
      return options[options.length - 1];
    }
    if (currentOption === options.length ) {
      return options[1];
    }

    if (currentOption === options.length - 1) {
      return options[0];
    } else {
      return options[currentOption + 1];
    }
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
        style={{ left: "2%" }}
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
        style={{ right: "2%" }}
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
              width: "100%",
            }}
          >
            <Carousel
              ref={carrousel}
              afterChange={function (previousSlide, _ref) {
                var currentSlide = _ref.currentSlide;
                // eslint-disable-next-line no-unused-expressions
                _ref.onMove;
                setCurrentOption(currentSlide - 2);
              }}
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

          <div
            id="participate"
            className="mainhost-words"
          >
            <div
              onClick={() => {
                carrousel.current.goToSlide(currentOption + 1);
              }}
              className="main-host-option-unselected"
            >
              <img
                loading="lazy"
                src={brushNavMenu}
                style={{
                  overflow: "visible",
                  objectFit: "cover",
                  opacity: 0,
                }}
                alt="Close"
              />
              <p className="mainhost-text" style={{ color: "black" }}>
                {optionHelperLeft()}
              </p>
            </div>

            <div
              onClick={() => {
                carrousel.current.goToSlide(currentOption + 2);
              }}
              className="main-host-option-unselected"
            >
              <img
                loading="lazy"
                src={brushNavMenu}
                style={{
                  overflow: "visible",
                  objectFit: "cover",
                  opacity: 1,
                }}
                alt="Close"
              />
              <p className="mainhost-text" style={{ color: "white" }}>
                {optionHelperMiddle()}
              </p>
            </div>

            <div
              onClick={() => {
                carrousel.current.goToSlide(currentOption + 3);
              }}
              className="main-host-option-unselected"
            >
              <img
                loading="lazy"
                src={brushNavMenu}
                style={{
                  overflow: "visible",
                  objectFit: "cover",
                  opacity: 0,
                }}
                alt="Close"
              />
              <p className="mainhost-text" style={{ color: "black" }}>
                {optionHelperRight()}
              </p>
            </div>
          </div>
        </div>
      </div>
      <img loading="lazy" src={actualFondo} className="mainhost-background" alt="Splash Art" />
    </section>
  );
};

export default MainHost;
