import "./LosBarrios.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import arrow from "../../assets/registration/arrow.svg";
import fondo from "../../assets/Fondo.png"
const LosBarrios = () => {
  let tempArray = [];
  if (true) {
    for (let index = 0; index < 3; index++) {
      tempArray.push(
        fondo,
      );
    }
  }
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
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

  return (
    <section id="los-barrios" className="los-barrios-section">
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
            responsive={responsive}
            infinite={true}
            showDots={true}
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
      </div>
    </section>
  );
};

export default LosBarrios;
