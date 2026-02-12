import { useState } from "react";
import arrow from "../assets/registration/arrow.svg";
import "./tooltip.css";
import { useViewport } from "../context/ViewportContext";
function FAQsItem({title, text}) {
  const { isMobile } = useViewport();
  const [selected, setSelected] = useState(false)

  return (
    <>
      <div >
        
        <div onClick={() => setSelected(!selected)}  style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <p className="guild-regular-font" style={{fontSize: isMobile ? "16px" : "24px", paddingBottom: "8px"}}>{title}</p>
          <img 
            loading="lazy"
            src={arrow} 
            
            alt="tooltip"
            style={{
              height: "16px",
              marginTop: selected ? "2px" : "5px",
              transform: selected ? "rotate(-90deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
              overflow: "visible",
              marginRight: "5px"
            }}
          ></img>
        </div>
        {selected && (<p className="inter-font" style={{fontSize: isMobile ? "14px" : "16px", paddingBottom: "0px"}}>{text}</p>)}
      
    </div>
    </>
  );
}

export default FAQsItem;
