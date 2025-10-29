# ssr-estate-center (Prueba técnica)

Aplicación SSR (Server-Side Rendering) construida con Next.js 16 para la visualización y gestión de propiedades inmobiliarias.
El proyecto consume la [API RESTful de ms-estate-center](https://ms-estate-center-production.up.railway.app/api) y utiliza React Hook Form y TypeScript para la gestión de estado y formularios.

## Requisitos previos

Asegúrate de tener instalados los siguientes componentes en tu entorno local:

- [Node.js 18+](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)
- (Opcional) [Visual Studio Code](https://code.visualstudio.com/) o tu IDE preferido

## Ambiente de Despliegue

El proyecto se encuentra desplegado en la plataforma [Vercel](https://vercel.com).

Este frontend consume los endpoints públicos del backend alojado en [Railway](https://railway.com)

[Estate Center - Web App](https://ssr-estate-center.vercel.app/)

## Estructura del proyecto

```bash
src/
 ├─ app/              # Rutas y páginas SSR
 ├─ components/       # Componentes reutilizables con sus estilos y tests
 ├─ core/             # Casos de uso, repositorios y dominios
 ├─ infrastructure/   # Configuraciones de conexiones
 ├─ hooks/            # Custom hooks
 └─ utils/            # Utilidades
```

## Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/ssr-estate-center.git
cd ssr-estate-center 
```

## Configuración local

Antes de ejecutar el proyecto localmente, crea un archivo .env en la raíz del proyecto y define las siguientes variables de entorno:

```bash
NEXT_PUBLIC_API_URL=https://ms-estate-center-production.up.railway.app/api
JWT_SECRET=valor_vercel_env
```

## Ejecución local

```bash
npm install
npm run dev
```

## Ejecución de pruebas unitarias

```bash
npm run test
```

Luego abre en el navegador:

[http://localhost:3000](http://localhost:3000)

## Licencia

Este proyecto fue desarrollado como parte de una prueba técnica.
Su uso y distribución están limitados a fines de evaluación y demostración.