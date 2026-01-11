### 🚀 Guía de instalación y ejecución

---

### 🔧 Requisitos previos

* **Docker** (recomendado)

> Para ejecución local sin Docker, consultar los README de frontend y backend.

---

### ⚙️ Configuración inicial

#### Clonar el repositorio
```bash
git clone https://github.com/BarreraJoel/fifa-players-manager
```
### 🔐 Variables de entorno

El proyecto utiliza un archivo `.env` a nivel raíz para la configuración global.

#### Crear archivo `.env` (Obligatorio)
```bash
cp .env.example .env
```

#### Configurar las variables necesarias según el entorno
```bash
# App config
APP_PORT= # e.g. 3000
ENV= # e.g. development | production
...
```
> Ver `.env.example` para la lista completa de variables
---

### 🐳 Ejecutar con Docker (recomendado)

#### 🚀 Primer arranque

```bash
docker compose up --build -d
```
Esto levantará:

- Frontend
- Backend
- Base de datos
---

#### Flujo de desarrollo diario

Levantar servicios:
```bash
docker compose up
```
Detener servicios:
```bash
docker compose down
```
---

#### 📜 Logs por servicio

Frontend:
```bash
docker compose logs -f frontend
```
Backend:
```bash
docker compose logs -f backend
```
---
#### 📚 Documentación adicional
- [Backend README](./backend/README.md)
- [Frontend README](./frontend/README.md)
- [Docker README](./README.Docker.md)

---

### 📋 Gestión del proyecto

Para la organización y seguimiento del desarrollo se utilizó **Jira** como herramienta de gestión de tareas.
#### Metodología de trabajo
- El trabajo se organizó mediante un tablero Kanban.
- Cada funcionalidad fue dividida en tareas independientes.
- Las tareas avanzaron a través de los siguientes estados:
  - To Do
  - In Progress
  - In Review
  - Done

#### Alcance
- Cada tarea representa una funcionalidad o mejora concreta del proyecto.
- Los cambios implementados en el código están alineados con las tareas definidas en Jira.
- Se mantuvo trazabilidad entre funcionalidades, commits y documentación.

> Nota: El tablero de Jira fue utilizado como herramienta interna de planificación y seguimiento del proyecto.


### ⚙️ Decisiones funcionales

#### 👤 Registro de usuarios
- El registro se realiza mediante el endpoint `POST /api/auth/register`.
- Se validan los campos obligatorios antes de procesar la solicitud.
- En caso de éxito:
    - Se crea el usuario.
    - Se genera un token JWT.
    - El token se almacena en una cookie HTTP.
- En caso de error, se retorna un mensaje descriptivo junto con el código HTTP correspondiente.
---

#### 👤 Login de usuarios
- El inicio de sesión se realiza mediante el endpoint `POST /api/auth/login`.
- El usuario debe enviar sus credenciales (email y contraseña) en el cuerpo de la solicitud.
- Antes de procesar la autenticación, se validan los campos obligatorios y el formato de los datos recibidos.
- En caso de éxito:
    - Se autentica al usuario.
    - Se genera un token JWT.
    - El token se almacena en una cookie HTTP.
- En caso de error, se retorna un mensaje descriptivo junto con el código HTTP correspondiente.
---

#### 👤 Obtener usuario autenticado
- La obtención del usuario autenticado se realiza mediante el endpoint `GET /api/auth/me`.
- El endpoint requiere que el usuario tenga una sesión activa.
- La autenticación se valida mediante un token JWT almacenado en una cookie HTTP.
- No se requiere enviar información en el cuerpo de la solicitud.
- En caso de éxito:
  - Se retorna la información del usuario autenticado.
  - No se incluyen datos sensibles.
- En caso de que el usuario no esté autenticado o el token sea inválido:
  - Se retorna un error `401 Unauthorized`.
---

#### 🚪 Cerrar sesión
- El cierre de sesión se realiza mediante el endpoint `DELETE /api/auth/logout`.
- El endpoint requiere que el usuario tenga una sesión activa.
- La operación elimina la cookie que contiene el token JWT.
- No se retorna contenido en el cuerpo de la respuesta.
- En caso de éxito:
  - Se retorna el código `204 No Content`.
- Si no existe una sesión activa:
  - Se retorna un error `401 Unauthorized`
---

#### 📋 Obtener listado de jugadores
- La obtención del listado de jugadores se realiza mediante el endpoint `GET /api/players`.
- El endpoint soporta paginación para manejar grandes volúmenes de datos.
- La paginación se realiza mediante parámetros de consulta:
  - limit
  - after
  - before
- El listado retorna un conjunto reducido de atributos relevantes del jugador.
- Antes de procesar la solicitud:
  - Se validan y normalizan los parámetros de paginación.
- En caso de éxito:
  - Se retorna el listado paginado de jugadores junto con la información de navegación.
---

#### 👤 Obtener un jugador específico
- La obtención de un jugador específico se realiza mediante el endpoint `GET /api/players/:id`.
- El jugador se identifica mediante un id.
- Antes de procesar la solicitud:
  - Se valida que el id sea un entero positivo.
- En caso de éxito:
  - Se retorna la información detallada del jugador solicitado.
- Si el jugador no existe:
  - Se retorna un error `404 Not Found`.

---

#### ➕ Crear un jugador
- La creación de un jugador se realiza mediante el endpoint `POST /api/players`.
- El usuario debe enviar la información del jugador en el cuerpo de la solicitud.
- Antes de procesar la creación:
  - Se validan los campos obligatorios y el formato de los datos recibidos.
  - Se descartan campos no contemplados en el contrato de la API.
- En caso de éxito:
  - Se crea el jugador en el sistema.
  - Se retorna el código `201 Created` junto con la información del jugador creado.
- En caso de error de validación:
  - Se retorna un error `400 Bad Request` con el detalle correspondiente.
---

#### ✏️ Modificar un jugador
- La modificación de un jugador se realiza mediante el endpoint `PUT /api/players/:id`.
- El jugador a modificar se identifica mediante el parámetro de ruta `id`.
- Antes de procesar la solicitud:
  - Se valida que el `id` sea un entero positivo.
  - Se validan los campos enviados en el cuerpo de la solicitud.
  - Se descartan campos no contemplados en el contrato de la API.
- El endpoint permite actualizar únicamente los atributos enviados.
- En caso de éxito:
  - Se actualiza el jugador en el sistema.
  - Se retorna la información actualizada del jugador.
- En caso de error de validación:
  - Se retorna un error `400 (Bad Request)` con el detalle correspondiente.
- Si el jugador no existe:
  - Se retorna un error `404 (Not Found)`.
- En caso de error interno:
  - Se retorna un error `500 (Internal Server Error)`.
---

#### ⚠️ Manejo de errores
- Se implementó un middleware global para manejar errores.
- Las respuestas de error siguen una estructura consistente.
- Se evita exponer información sensible al cliente.
---

### 🧠 Decisiones técnicas

#### 🔐 Autenticación con JWT
Se decidió utilizar JWT (JSON Web Tokens) para la autenticación ya que:
- Al ser un esquema **stateless** no se requiere del uso de sesiones en servidor, mejorando la escalabilidad.
- No se requiere consultar la base de datos en cada request para validar la sesión.
- Es compatible con múltiples clientes (web, mobile, etc.).
---

#### 🍪 Uso de cookies para el manejo del token
El JWT se almacena en una cookie HTTP para:
- Evitar exponer el token al código JavaScript del cliente.
- Reducir riesgos de ataques XSS.
---

#### 🛂 Passport.js
Se utilizó Passport.js para:
- Centralizar la lógica de autenticación.
- Facilitar la lectura y validación del JWT mediante estrategias.
- Mantener un código más modular y desacoplado.
---

#### ✅ Validaciones con express-validator
Se incorporó `express-validator` para:
- Validar y sanitizar los datos de entrada.
- Evitar requests mal formadas.
- Reducir errores y posibles vulnerabilidades por datos inválidos.
---

#### 📦 Docker y docker-compose
El proyecto utiliza Docker para:
- Unificar el entorno de desarrollo.
- Evitar problemas de dependencias entre distintos sistemas.
- Simplificar la puesta en marcha del proyecto.
Las variables de entorno se centralizaron en un único archivo `.env` en la raíz del proyecto para:
- Simplificar la configuración.
- Evitar duplicación de variables.
- Mantener consistencia entre entornos.
---

#### 📘 Documentación con Swagger
Swagger fue integrado para:
- Documentar los endpoints disponibles.
- Facilitar la prueba de la API sin herramientas externas.
- Servir como referencia clara del contrato de la API.
---