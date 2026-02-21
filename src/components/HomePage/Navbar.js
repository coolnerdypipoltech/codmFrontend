import React, { useState, useEffect } from "react";
import { Toolbar } from "primereact/toolbar";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useNavigate } from "react-router";
import brush from "../../assets/header/Brush_menu.webp";
import logoBarrios from "../../assets/logoBarrios.png";
import fondoBarriosMobil from "../../assets/header/Header_70.webp";
import fondoMobile1 from "../../assets/navMenu/IMG_Background_Menu.webp";
import fondoMobile2 from "../../assets/desktop/Header/IMG_Background_Menu_web.webp";
import fondoBarriosDesktop from "../../assets/desktop/Header/Header_Desktop120.webp";
import logoNavMenu from "../../assets/logoBarrios.png";
import brushNavMenu from "../../assets/navMenu/IMG_BRUSH.webp";
import buttonImage from "../../assets/navMenu/IMG_BUTTON_BACK.webp";
import infinixLogoWhite from "../../assets/partners/INFINIX.webp";
import { useViewport } from "../../context/ViewportContext";
import { useLocation } from "react-router-dom";
import NavBarItem from "../NavBarItem"; 
const Navbar = () => {
  const { isMobile } = useViewport();
  const fondoBarrios = isMobile ? fondoBarriosMobil : fondoBarriosDesktop;
  const fondoMobile = isMobile ? fondoMobile1 : fondoMobile2;
  const navigate = useNavigate();
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [forceReload, setForceReload] = useState(0);
  const [isMobileCalc, setIsMobileCalc] = useState(window.innerWidth < 1300);
  const [showInfinixBar, setShowInfinixBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
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
      command: () => handleScroll("participate2"),
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
      label: "EVENTO IRL",
      command: () => handleScroll("location"),
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

  // Ocultar barra de Infinix en la página de registro
  useEffect(() => {
    if (location.pathname.includes("registro")) {
      setShowInfinixBar(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Si estamos en la página de registro, siempre ocultar la barra de Infinix
      if (location.pathname.includes("registro")) {
        setShowInfinixBar(false);
        setLastScrollY(currentScrollY);
        return;
      }
      
      if(currentScrollY < 400) {
        if(!showInfinixBar){
          setShowInfinixBar(true);
          return;
        }
      }

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setShowInfinixBar(false);
      } else {
        // Scrolling up
        setShowInfinixBar(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, location.pathname]);

  const handleScroll = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");
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
    navigate("/");
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
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
      <NavBarItem key={index} text={item.label} command={item.command} index={index} />
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
            style={{
              height: "84px",
              paddingLeft: "0px",
              cursor: "pointer",
              paddingTop: "10px",
              position: "relative",
              left: isMobile ? "-1px" : "50px",
              bottom: "12px",
            }}
            alt="Logo"
            onClick={handleGoHome}
          />
        }
        center={
          !isMobileCalc ? (
            itemsToolbar(items)
          ) : (
            <></>
          )
        }
        end={
          isMobileCalc ? (
            <button
              className="menu-toggle"
              onClick={toggleDrawer}
              aria-label="Toggle menu"
              style={{ paddingBottom: "10px" }}
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

    
        <div
          style={{
            width: "100%",
            height: isMobileCalc ? "30px" : "45px",
            backgroundColor: "#F201B7",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            top: isMobileCalc ? "-16px" : "-10px",
            opacity: showInfinixBar ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          <img
            src={infinixLogoWhite}
            alt="infinixLogo"
            style={{ height: isMobileCalc ? "35px" : "45px" }}
          ></img>
        </div>
      

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
              <div style={{minHeight: "50px"}}></div>
              <img
                loading="lazy"
                src={logoNavMenu}
                style={{
                  width: "40%",
                  minWidth: "330px",
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
