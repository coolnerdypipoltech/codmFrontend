import React, { useState, useEffect } from "react";
import { Toolbar } from "primereact/toolbar";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useNavigate } from "react-router";
import brush from "../../assets/header/Brush_menu.png";
import logoBarrios from "../../assets/navMenu/IMG_BRAND_BarriosLatinos-CODM.png";
import fondoBarriosMobil from "../../assets/header/Header_70.png";
import fondoMobile1 from "../../assets/navMenu/IMG_Background_Menu.png";
import fondoMobile2 from "../../assets/desktop/Header/IMG_Background_Menu_web.png";
import fondoBarriosDesktop from "../../assets/desktop/Header/Header_Desktop120.png";
import logoNavMenu from "../../assets/logoBarrios.png";
import brushNavMenu from "../../assets/navMenu/IMG_BRUSH.png";
import buttonImage from "../../assets/navMenu/IMG_BUTTON_BACK.png";
import infinixLogo from "../../assets/partners/Logo_Infinix_Black.png";
import infinixLogoWhite from "../../assets/partners/INFINIX.png";
import brushBackground from "../../assets/main/IMG_BRUSH.png";
import { useViewport } from "../../context/ViewportContext";
import { useLocation } from "react-router-dom";
const Navbar = () => {

  const { isMobile } = useViewport();
  const fondoBarrios = isMobile ? fondoBarriosMobil : fondoBarriosDesktop;
  const fondoMobile = isMobile ? fondoMobile1 : fondoMobile2;
  const navigate = useNavigate();
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [forceReload, setForceReload] = useState(0);
  const [isMobileCalc, setIsMobileCalc] = useState(window.innerWidth < 1300);
  const items = [
    {
      label: "BARRIOS LATINOS",
      command: () => handleScroll("barrios-latinos"),
      width: "275px",
      height: "50px",
    },
    {
      label: "LOS BARRIOS",
      command: () => handleScroll("MainHost2"),
      width: "200px",
      height: "50px",
    },
    {
      label: "¿CÓMO PARTICIPAR?",
      command: () => handleScroll("participate"),
      width: "275px",
      height: "50px",
    },
    {
      label: "CALENDARIO",
      command: () => handleScroll("calendario"),
      width: "230px",
      height: "50px",
    },
    {
      label: "UBICACIÓN",
      command: () => handleScroll("patrocinadores"),
      width: "200px",
      height: "50px",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobileCalc(window.innerWidth < 1300);
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
          setIsDrawerOpen(false);
          setForceReload(forceReload + 1);
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

  const handleGoHome = () => {
    navigate("/codmFrontend/");
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }

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
        <div>
          {item.label}</div>
      </Link>
    ));
  };

  return (
    <div key={forceReload} className="navbar-container">
      <Toolbar
        style={{
          height: "110px",
          width: "100%",
          borderRadius: "0px",
          backgroundRepeat: "repeat-x",
          backgroundImage: `url(${fondoBarrios})`,
          backgroundSize: "100% 100%",
          border: "none",
        }}
        start={
          <img
            loading="lazy"
            src={logoBarrios}
            style={{ height: "70px", paddingLeft: "10px", cursor: "pointer", paddingTop: "10px" }}
            alt="Logo"
            onClick={handleGoHome}
          />
        }
        center={
          !isMobileCalc ? (
            itemsToolbar(items)
          ) : (
            <div style={{width: "100%", position: "absolute", left: "10px", height: "0px", display: "flex", justifyContent: "center"}} className="infinixContainerLogo" >
              <img
                loading="lazy"
                src={infinixLogo}
                style={{
                  height: "auto",
                  width: "50%",
                  maxWidth: "285px",
                  marginTop: "15px",
                  alignSelf: "center",
                  cursor: "pointer",
                }}
                alt="Close"
              />
            </div>
          )
        }
        end={
          isMobileCalc ? (
            <button
              className="menu-toggle"
              onClick={toggleDrawer}
              aria-label="Toggle menu"
              style={{paddingTop: "10px"}}
            >
              <div>
                <img
                  loading="lazy"
                  src={brush}
                  style={{ height: "45px", paddingLeft: "10px" }}
                  alt="Logo"
                />
              </div>
            </button>
          ) : (
            <></>
          )
        }
        className="navbar-menu"
        itemTemplate={itemTemplate}
      />

      {!isMobileCalc && ( 
        <div style={{width: "100%", height: "45px", backgroundColor: "#F201B7", display: "flex", justifyContent: "center", alignItems: "center", position: "relative", top: "-10px"}}  >
          <img src={infinixLogoWhite} alt="infinixLogo" style={{height: "45px"}}></img>
        </div>
      )}

      {/* Drawer for mobile */}
      {isMobileCalc && (
        <>
          <div
            className={`drawer-overlay ${isDrawerOpen ? "active" : ""}`}
            onClick={toggleDrawer}
          />
          <div
            className={`drawer ${isDrawerOpen ? "open" : ""}`}
            style={{
              backgroundImage: `url(${fondoMobile})`,
              
            }}
          >
            <div className="drawer-nav">
              <img
                loading="lazy"
                src={logoNavMenu}
                style={{
                  width: "40%",
                  minWidth: "150px",
                  paddingBottom: "50px",
                  alignSelf: "center",
                  cursor: "pointer",
                }}
                alt="Close"
              />

              {items.map((item, index) => (
                <div key={index} onClick={item.command} className="drawer-item">
                  <img
                    loading="lazy"
                    src={brushNavMenu}
                    style={{
                      width: item.width,
                      height: item.height,
                      overflow: "visible",
                      objectFit: "cover",
                    }}
                    alt="Close"
                  />
                  <p
                    style={{
                      width: item.width,
                      height: item.height,
                      overflow: "visible",
                      objectFit: "cover",
                    }}
                    className="navMenu-text"
                  >
                    {item.label}
                  </p>
                </div>
              ))}
              <button
                className="close-button"
                onClick={toggleDrawer}
                aria-label="Close menu"
                style={{
                  display: "flex",
                  alignItems: "center",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  loading="lazy"
                  src={buttonImage}
                  style={{ width: "60px", paddingTop: "20px" }}
                  alt="Close"
                />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
