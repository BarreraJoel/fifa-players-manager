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
- El inicio de sesión se realiza mediante el endpoint `POST /api/auth/login`
- El usuario debe enviar sus credenciales (email y contraseña) en el cuerpo de la solicitud.
- Antes de procesar la autenticación, se validan los campos obligatorios y el formato de los datos recibidos.
- En caso de éxito:
    - Se autentica al usuario.
    - Se genera un token JWT.
    - El token se almacena en una cookie HTTP.
- En caso de error, se retorna un mensaje descriptivo junto con el código HTTP correspondiente.
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