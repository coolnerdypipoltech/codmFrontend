# CODM Frontend - Sitio Web Oficial

## Descripción

Este es el sitio web oficial del evento **CODM (Código y Música de Barrios Latinos)**, una plataforma que celebra la cultura, el talento y la creatividad de los barrios latinos.

## Estructura del Proyecto

### Páginas
- **HomePage** (`/`): Página principal con todas las secciones del evento
- **RegistroPage** (`/registro`): Página de registro para participantes

### Componentes

#### HomePage Sections
1. **Navbar**: Barra de navegación fija con acceso a todas las secciones
2. **BarriosLatinos**: Sección en pantalla completa con video
3. **Patrocinadores**: Scroll horizontal con logos de patrocinadores
4. **LosBarrios**: Selector de barrios con galería de imágenes
5. **ComoParticipar**: 3 cards explicando pasos para participar
6. **Premio**: Imagen centrada del premio principal
7. **Calendario**: Imagen con contador de tiempo hacia la final
8. **Locación**: Información del lugar y mapa Google Maps

## Personalización

### Cambiar el Video (BarriosLatinos)
En `src/components/HomePage/BarriosLatinos.js`, reemplaza `your-video-id`:
```javascript
src="https://www.youtube.com/embed/TU-VIDEO-ID"
```

### Cambiar Patrocinadores
En `src/components/HomePage/Patrocinadores.js`, modifica el array `sponsors`:
```javascript
const sponsors = [
  { name: 'Sponsor 1', logo: 'URL-DE-IMAGEN' },
  // ...
];
```

### Cambiar Secciones de Barrios
En `src/components/HomePage/LosBarrios.js`, modifica el array `sections`:
```javascript
const sections = [
  { id: 1, title: 'Nombre del Barrio', image: 'URL-DE-IMAGEN' },
  // ...
];
```

### Cambiar Fecha de la Final
En `src/components/HomePage/Calendario.js`, modifica:
```javascript
const finalDate = new Date('2026-06-30T00:00:00').getTime();
```

### Cambiar Ubicación del Evento
En `src/components/HomePage/Locacion.js`, reemplaza:
- Nombre del lugar
- Dirección
- URL del mapa de Google Maps

## Instalación y Ejecución

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm start

# Compilar para producción
npm run build

# Deploy a GitHub Pages
npm run deploy
```

## Tecnologías Utilizadas

- **React 19.2.3**: Framework principal
- **React Router DOM**: Enrutamiento
- **PrimeReact**: Componentes UI profesionales
- **PrimeIcons**: Iconografía
- **CSS3**: Estilos personalizados

## Características

✅ Responsive design para móviles y desktop
✅ Scroll suave entre secciones
✅ Navbar fijo con navegación rápida
✅ Contador de tiempo en tiempo real
✅ Google Maps integrado
✅ Formulario de registro completo
✅ Diseño moderno con gradientes

## Estilo y Tema

El sitio utiliza un esquema de colores principal:
- **Morado**: `#667eea`
- **Púrpura**: `#764ba2`
- **Degradados**: Colores vibrantes para diferentes secciones

## Próximos Pasos

1. Reemplazar URLs de imágenes placeholder con imágenes reales
2. Configurar video de YouTube
3. Obtener coordenadas correctas de Google Maps
4. Personalizar colores según la marca
5. Probar en dispositivos móviles

## Soporte

Para problemas o sugerencias, contacta al equipo de desarrollo.
