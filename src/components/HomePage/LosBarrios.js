import "./LosBarrios.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import arrow from "../../assets/main/Icon_next-white.png";
import fondo from "../../assets/Fondo.png"
import actualFondo from "../../assets/main/IMG_Splash_RepresentaTuBarrio.png";
import imgband from "../../assets/main/IMG_Band.png";
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
    <section id="los-barrios" className="los-barrios-section">
      <img src={actualFondo}  alt="Splash Art" />
      <div style={{position: "absolute", height: "100%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <div style={{minHeight: "200px"}}></div>
      <div className="barrios-container">
        <div
          style={{
            borderRadius: "8px",
            paddingBottom: "20px",
            width: "100%",
            minHeight: "50vh",
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
              <div key={index} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
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
      </div>
      <div style={{position: "absolute", width: "100%", display: "flex", flexDirection: "row-reverse"}}> <img src={imgband} alt="Band" style={{position: "relative", width: "100%", height: "80px", top: "-7vh"}} /></div>
      
    </section>
  );
};

export default LosBarrios;
