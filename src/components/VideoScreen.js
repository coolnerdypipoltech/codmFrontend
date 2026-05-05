import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./VideoScreen.css";
import videoMobile from "../assets/COD_MOBILE.mp4"
import videoDesktop from "../assets/COD_DESKTOP.mp4"
import thumbnailImage from "../assets/main/thumbnail.png"
import thumbnailTablet from "../assets/main/thumbnail2.png"
import { useViewport } from "../context/ViewportContext";

function VideoScreen({ children }) {
  const { isMobile, isTablet } = useViewport();
  const videoRef = useRef(null);
  const [thumbnailUp, setThumbnailUp] = useState(true);

  const videoFinal = isMobile ? videoMobile : videoDesktop;

  


  return (
    <>
    <div style={{minHeight: "120px", width: "100%", height: "120px"}}></div>
      <div className="video-screen" >
        
          {isMobile ? (<>
          {thumbnailUp ? (<img src={thumbnailImage} alt="Thumbnail" onClick={ () => {setThumbnailUp(false)}} />) : (<video
            ref={videoRef}
            className="video-screen__player"
            autoPlay
            loop
            controls={true}
            playsInline
            style={{width: isMobile ? "100%" : "auto", height: isMobile ? "auto" : "100%", minHeight: "100vh", minWidth: "100%"}}
          >
            <source src={videoFinal} type="video/mp4" />
          </video>)}
          
          </>) : (<>
          {isTablet ? (<>
          {thumbnailUp ? (<img src={thumbnailTablet} alt="Thumbnail" onClick={ () => {setThumbnailUp(false)}} />) : (<video
            ref={videoRef}
            className="video-screen__player"
            autoPlay
            loop
            controls={true}
            playsInline
            style={{width: isTablet ? "100%" : "auto", height: isTablet ? "auto" : "100%", minHeight: "100vh", minWidth: "100%"}}
          >
            <source src={videoFinal} type="video/mp4" />
          </video>)}
          
          </>) : (<video
            ref={videoRef}
            className="video-screen__player"
            autoPlay
            muted
            loop
            controls={true}
            playsInline
            style={{width: isMobile ? "100%" : "auto", height: isMobile ? "auto" : "100%", minHeight: "100vh", minWidth: "100%"}}
          >
            <source src={videoFinal} type="video/mp4" />
          </video>)}
          
          </>)}

        </div>
    </>
  );
}

export default VideoScreen;
