# Clima Click - Módulo 6 (Vue.js Edition) ⛈️

¡Hola! Soy Camila y este es el gran salto de mi proyecto. En esta etapa migré toda la lógica de JavaScript vanila a **Vue.js 3**, transformando la aplicación en una **Single Page Application (SPA)** moderna, rápida y con una estética neón personalizada que refleja mi estilo como desarrolladora.

## ¿Qué implementé en esta versión con Vue?

* **Arquitectura de Componentes**: Dividí la interfaz en componentes reutilizables y vistas independientes, mejorando la mantenibilidad y el orden del código.
* **Vue Router (Navegación Dinámica)**: Implementé rutas dinámicas para que cada ciudad tenga su propia página de detalle de forma instantánea y sin recargar el navegador.
* **Consumo de API Real**: Conecté la app a **OpenWeatherMap**, gestionando la autenticación mediante API Key y procesando respuestas asíncronas para mostrar datos precisos.
* **Reactividad Total**: Utilicé las herramientas nativas de Vue (`data`, `methods`, `mounted`) para que la interfaz responda de inmediato a las búsquedas del usuario.
* **Diseño Neón & Glassmorphism**: Creé una experiencia visual única con "modo oscuro", tarjetas con efecto de cristal, bordes neón y degradados vibrantes en tonos morados y rosados.

## Estructura del Proyecto

* **`App.vue`**: Contiene el marco principal de la aplicación, incluyendo una barra de navegación limpia y un pie de página con mis créditos personales.
* **`HomeView.vue`**: La vitrina principal de la app. Presenta un buscador global de ciudades y una cuadrícula con las ciudades destacadas de Chile, renderizadas dinámicamente con `v-for`.
* **`AboutView.vue`**: El corazón de los detalles. Captura el nombre de la ciudad desde la URL y consulta a la API para mostrar temperatura, sensación térmica, humedad y velocidad del viento.
* **`Router`**: Configuración maestra que gestiona el tráfico entre la vista de inicio y las páginas de detalle.

## Tecnologías y Herramientas

* **Framework**: Vue.js 3 (Vite)
* **Navegación**: Vue Router 4
* **API**: OpenWeatherMap (API Key personalizada)
* **Estilos**: CSS3 Avanzado (Flexbox, Grid, Backdrop-filter y Animaciones de transición)

## ¿Cómo ejecutar el proyecto?

Si quieres ver este proyecto funcionando en tu entorno local:

1.  Clona este repositorio.
2.  Entra a la carpeta del proyecto: `cd clima-vue`
3.  Instala las dependencias: `npm install`
4.  Inicia el servidor de desarrollo: `npm run dev`
5.  Abre el enlace que aparecerá en tu terminal.

## Autora

**Camila Andrea Molina Hernández** Diseñadora y Desarrolladora Frontend  
Coronel, Chile — 2026