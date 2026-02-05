import React from "react";
import arrow from "../../assets/registration/arrow.svg";

const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <div style={{height: "20px", width: "20px"}} onClick={() => onClick()}>
      <img style={{height: "20px", width: "20px"}} src={arrow} alt="Left Arrow" />
    </div>
  );
};

export default CustomLeftArrow;
