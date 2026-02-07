import "./MainHost.css";
import { useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import arrow from "../../assets/main/Icon_next.png";
import fondo from "../../assets/main/Poster_Losbarrios_MEX.png";
import actualFondo from "../../assets/main/IMG_Background_Los barrios.png";
import brushNavMenu from "../../assets/main/Brush_selector.png";
const MainHost = () => {
  const [currentOption, setCurrentOption] = useState(0);
  const carrousel = useRef(null);
  let tempArray = [];
  if (true) {
    for (let index = 0; index < 3; index++) {
      tempArray.push(fondo);
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
          style={{ height: "40px", width: "40px", transform: "rotate(180deg)", marginTop: "-15px" }}
          src={arrow}
          alt="Left Arrow"
        />
      </button>
    );
  };


  return (
    <section id="los-barrios" className="mainhost-section">
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
          <h2 className="guild-font">LOS BARRIOS</h2>
          <p className="inter-font" style={{ fontSize: "12px", width: "60%" }}>
            CADA IMAGEN TIENE LA INFORMACIÓN DEL MC + KOL + 5 INTEGRANTES DEL
            EQUIPO
          </p>
          <div
          className="heighModifier"
            style={{
              borderRadius: "8px",
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
                setCurrentOption(currentSlide);
              }}
              responsive={responsive}
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
                    alignContent: "center",
                  }}
                >
                  <img
                    src={url}
                    className="heighModifier"
                    alt={`Imagen ${index + 1}`}
                  />
                </div>
              ))}
            </Carousel>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10VW",
            }}
          >
            <div
              onClick={() => {
                carrousel.current.goToSlide(0);
              }}
              className="main-host-option-unselected"
            >
              <img
                  src={brushNavMenu}
                  style={{
                      height: "45px",
                    overflow: "visible",
                    objectFit: "cover",
                    opacity: currentOption === 0 ? 1 : 0
                  }}
                  alt="Close"
                />
              <p className="mainhost-text" style={{color: currentOption === 0 ? "white" : "black"}}>CHILE</p>
            </div>

                        <div
              onClick={() => {
                carrousel.current.goToSlide(1);
              }}
              className="main-host-option-unselected"
            >
              <img
                  src={brushNavMenu}
                  style={{
                    height: "45px",
                    overflow: "visible",
                    objectFit: "cover",
                    opacity: currentOption === 1 ? 1 : 0
                  }}
                  alt="Close"
                />
              <p className="mainhost-text" style={{color: currentOption === 1 ? "white" : "black"}}>MEX</p>
            </div>


                        <div
              onClick={() => {
                carrousel.current.goToSlide(2);
              }}
              className="main-host-option-unselected"
            >
              <img
                  src={brushNavMenu}
                  style={{
                    height: "45px",
                    overflow: "visible",
                    objectFit: "cover",
                    opacity: currentOption === 2 ? 1 : 0
                  }}
                  alt="Close"
                />
              <p className="mainhost-text" style={{color: currentOption === 2 ? "white" : "black"}}>PERU</p>
            </div>

          </div>
        </div>
      </div>
      <img src={actualFondo} style={{ height: "100%" }} alt="Splash Art" />
    </section>
  );
};

export default MainHost;
