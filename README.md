# Gestión de Usuarios

Este es un proyecto de ejemplo creado con [Next.js](https://nextjs.org) que permite gestionar usuarios. Incluye funcionalidades para listar, agregar, editar y eliminar usuarios.

## Características

- **Listar usuarios**: Muestra una lista de usuarios obtenidos desde una API externa.
- **Agregar usuarios**: Permite agregar nuevos usuarios a la lista.
- **Editar usuarios**: Permite modificar el nombre de un usuario existente.
- **Eliminar usuarios**: Permite eliminar usuarios de la lista.

## Tecnologías utilizadas

- **Next.js**: Framework de React para aplicaciones web.
- **React**: Biblioteca para construir interfaces de usuario.
- **Tailwind CSS**: Framework de CSS para estilos rápidos y consistentes.
- **Fetch API**: Para obtener datos desde una API externa.

## Estructura del proyecto

```
prueba-frontend/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.jsx
│   ├── components/
│       ├── UserForm.jsx
│       ├── UserItem.jsx
│       └── UserList.jsx
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Instalación

1. Clona este repositorio:

   ```bash
   git clone <https://github.com/GabrieLZ19/PruebaTecnicaFrontend.git>
   cd prueba-frontend
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

## Uso

1. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

2. Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Scripts disponibles

- `dev`: Inicia el servidor de desarrollo.
- `build`: Construye la aplicación para producción.
- `start`: Inicia la aplicación en modo producción.
- `lint`: Ejecuta ESLint para verificar errores de código.

## Personalización

Puedes personalizar los estilos en el archivo [`globals.css`](src/app/globals.css) y modificar los componentes en la carpeta [`components`](src/components/).

## API utilizada

Este proyecto utiliza la API pública de [JSONPlaceholder](https://jsonplaceholder.typicode.com/) para obtener datos de usuarios.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la licencia MIT.
