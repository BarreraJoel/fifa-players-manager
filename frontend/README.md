## 🎨 Frontend

Este README describe cómo ejecutar y configurar el frontend de forma **aislada**.
Para levantar todo el sistema completo, consultar el README principal.

---

### 🔧 Requisitos previos

#### Para ejecución local
- Node.js v18 o superior
- npm

#### Para ejecución con Docker
- Docker

---

### 🐳 Ejecutar con Docker (recomendado)

El frontend se ejecuta automáticamente como parte del entorno Docker del proyecto.

Desde la raíz del repositorio:
#### Primer arranque (con build de imágenes)
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
docker compose logs -f frontend
```

La aplicación estará disponible en:
```
http://localhost:4200
```
> El contenedor del frontend utiliza el archivo `environment.docker.ts`.


### ▶️ Ejecutar en entorno local (sin Docker)
#### Instalar dependencias
```bash
cd frontend
npm install
```
####  Ejecutar en entorno local

```bash
npm start
```
> Este comando ejecuta `ng serve` y utiliza automáticamente `environment.development.ts`

Abrir en el navegador:
```
http://localhost:4200
```

### ⚙️ Configuración

La configuración del frontend se define en:

* `src/environments/environment.development.ts` (desarrollo)
* `src/environments/environment.docker.ts` (desarrollo con Docker)
* `src/environments/environment.ts` (producción)

Ejemplo:

```ts
api: {
  baseUrl: 'http://backend:3000'
}
```
>⚠️ **Nota**: cuando la aplicación corre en Docker, no se debe usar localhost para comunicarse con el backend.
Se debe utilizar el nombre del servicio definido en docker-compose.yml.