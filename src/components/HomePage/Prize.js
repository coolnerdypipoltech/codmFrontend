import React from "react";
import "./Prize.css";

import video from "../../assets/videoPrize.mp4";
import imgTitle from "../../assets/main/La gloriadelbarrio.webp";
import imgband1 from "../../assets/main/IMG_Band.png";
import imgband2 from "../../assets/desktop/Main/IMG_Band_web.webp";

import { useViewport } from "../../context/ViewportContext";

const Prize = () => {
  const { isMobile } = useViewport();
  const imgband = isMobile ? imgband1 : imgband2;

  return (
    <section id="premio" className="premio-section">
      <div
        style={{
          position: "absolute",
          width: "100%",
          display: "flex",
          flexDirection: "row-reverse",
          zIndex: 2,
        }}
      >
        {" "}
        <img loading="lazy" src={imgband} alt="Band" className="image-band2" />
      </div>
      <div className="premio-container">
        <iframe
          width="100%"
          height="100%"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&playsinline=1&si=HN0nwcj4eForiBJO"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#1d1d1dc7",
            zIndex: 1,
          }}
        ></div>
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            padding: "0 20px",
          }}
        >
          <img
            src={imgTitle}
            alt="La Gloria del Barrio"
            className="title-prize"
          />
          <p className="text-prize">
            Vive la calle con Barrios Latinos, el torneo de{" "}
            <strong>Call of Duty: Mobile</strong>{" "}
          </p>
          <p className="text-prize">
            que honra el talento, el orgullo y la identidad de nuestra región.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Prize;
