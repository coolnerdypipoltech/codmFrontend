import { useState } from "react";
import brushNavMenu from "../assets/desktop/Header/Brush_L.webp";
function NavBarItem({ text, command, index }) {
  const [hover, setHover] = useState(false);
  let width = 180;
  let top = "26px";
  if (text === "BARRIOS LATINOS") {
    width = 220;
    top = "26px";
  }
  if (text === "¿CÓMO PARTICIPAR?") {
    width = 250;
     top = "26px";
  }
  return (
    <>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        key={index}
        onClick={command}
        className="navbar-item"
      >
        <div
          style={{
            width: width - 20 + "px",
            minHeight: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "visible",
            position: "relative",
            bottom: "5px"
          }}
        >
          <img
            loading="lazy"
            alt=""
            className="navbar-Image"
            src={brushNavMenu}
            style={{ opacity: hover ? 1 : 0, width: width, top: top, overflow: "visible", height: "34px"}}
          />
          <div
            style={{
              position: "absolute",
              color: hover ? "white" : "black",
              marginTop: "10px",
              fontSize: "14px"
            }}
          >
            {text}
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBarItem;
