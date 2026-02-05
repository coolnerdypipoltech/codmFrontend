import "./MainHost.css";
import { useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import arrow from "../../assets/registration/arrow.svg";
import fondo from "../../assets/Fondo.png";
const MainHost = () => {
  const [currentOption, setCurrentOption] = useState(0);
  const carrousel = useRef(null)
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
        style={{ left: "4%" }}
        onClick={() => onClick()}
      >
        <img
          style={{ height: "20px", width: "20px" }}
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
        style={{ right: "4%" }}
        onClick={() => onClick()}
      >
        <img
          style={{ height: "20px", width: "20px" }}
          src={arrow}
          alt="Left Arrow"
        />
      </button>
    );
  };

  console.log(currentOption);

  return (
    <section id="los-barrios" className="los-barrios-section">
      <h2>Los Barrios</h2>
      <div className="barrios-container">
        <div
          style={{
            maxHeight: "225px",
            height: "225px",
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
              <div key={index}>
                <img
                  src={url}
                  alt={`Imagen ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "225px",
                    objectFit: "fill",
                    maxWidth: "400px",
                  }}
                />
              </div>
            ))}
          </Carousel>
        </div>

        <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          <div
            onClick={() => {
              carrousel.current.goToSlide(0);
            }}
            className={
              currentOption === 0
                ? "main-host-option-selected"
                : "main-host-option-unselected"
            }
          >
            <p>opcion 1</p>
          </div>

          <div
            onClick={() => {
              carrousel.current.goToSlide(1);
            }}
            className={
              currentOption === 1
                ? "main-host-option-selected"
                : "main-host-option-unselected"
            }
          >
            <p>opcion 2</p>
          </div>

          <div
            onClick={() => {
              carrousel.current.goToSlide(2);
            }}
            className={
              currentOption === 2
                ? "main-host-option-selected"
                : "main-host-option-unselected"
            }
          >
            <p>opcion 3</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHost;
