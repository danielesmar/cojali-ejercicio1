# Ejercicio #1

Esta es una aplicación en ReactJS con Vite que consume la API [Random User](https://randomuser.me/) para mostrar una lista de 100 usuarios en una tabla paginada con la opción de eliminar usuarios.

## Tecnologías utilizadas
- ReactJS
- TypeScript
- CSS3
- Vite

## Instalación y ejecución

### Requisitos previos:
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos para ejecutar la aplicación:

1. **Clonar el repositorio**
   ```sh
   git clone https://github.com/danielesmar/cojali-ejercicio1.git
   cd cojali-ejercicio1
   ```

2. **Instalar dependencias**

   Con npm:
   ```sh
   npm install
   ```

   Con yarn:
   ```sh
   yarn install
   ```

3. **Ejecutar en modo desarrollo**

   Con npm:
   ```sh
   npm run dev
   ```

   Con yarn:
   ```sh
   yarn dev
   ```

4. **Abrir en el navegador**
    - La aplicación estará disponible en `http://localhost:5173`

### Scripts en `package.json`
Vite se ejecuta con los siguientes scripts:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```
- `npm run dev` inicia el servidor de desarrollo en `http://localhost:5173`.
- `npm run build` genera la versión optimizada de producción.
- `npm run preview` permite probar la versión de producción localmente.

## Funcionalidades
- Obtiene 100 usuarios aleatorios de la API `https://randomuser.me/api/`
- Muestra los usuarios en una tabla con columnas: Imagen, Nombre, Email, País y Acción
- Opción para eliminar un usuario de la lista
- Paginación de 10 usuarios por página
- Estilos personalizados con CSS3

## Estructura del Proyecto
```
src/
├── application/
│   ├── FetchUsers.ts
├── domain/
│   ├── User.ts
├── infraestructure/
│   ├── api/
│   │   ├── UserService.ts
│   ├── ui/
│   │   ├── reactComponents/
│   │   │   ├── ConfirmModal.css
│   │   │   ├── ConfirmModal.tsx
│   │   │   ├── UserTable.css
│   │   │   ├── UserTable.tsx
├── App.css
├── App.tsx  
├── index.css
├── main.tsx
├── vite.env.d.ts
```
