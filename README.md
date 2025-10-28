# One Piece LogPose - Aplicación Web Interactiva

## Descripción

**One Piece LogPose** es una aplicación web completa y funcional diseñada para fans de One Piece que desean seguir su progreso en la serie, interactuar con otros fans y coleccionar cartas exclusivas de cada capítulo. La aplicación combina elementos de red social, sistema de gamificación y seguimiento de progreso, ofreciendo una experiencia única e inmersiva en el universo de One Piece.

Este proyecto demuestra mis habilidades completas en desarrollo web frontend y backend, incluyendo autenticación de usuarios, gestión de estado compleja, diseño de interfaces modernas, y creación de experiencias interactivas y personalizables.

## Live Preview

Enlace directo: [Live Preview](one-piece-logpose.netlify.app)

Enlace a GitHub: [Live Preview](https://github.com/Fernando-Herrero/one-piece-logpose)

## Tecnologías Usadas

-   **HTML5** - Estructura semántica y accesible para todas las secciones.
-   **CSS3 (Flexbox, Grid, Animations)** - Diseño responsive, transiciones suaves y efectos visuales temáticos.
-   **JavaScript (ES6+)** - Lógica de aplicación, manejo de estado, y funcionalidades interactivas.
-   **Local Storage / Session Storage** - Persistencia de datos de usuario y preferencias.
-   **Google Fonts** - Tipografías personalizadas estilo manga/anime.
-   **CSS Variables** - Sistema de tematización con modo claro/oscuro.
-   **Tailwind CSS** - Utilidades para maquetación rápida, estilos consistentes y sistema de diseño escalable.

## Buenas Prácticas Aplicadas

-   **Mobile First**: Diseño inicial optimizado para dispositivos móviles con escalado progresivo.
-   **Arquitectura Modular**: Código organizado en componentes reutilizables y funciones puras.
-   **Sistema de Autenticación**: Gestión segura de sesiones de usuario y protección de rutas.
-   **Estado Global**: Manejo centralizado del estado de la aplicación para consistencia.
-   **Accesibilidad (WCAG)**: Navegación por teclado, contraste adecuado, ARIA labels y semántica HTML5.
-   **Performance Optimization**: Lazy loading, code splitting y optimización de assets.
-   **Clean Code**: Nomenclatura descriptiva, código comentado y principios SOLID.
-   **Responsive Design**: Breakpoints estratégicos y componentes fluidos.
-   **Progressive Enhancement**: Funcionalidad básica garantizada con mejoras progresivas.

## Detalles del Proyecto

**One Piece LogPose** está estructurada como una Single Page Application (SPA) con múltiples secciones interconectadas que ofrecen una experiencia completa:

### Estructura Principal de la Aplicación

#### 1. **Landing Page (Sin Autenticación)**

Página de bienvenida atractiva que presenta la aplicación:

-   **Hero Section**: Introducción impactante con animaciones y call-to-action destacados.
-   **Sobre One Piece**: Breve historia de la serie, su creador y el universo.
-   **Protagonistas Principales**: Galería interactiva de los Piratas del Sombrero de Paja con descripciones.
-   **Mapa del Mundo**: Visualización interactiva de los principales arcos y localizaciones.
-   **Formulario de Registro**: Sistema completo con validación en tiempo real y feedback visual.
-   **Formulario de Login**: Autenticación con manejo de errores y recuperación de contraseña.

#### 2. **Dashboard Personal (Usuario Autenticado)**

Panel principal del usuario con información centralizada:

-   **Perfil de Usuario**: Avatar, nombre de usuario, biografía personalizable.
-   **Estadísticas de Progreso**: Capítulos vistos, cartas desbloqueadas, nivel actual, experiencia.
-   **Resumen de Actividad**: Últimas publicaciones, likes recibidos, seguidores nuevos.
-   **Personalización**: Editor de perfil para modificar nombre, bio, imagen de perfil y banner de fondo.
-   **Cartas Destacadas**: Showcase de las cartas más raras o recientes desbloqueadas.
-   **Logros y Badges**: Sistema de logros visuales por hitos alcanzados.

#### 3. **Feed Social (Estilo Twitter/X)**

Red social integrada para la comunidad:

-   **Timeline Personalizado**: Feed dinámico con publicaciones de usuarios seguidos.
-   **Crear Publicación**: Editor con soporte para texto, imágenes y hashtags temáticos.
-   **Interacciones**:
    -   Botón de like con contador y animación
    -   Sistema de comentarios anidados
    -   Guardar en favoritos para acceso rápido
-   **Perfiles de Usuario**: Vista detallada de cualquier usuario con:
    -   Información del perfil y estadísticas
    -   Botón de seguir/dejar de seguir
    -   Pestañas: Publicaciones, Likes, Comentarios
    -   Contador de seguidores y seguidos
-   **Explorar**: Descubrir contenido popular y usuarios recomendados.

#### 4. **Seguimiento de Capítulos y Sistema de Cartas**

Experiencia gamificada de progreso:

-   **Lista de Capítulos**: Catálogo completo organizado por arcos argumentales.
-   **Sistema de Desbloqueo Progresivo**: Capítulos que se desbloquean al completar anteriores.
-   **Cartas Coleccionables**:
    -   Cada capítulo completado otorga cartas únicas
    -   Diferentes rarezas (Común, Raro, Épico, Legendario)
    -   Galería de colección con filtros y ordenamiento
    -   Efectos visuales al desbloquear cartas nuevas
-   **Sistema de Niveles**:
    -   Experiencia ganada por ver capítulos
    -   Barra de progreso hacia el siguiente nivel
    -   Recompensas especiales por subir de nivel
-   **Marcadores**: Marcar capítulos como vistos, favoritos o pendientes.

#### 5. **Configuración y Ajustes**

Panel completo de personalización:

-   **Privacidad de Contenido**:
    -   Mostrar/ocultar publicaciones en el perfil público
    -   Mostrar/ocultar likes dados
    -   Mostrar/ocultar comentarios
    -   Perfil privado o público
-   **Preferencias de Visualización**:
    -   Toggle entre modo oscuro y claro con transición suave
    -   Selector de idioma (Español/Inglés) con cambio dinámico
    -   Tamaño de fuente y opciones de accesibilidad
-   **Notificaciones**: Configurar qué notificaciones recibir.
-   **Cuenta**: Cambiar contraseña, email, y opciones de seguridad.
-   **Datos**: Exportar datos personales o eliminar cuenta.

### Requisitos Técnicos Implementados

1. **Autenticación y Gestión de Usuarios**:

    - Sistema completo de registro con validación de campos.
    - Login seguro con hash de contraseñas.
    - Persistencia de sesión con tokens.
    - Recuperación de contraseña.
    - Protección de rutas para contenido autenticado.

2. **Modelo de Caja (Box Model)**:

    - Cards responsivas para capítulos, cartas y publicaciones.
    - Uso consistente de padding y margin para espaciado visual.
    - Box-sizing border-box para cálculos precisos.

3. **Flexbox**:

    - Navegación principal con distribución flexible.
    - Layout del dashboard con secciones adaptables.
    - Disposición de botones de interacción en publicaciones.
    - Centrado de modales y elementos emergentes.

4. **CSS Grid**:

    - Galería de cartas coleccionables con grid responsive.
    - Layout del dashboard con áreas definidas.
    - Grid de perfiles de usuarios recomendados.
    - Timeline de publicaciones con columnas laterales.

5. **Diseño Responsive**:

    - Breakpoints: móvil (<640px), tablet (640-1024px), desktop (>1024px).
    - Menú hamburguesa animado en móviles.
    - Sidebar colapsable en tablets.
    - Layout fluido que se adapta a cualquier resolución.

6. **Sistema de Rutas (SPA)**:

    - Navegación sin recarga de página.
    - URLs amigables y navegables.
    - Historial del navegador funcional.
    - Lazy loading de secciones.

7. **Gestión de Estado**:

    - Estado global para usuario autenticado.
    - Estado local para componentes individuales.
    - Sincronización con localStorage para persistencia.
    - Actualización reactiva de la UI.

8. **Internacionalización**:

    - Sistema completo de traducciones ES/EN.
    - Cambio dinámico sin recarga.
    - Formato de fechas y números según idioma.
    - Textos almacenados en archivos JSON.

9. **Modo Oscuro/Claro**:

    - Toggle suave con transiciones CSS.
    - CSS Variables para tematización dinámica.
    - Persistencia de preferencia del usuario.
    - Contraste optimizado para accesibilidad.

10. **Animaciones y Transiciones**:
    - Transiciones suaves en cambios de estado.
    - Animaciones de entrada para elementos nuevos.
    - Efectos hover en botones e interacciones.
    - Loading spinners y skeletons temáticos.
    - Animación especial al desbloquear cartas.

### Características Destacadas

**⚡ Funcionalidades Avanzadas:**

-   Sistema completo de autenticación y autorización.
-   Feed en tiempo real con actualizaciones dinámicas.
-   Sistema de likes, comentarios y favoritos totalmente funcional.
-   Seguimiento de progreso gamificado con recompensas.
-   Colección de cartas con sistema de rareza.
-   Perfiles de usuario completamente personalizables.
-   Búsqueda avanzada de usuarios y contenido.

**🎮 Gamificación:**

-   Sistema de experiencia y niveles progresivos.
-   Desbloqueo de capítulos secuencial.
-   Cartas coleccionables con diferentes rarezas.
-   Logros y badges por hitos completados.
-   Tabla de clasificación entre usuarios.

**📱 Experiencia de Usuario Premium:**

-   Navegación fluida e intuitiva entre secciones.
-   Feedback inmediato en todas las acciones.
-   Estados de carga elegantes con skeletons UI.
-   Mensajes de error y éxito contextuales.
-   Notificaciones en tiempo real (opcional).
-   Scroll infinito en feeds largos.
-   Modales y overlays con backdrop blur.

**🔒 Seguridad y Privacidad:**

-   Validación de formularios en cliente y servidor.
-   Protección contra XSS y CSRF.
-   Control granular de privacidad del perfil.
-   Opciones de exportación y eliminación de datos.

**Nota**: One Piece LogPose representa mi proyecto más ambicioso y completo en el portfolio, demostrando capacidades full-stack, desde diseño UX/UI hasta implementación de lógica compleja de aplicación, sistemas de autenticación, gamificación y redes sociales. Este proyecto evidencia mi capacidad para crear aplicaciones web profesionales, escalables y centradas en el usuario.
