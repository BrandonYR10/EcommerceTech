﻿# 🛒 Tienda de Electrónicos - E-commerce Completo

Una aplicación web moderna de comercio electrónico desarrollada con **Next.js 14**, **Node.js** y **MySQL**. Esta tienda especializada en productos electrónicos ofrece una experiencia de compra completa con panel de administración integrado.

## ✨ Características Principales

### 🛍️ **Para Clientes**
- **Catálogo de productos** con filtros avanzados
- **Sistema de búsqueda** inteligente
- **Carrito de compras** persistente
- **Lista de deseos** personalizada
- **Proceso de checkout** completo
- **Sistema de autenticación** seguro
- **Diseño responsivo** para todos los dispositivos

### ⚙️ **Panel de Administración**
- **Gestión de productos** (CRUD completo)
- **Administración de categorías**
- **Gestión de pedidos** en tiempo real
- **Control de usuarios** y roles
- **Dashboard con estadísticas**
- **Subida de imágenes** múltiples

## 🚀 Tecnologías Utilizadas

### **Frontend**
- **Next.js 14** - Framework de React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de estilos
- **DaisyUI** - Componentes UI
- **Zustand** - Gestión de estado
- **NextAuth.js** - Autenticación
- **React Icons** - Iconografía

### **Backend**
- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web
- **Prisma ORM** - Base de datos
- **MySQL** - Sistema de base de datos
- **bcryptjs** - Encriptación de contraseñas
- **CORS** - Configuración de seguridad

### **Herramientas de Desarrollo**
- **ESLint** - Linting de código
- **PostCSS** - Procesamiento de CSS
- **Autoprefixer** - Compatibilidad de navegadores

## 📦 Instalación y Configuración

### **Prerrequisitos**
- Node.js 18+ 
- MySQL 8.0+
- npm o yarn

### **1. Clonar el repositorio**
```bash
git clone <tu-repositorio>
cd mi-tienda-electronica
```

### **2. Instalar dependencias**
```bash
# Frontend
npm install

# Backend
cd server
npm install
cd ..
```

### **3. Configurar base de datos**
```bash
# Crear base de datos MySQL
CREATE DATABASE tienda_electronica;
```

### **4. Configurar variables de entorno**

**Archivo `.env` (raíz del proyecto):**
```env
DATABASE_URL="mysql://usuario:contraseña@localhost:3306/tienda_electronica"
NEXTAUTH_SECRET=tu_secreto_super_seguro
NEXTAUTH_URL=http://localhost:3000
```

**Archivo `server/.env`:**
```env
DATABASE_URL="mysql://usuario:contraseña@localhost:3306/tienda_electronica"
```

### **5. Ejecutar migraciones**
```bash
cd server
npx prisma migrate dev
```

### **6. Insertar datos de ejemplo**
```bash
cd utills
node insertDemoData.js
cd ..
```

### **7. Iniciar la aplicación**
```bash
# Terminal 1 - Backend
cd server
node app.js

# Terminal 2 - Frontend
npm run dev
```

### **8. Acceder a la aplicación**
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001

## 🏗️ Estructura del Proyecto

```
mi-tienda-electronica/
├── app/                    # Next.js App Router
│   ├── (dashboard)/        # Panel de administración
│   ├── api/               # API routes
│   └── _zustand/          # Stores de estado
├── components/            # Componentes reutilizables
├── lib/                   # Utilidades y configuraciones
├── public/               # Assets estáticos
├── server/               # Backend Express.js
│   ├── controllers/      # Controladores
│   ├── routes/          # Rutas de la API
│   └── prisma/          # Configuración de BD
└── prisma/              # Esquema de base de datos
```

## 🔧 Configuración de Desarrollo

### **Scripts Disponibles**
```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo
npm run build        # Construye para producción
npm run start        # Inicia servidor de producción
npm run lint         # Ejecuta ESLint
```

### **Variables de Entorno**
- `DATABASE_URL`: URL de conexión a MySQL
- `NEXTAUTH_SECRET`: Secreto para NextAuth.js
- `NEXTAUTH_URL`: URL base de la aplicación

## 📱 Funcionalidades Destacadas

### **Sistema de Productos**
- Categorización automática
- Filtros por precio, marca, disponibilidad
- Búsqueda por nombre y descripción
- Galería de imágenes múltiples

### **Gestión de Pedidos**
- Seguimiento en tiempo real
- Estados de pedido configurables
- Notificaciones automáticas
- Historial completo

### **Seguridad**
- Autenticación JWT
- Encriptación de contraseñas
- Validación de formularios
- Protección CSRF

## 🎨 Personalización

### **Temas y Estilos**
- Sistema de temas con Tailwind CSS
- Componentes personalizables
- Paleta de colores configurable
- Tipografías adaptables

### **Configuración de Tienda**
- Información de contacto
- Políticas de envío
- Métodos de pago
- Configuración de impuestos

## 🚀 Despliegue

### **Plataformas Recomendadas**
- **Vercel** - Frontend (Next.js)
- **Railway** - Backend (Node.js)
- **PlanetScale** - Base de datos (MySQL)

### **Variables de Producción**
```env
DATABASE_URL="mysql://usuario:contraseña@host:puerto/base_datos"
NEXTAUTH_SECRET=secreto_produccion_super_seguro
NEXTAUTH_URL=https://tu-dominio.com
```
