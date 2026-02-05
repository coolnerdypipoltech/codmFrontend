import React, { useState, useEffect } from "react";
import { Toolbar } from "primereact/toolbar";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useNavigate } from "react-router";
import logoBarrios from "../../assets/logoBarrios.png";
import fondoBarrios from "../../assets/Fondo.png";
import fondoMobile from "../../assets/Fondo.png";

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
          borderRadius: "0px",
          backgroundImage: `url(${fondoBarrios})`,
          border: "none",
        }}
        start={
          <img
            src={logoBarrios}
            style={{ height: "50px", paddingLeft: "25px" }}
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
              <span className="hamburger-icon">☰</span>
            </button>
          ) : (
            <Link
              style={{ paddingRight: "1rem" }}
              onClick={() => navigate("/codmFrontend/registro")}
            >
              {"Registro"}
            </Link>
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
            style={{ backgroundImage: `url(${fondoMobile})` }}
          >
            <nav className="drawer-nav">
              {items.map((item, index) => (
                <button
                  key={index}
                  onClick={item.command}
                  className="drawer-item"
                >
                  {item.label}
                </button>
              ))}
              <button
                className="close-button"
                onClick={toggleDrawer}
                aria-label="Close menu"
              >
                ×
              </button>
            </nav>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
