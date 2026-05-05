import React, { createContext, useState, useEffect, useContext } from 'react';

// Crear el contexto
const ViewportContext = createContext();

// Hook personalizado para usar el contexto fácilmente
export const useViewport = () => {
  const context = useContext(ViewportContext);
  if (!context) {
    throw new Error('useViewport debe usarse dentro de un ViewportProvider');
  }
  return context;
};

// Detecta tablet por User Agent
const detectTabletByUA = () => {
  const ua = navigator.userAgent.toLowerCase();
  const isTabletUA = /ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP)))/.test(ua);
  return isTabletUA;
};

// Proveedor del contexto
export const ViewportProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);
  const [isTablet, setIsTablet] = useState(detectTabletByUA() || window.innerWidth <= 1300);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
      setIsTablet(detectTabletByUA() || window.innerWidth <= 1300);
    };

    // Agregar event listener
    window.addEventListener('resize', handleResize);

    // Cleanup: remover event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ViewportContext.Provider value={{ isMobile, isTablet }}>
      {children}
    </ViewportContext.Provider>
  );
};

export default ViewportContext;
