import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./VideoScreen.css";
import videoMobile from "../assets/CODMOBILEBL9_16.mp4"
import videoDesktop from "../assets/CODMOBILEBL_16_9.mp4"
import { useViewport } from "../context/ViewportContext";

function VideoScreen({ children }) {
  const { isMobile } = useViewport();
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const videoFinal = isMobile ? videoMobile : videoDesktop;
  const handleUnmute = () => {
    if (muted) {
      setMuted(false);
      if (videoRef.current) videoRef.current.muted = false;
    }
  };

  return (
    <>
      <div className="video-screen" onClick={handleUnmute} >
          <video
            ref={videoRef}
            className="video-screen__player"
            autoPlay
            playsInline
            muted
            loop

          >
            <source src={videoFinal} type="video/mp4" />
          </video>
       {muted && (
            <div className="video-screen__unmute-hint">
             🎤 Pushale pa´que suene 🎤
            </div>
          )}

        </div>
    </>
  );
}

export default VideoScreen;
