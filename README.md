# Reto Técnico: Aplicación de Productos - REACT18 + Tailwind + Redux

Aplicación web construida con React 18, Tailwind CSS y Redux para la gestión de estado. Incluye carrito de compras, filtrado de productos y persistencia de datos en localStorage.

## 🛠️ Tecnologías

- **React 18**
- **TypeScript**
- **Redux Toolkit**
- **Tailwind CSS**
- **Vite**
- **Vitest** - Testing

## 📋 Requisitos Previos

- Node.js (v16 o superior)
- npm o yarn

## 🚀 Instalación y Ejecución

### 1. Instalar dependencias

```bash
npm install
```

### 2. Ejecutar en modo desarrollo

```bash
npm run dev
```

El servidor estará disponible en `http://localhost:5173`

## 🧪 Ejecutar Tests

```bash
npm run vitest
```

## 📁 Estructura del Proyecto

```
src/
├── components/       # Componentes
├── pages/           # Páginas
├── services/        # Requests
├── store/           # Store Redux
│   └── slices/
├── types/           # Tipos
└── utils/           # Funciones
```

## ✨ Características

- ✅ Listado de productos con filtrado por categoría
- ✅ Carrito de compras con persistencia
- ✅ Agregar/eliminar productos del carrito
- ✅ Interfaz responsive con Tailwind
- ✅ Gestión de estado con Redux
- ✅ TypeScript para mayor seguridad de tipos
