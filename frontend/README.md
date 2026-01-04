# Frontend – Angular

## 📦 Requisitos

* Node.js **v20+**
* npm **v9+**
* Angular CLI **v19**

> Opcional: Docker y Docker Compose si se ejecuta en contenedores.

---

## 🚀 Ejecutar en entorno local

1. Instalar dependencias:

```bash
npm install
```

2. Levantar la aplicación en modo desarrollo:

```bash
npm start
```
> Este comando ejecuta `ng serve` y utiliza automáticamente `environment.development.ts`

3. Abrir en el navegador:
```
http://localhost:4200
```

---

## 🧪 Ejecutar con Docker (opcional)

Si el proyecto se ejecuta junto a otros servicios (backend, DB):

```bash
docker compose up --build -d
```
El contenedor del frontend ejecuta Angular con la configuración docker,
por lo que se utiliza el archivo: `environment.docker.ts`

Para seguir los logs del frontend:
```bash
docker compose logs -f frontend
```

La aplicación estará disponible en:
```
http://localhost:4200
```

Angular utilizará el archivo `environment.docker.ts`.

---

## ⚙️ Configuración

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