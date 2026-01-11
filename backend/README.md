## ⚙️ Backend

Este README describe cómo ejecutar y trabajar con el backend de forma **aislada**.  
Para levantar todo el sistema completo (frontend, backend y base de datos), consultar el README principal.

---

### 🔧 Requisitos previos

#### Para ejecución local
- Node.js v18 o superior
- npm
- Base de datos MySQL en ejecución

#### Para ejecución con Docker
- Docker

---

### 🐳 Ejecutar con Docker (recomendado)
El backend se ejecuta automáticamente como parte del entorno Docker del proyecto.

#### 🚀 Primer arranque (build de imágenes)

Desde la **raíz del repositorio**:
```bash
docker compose up --build -d
```
#### Arranques posteriores
```bash
docker compose up -d
```
> La opción `-d` ejecuta los contenedores en segundo plano (modo detached).

#### Para seguir los logs del servicio en Docker:
```bash
docker compose logs -f backend
```

#### 📝 Ejecutar migraciones (obligatorio)

```bash
npm run db:migrate:docker
```
> para deshacer las migraciones:
```bash
npm run db:migrate:docker:undo:all
```

#### 🌱 Ejecutar seeders (recomendado)
```bash
npm run db:seed:docker
```
> para deshacer los seeders:
```bash
npm run db:seed:docker:rollback
```

#### Seguir logs del servicio en Docker
```bash
docker compose logs -f backend
```

---

### ▶️ Ejecutar en entorno local (sin Docker)

#### Instalar dependencias
```bash
cd backend
npm install
```

---

#### 📝 Ejecutar migraciones en local (obligatorio)

```bash
npm run db:migrate
```
> para deshacer las migraciones:

```bash
npm run db:migrate:undo:all
```

#### 🌱 Ejecutar seeders en local (recomendado)

```bash
npm run db:seed
```

> para deshacer los seeders:

```bash
npm run db:seed:rollback
```

### ▶️ Ejecutar el servidor en modo desarrollo
```bash
cd backend
npm install
npm run dev
```
> Usa nodemon + ts-node para recarga automática.

---

### 📘 Documentación de la API

El backend expone la documentación interactiva de la API mediante **Swagger**.
Una vez levantado el servicio, se puede acceder desde:

```bash
http://localhost:3000/api/docs
```
Desde Swagger es posible:
- Visualizar todos los endpoints disponibles
- Ver los modelos de datos
- Consultar parámetros, validaciones y respuestas posibles
- Probar los endpoints directamente desde el navegador

---

#### 📦 Build

Generar archivos compilados:
```bash
npm run build
```

---

#### 🚀 Producción

Ejecutar la aplicación compilada:
```bash
npm start
```