import React, { useState, useEffect } from "react";
import { Toolbar } from "primereact/toolbar";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useNavigate } from "react-router";
import brush from "../../assets/header/Brush_menu.png";
import logoBarrios from "../../assets/header/Compo header.png";
import fondoBarrios from "../../assets/header/Header_70.png";
import fondoMobile from "../../assets/navMenu/IMG_Background_Menu.png";

import logoNavMenu from "../../assets/navMenu/IMG_BRAND_BarriosLatinos-CODM.png";
import brushNavMenu from "../../assets/navMenu/IMG_BRUSH.png";
import buttonImage from "../../assets/navMenu/IMG_BUTTON_BACK.png";


import { useLocation } from "react-router-dom";
const Navbar = ({ onNavigate }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1300);

  const items = [
    { label: "BARRIOS LATINOS", command: () => handleScroll("patrocinadores") },
    { label: "LOS BARRIOS", command: () => handleScroll("los-barrios") },
    {
      label: "¿CÓMO PARTICIPAR?",
      command: () => handleScroll("como-participar"),
    },
    { label: "CALENDARIO", command: () => handleScroll("calendario") },
    { label: "UBICACIÓN", command: () => handleScroll("locacion") },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1300);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = (sectionId) => {
    if (location.pathname !== "/codmFrontend/") {
      navigate("/codmFrontend/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsDrawerOpen(false); // Close drawer after navigation
  };

  const handleNavigateAndClose = (path) => {
    navigate(path);
    setIsDrawerOpen(false);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const itemTemplate = (item) => {
    if (item.to) {
      return <Link to={item.to}></Link>;
    }
    return <span>{item.label}</span>;
  };

  const itemsToolbar = (items) => {
    return items.map((item, index) => (
      <Link key={index} onClick={item.command} className="navbar-item">
        {item.label}
      </Link>
    ));
  };

  return (
    <div className="navbar-container">
      <Toolbar
        style={{
          height: "100px",
          width: "100%",
          borderRadius: "0px",
          backgroundRepeat: "repeat-x",
          backgroundImage: `url(${fondoBarrios})`,
          backgroundSize: "auto 100%",
          border: "none",
        }}
        start={
          <img
            src={logoBarrios}
            style={{ height: "60px", paddingLeft: "25px" }}
            alt="Logo"
          />
        }
        center={!isMobile ? itemsToolbar(items) : null}
        end={
          isMobile ? (
            <button
              className="menu-toggle"
              onClick={toggleDrawer}
              aria-label="Toggle menu"
            >
              <div>
                <img
                src={brush}
                style={{ height: "50px", paddingLeft: "10px" }}
                alt="Logo"/>

              </div>
            </button>
          ) : (
            <p
              style={{ paddingRight: "1rem", textDecoration: "underline", cursor: "pointer", color: "white" }}
              onClick={() => navigate("/codmFrontend/registro")}
            >
              {"Registro"}
            </p>
          )
        }
        className="navbar-menu"
        itemTemplate={itemTemplate}
      />

      {/* Drawer for mobile */}
      {isMobile && (
        <>
          <div
            className={`drawer-overlay ${isDrawerOpen ? "active" : ""}`}
            onClick={toggleDrawer}
          />
          <div
            className={`drawer ${isDrawerOpen ? "open" : ""}`}
            style={{ backgroundImage: `url(${fondoMobile})`, backgroundSize: "auto 100%", }}
          >
            <nav className="drawer-nav">
              <img src={logoNavMenu} style={{width: "40%", minWidth: "150px", paddingBottom: "50px", alignSelf: "center"}} alt="Close" />
              {items.map((item, index) => (
                <button
                  key={index}
                  onClick={item.command}
                  className="drawer-item"

                >
                  <img src={brushNavMenu} style={{width: "250px", height: "50px", overflowY: "visible", objectFit: "cover"}} alt="Close" />
                  <p className="navMenu-text">{item.label}</p>
                </button>
              ))}
              <button
                className="close-button"
                onClick={toggleDrawer}
                aria-label="Close menu"
                style={{display: "flex", alignItems: "center", alignContent: "center", justifyContent: "center"}}
              >
                <img src={buttonImage} style={{width: "80px", paddingTop: "20px"}} alt="Close" />
                
              </button>
            </nav>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
