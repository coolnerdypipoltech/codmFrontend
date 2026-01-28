import React, { useState, useEffect } from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useNavigate } from "react-router";

const Navbar = ({ onNavigate }) => {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1300);

  const items = [
    { label: 'Inicio', command: () => handleScroll('barrios-latinos') },
    { label: 'BarriosLatinos', command: () => handleScroll('barrios-latinos') },
    { label: 'Patrocinadores', command: () => handleScroll('patrocinadores') },
    { label: 'Los Barrios', command: () => handleScroll('los-barrios') },
    { label: 'Participar', command: () => handleScroll('como-participar') },
    { label: 'Premio', command: () => handleScroll('premio') },
    { label: 'Calendario', command: () => handleScroll('calendario') },
    { label: 'Locación', command: () => handleScroll('locacion') },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1300);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
  }

  return (
    <div className="navbar-container">
      <Toolbar
        style={{height: "100px"}}
        start={<Link style={{paddingLeft: "1rem"}} onClick={() => handleScroll('barrios-latinos')} className="navbar-logo">Copa de Barrios Latinos</Link>}
        center={!isMobile ? (itemsToolbar(items)) :             <Link style={{paddingRight: "1rem"}} onClick={() => navigate('/codmFrontend/registro')}>{"Registro"}</Link>
         }
        end={
          isMobile ? (
            <button className="menu-toggle" onClick={toggleDrawer} aria-label="Toggle menu">
              <span className="hamburger-icon">☰</span>
            </button>
          ) : (
            <Link style={{paddingRight: "1rem"}} onClick={() => navigate('/codmFrontend/registro')}>{"Registro"}</Link>
          )
        }
        className="navbar-menu"
        itemTemplate={itemTemplate}
      />
      
      {/* Drawer for mobile */}
      {isMobile && (
        <>
          <div 
            className={`drawer-overlay ${isDrawerOpen ? 'active' : ''}`} 
            onClick={toggleDrawer}
          />
          <div className={`drawer ${isDrawerOpen ? 'open' : ''}`}>
            <div className="drawer-header">
              <h3>Menú</h3>
              <button className="close-button" onClick={toggleDrawer} aria-label="Close menu">
                ×
              </button>
            </div>
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
            </nav>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
