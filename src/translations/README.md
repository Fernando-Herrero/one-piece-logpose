# i18n - Internacionalización

Sistema de traducciones simplificado para React usando `react-i18next`.

## 📁 Estructura

```
src/translations/
├── i18n.js                # Configuración de i18next
├── useTranslate.js        # Hook para traducciones
├── LanguageSelector.jsx   # Componente selector de idioma
└── locales/
    ├── es.js             # Traducciones en español (objetos JavaScript con export)
    └── en.js             # Traducciones en inglés (objetos JavaScript con export)
```

## 🚀 Uso

### Usar traducciones

```jsx
import { useTranslate } from './translations/useTranslate';

function MyComponent() {
  const { t } = useTranslate();
  
  return (
    <div>
      <h1>{t('common.loading')}</h1>
      <button>{t('common.save')}</button>
      <p>{t('auth.login_title')}</p>
      <span>{t('books.add_book')}</span>
    </div>
  );
}
```

### Selector de idioma

```jsx
import { LanguageSelector } from './translations/LanguageSelector';

function Header() {
  return (
    <header>
      <LanguageSelector />
    </header>
  );
}
```

### Cambiar idioma manualmente

```jsx
import { useTranslate } from './translations/useTranslate';

function MyComponent() {
  const { i18n } = useTranslate();
  
  return (
    <button onClick={() => i18n.changeLanguage('en')}>
      English
    </button>
  );
}
```

## 📝 Estructura de traducciones

Las traducciones están organizadas en objetos anidados con snake_case y se exportan desde archivos JavaScript:

```javascript
// locales/es.js
export const translationES = {
  common: {
    save: 'Guardar',
    cancel: 'Cancelar',
    view_details: 'Ver Detalles',
    // ...
  },
  auth: {
    login: 'Iniciar Sesión',
    login_title: 'Iniciar Sesión',
    forgot_password: '¿Olvidaste tu contraseña?',
    // ...
  },
  books: {
    books: 'Libros',
    add_book: 'Agregar Libro',
    // ...
  },
  // ...
};

export default translationES;
```

### Uso con objetos anidados:

```jsx
t('common.save')           // "Guardar"
t('auth.login_title')      // "Iniciar Sesión"
t('books.add_book')        // "Agregar Libro"
t('errors.not_found')      // "Recurso no encontrado"
```

## 📝 Agregar traducciones

Edita los archivos JavaScript en `locales/` dentro del objeto correspondiente:

```javascript
// locales/es.js
export const translationES = {
  common: {
    // ... existente
    my_new_key: 'Mi nueva traducción',
  },
};

export default translationES;
```

## 🌐 Agregar nuevo idioma

1. Crea `locales/fr.js`:
```javascript
export const translationFR = {
  common: {
    save: 'Enregistrer',
    cancel: 'Annuler',
    // ...
  },
  auth: {
    login: 'Connexion',
    // ...
  },
};

export default translationFR;
```

2. Importa en `i18n.js`:
```javascript
import { translationFR } from './locales/fr.js';

// ...
resources: {
  en: { translation: translationEN },
  es: { translation: translationES },
  fr: { translation: translationFR },
}
```

## ✅ Categorías disponibles

- **common**: Acciones comunes, etiquetas, mensajes
- **auth**: Autenticación y perfiles
- **books**: Gestión de libros
- **products**: Gestión de productos
- **navigation**: Navegación y menús
- **errors**: Mensajes de error

## 🎯 Convenciones

- Archivos JavaScript (`.js`) con objetos exportados usando `export const` y `export default`
- Objetos anidados por módulo/categoría
- snake_case para las keys (ejemplo: `login_title`, `add_book`)
- Español (es) - idioma por defecto
- Detección automática del idioma del navegador
- Persistencia en localStorage
