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

// Proveedor del contexto
export const ViewportProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    // Agregar event listener
    window.addEventListener('resize', handleResize);

    // Cleanup: remover event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ViewportContext.Provider value={{ isMobile }}>
      {children}
    </ViewportContext.Provider>
  );
};

export default ViewportContext;
