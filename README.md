# MyDevelopmentTest

Esta es una aplicación web desarrollada Categorias con Ionic + Angular, que incluye las siguientes funcionalidades:

Agregar tareas

Marcar tareas como completadas

Eliminar tareas

Categorizar tareas por tipo

## Tecnologías usadas
Ionic Framework (v7+)

Angular (v15+)

HTML/CSS/TypeScript

## Estructura de carpetas básica

src/
├── app/
│   ├── categoria/
│   │      ├── categoria.page.ts/html/scss
│   └── lista/
│   |      ├── categoria.page.ts/html/scss
│   └──models         
│   |      ├── user.model.ts
|   └── services/
│   | ├── user.model.ts
|   |     ├── lista.service.ts
|   └── app.module.ts       
|   |
|   └── app.routes.ts       
|
## Modelo de tarea User
export interface User {
    uid: string,
    email: string,
    password: string,
    name: string,

} 


### Requisitos previos

- Node.js (v18+)
- Git
- npm o yarn

### Pasos para la instalación y ejecución

1. Clona este repositorio:

~~~

git clone (https://github.com/juancarlos-197/MyDevelopmentTest)
cd MyDevelopmentTest
Instala las dependencias:

npm install
Ejecuta la aplicación:
npm start
La aplicación estará disponible en http://localhost:4200 (o el puerto configurado).


