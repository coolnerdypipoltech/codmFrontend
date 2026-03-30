import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./SplashScreen.css";

import { useViewport } from "../context/ViewportContext";

let introShown = false;

// phase: 'splash' | 'video' | 'done'
function SplashScreen({ children }) {
  const fondoMobil = "https://res.cloudinary.com/dqsdjfi92/image/upload/v1774655251/IMG_Background_Cargando_zi7lf3.webp";
   const loadingbg = "https://res.cloudinary.com/dqsdjfi92/image/upload/v1774655249/Brush_Loading_hzrbg0.webp";
   const videoMobile = "https://res.cloudinary.com/dqsdjfi92/video/upload/v1774570048/CODMOBILEBL9_16_iwiago.mp4";
   const videoDesktop = "https://res.cloudinary.com/dqsdjfi92/video/upload/v1774570048/CODMOBILEBL_16_9_vfrkft.mp4";
  const location = useLocation();
  const { isMobile } = useViewport();
  const videoRef = useRef(null);
  const videoFinal = isMobile ? videoMobile : videoDesktop;
  const isHome =
    location.pathname === "/" ||
    location.pathname === "/codmFrontend" ||
    location.pathname === "/codmFrontend/";

  const [phase, setPhase] = useState(isHome && !introShown ? "splash" : "done");
  const [splashFading, setSplashFading] = useState(false);
  const [muted, setMuted] = useState(true);

  // Splash phase: fade out at 3.5s, switch to video at 4s
  useEffect(() => {
    if (phase !== "splash") return;
    introShown = true;
    const fadeTimer = setTimeout(() => setSplashFading(true), 4500);
    const switchTimer = setTimeout(() => {
      setSplashFading(false);
      setPhase("video");
    }, 4000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(switchTimer);
    };
  }, [phase]);

  const handleVideoEnd = () => setPhase("done");
  const handleSkip = () => setPhase("done");
  const handleUnmute = () => {
    if (muted) {
      setMuted(false);
      if (videoRef.current) videoRef.current.muted = false;
    }
  };

  if (phase === "done") return children;

  return (
    <>
      {/* Preload video silently during splash so it's ready instantly */}
      {phase === "splash" && (
        <video
          src={videoFinal}
          preload="auto"
          muted
          playsInline
          style={{ display: "none" }}
        />
      )}

      {/* Splash overlay */}
      {phase === "splash" && (
        <div
          className={`splash-screen${splashFading ? " splash-fading" : ""}`}
          style={{
            backgroundImage: `url(${fondoMobil})`,
            backgroundPosition: "center",
            backgroundSize: "auto 100%",
          }}
        >
          <div
            style={{
              width: "100%",
              minHeight: "100px",
              position: "absolute",
              bottom: "100px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={loadingbg}
              alt="Loading"
              style={{ position: "absolute", width: "300px", bottom: "-19px" }}
            />
            <p
              className="guild-font loading-text"
              style={{
                position: "absolute",
                bottom: "20px",
                color: "white",
                fontSize: "20px",
              }}
            >
              CARGANDO
            </p>
          </div>
        </div>
      )}

      {/* Video intro overlay */}
      {phase === "video" && (
        <div className="video-intro" onClick={handleUnmute}>
          <video
            ref={videoRef}
            className="video-intro__player"
            autoPlay
            playsInline
            muted
            onEnded={handleVideoEnd}
          >
            <source src={videoFinal} type="video/mp4" />
          </video>
          {muted && (
            <div className="video-intro__unmute-hint">
             🎤 Pushale pa´que suene 🎤
            </div>
          )}
          <button className="video-intro__skip" onClick={(e) => { e.stopPropagation(); handleSkip(); }}>
            Saltar ▶
          </button>
        </div>
      )}
    </>
  );
}

export default SplashScreen;
