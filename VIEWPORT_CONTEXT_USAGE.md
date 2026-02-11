# Cómo usar ViewportContext

El ViewportContext permite detectar si la pantalla es móvil (≤1000px) o desktop (>1000px) para ajustar imágenes y contenido de manera dinámica.

## Instalación

El contexto ya está configurado en `App.js` envolviendo toda la aplicación.

## Uso en componentes

### 1. Importar el hook
```javascript
import { useViewport } from "../../context/ViewportContext";
```

### 2. Usar el hook en tu componente
```javascript
const MiComponente = () => {
  const { isMobile } = useViewport();
  
  // isMobile = true si la pantalla es ≤1000px
  // isMobile = false si la pantalla es >1000px
  
  return (
    <div>
      {isMobile ? (
        <img src={imagenMovil} alt="Móvil" />
      ) : (
        <img src={imagenDesktop} alt="Desktop" />
      )}
    </div>
  );
};
```

### 3. Ejemplo con selección dinámica de imagen
```javascript
import { useViewport } from "../../context/ViewportContext";
import imagenMovil from "../../assets/mobile.png";
import imagenDesktop from "../../assets/desktop.png";

const Banner = () => {
  const { isMobile } = useViewport();
  
  const imagenActual = isMobile ? imagenMovil : imagenDesktop;
  
  return (
    <img src={imagenActual} alt="Banner" />
  );
};
```

### 4. Ejemplo con estilos condicionales
```javascript
const Contenedor = () => {
  const { isMobile } = useViewport();
  
  return (
    <div style={{
      width: isMobile ? "100%" : "80%",
      padding: isMobile ? "10px" : "20px"
    }}>
      Contenido
    </div>
  );
};
```

## Ejemplo implementado

Revisa `src/components/HomePage/BarriosLatinos.js` para ver un ejemplo completo de cómo usar el contexto para cambiar entre imágenes móvil y desktop.
