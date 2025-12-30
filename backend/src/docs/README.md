### 📝 Guía de documentación de Swagger
---

#### 🔧 Instalación y ejecución
1. **Instalar dependencias**

```bash
npm install swagger-ui-express swagger-jsdoc
npm install -D @types/swagger-jsdoc @types/swagger-ui-express
```

2. **Acceder a la url de la documentación**
```text
http://localhost:3000/api/docs
```

### 📝 Documentar endpoints

#### 📐 Estructura

Cada endpoint se documenta mediante comentarios JSDoc usando la anotación @swagger.

#### 📌 Ejemplo
```typescript
 /**
   * @swagger
   * /api/auth/register:
   *   post:
   *     summary: Registrar un nuevo usuario
   *     description: Crea una nueva cuenta de usuario
   *     tags: [Authentication]
   *     security:
   *       - cookieAuth: []
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/RegisterRequest'
   *     responses:
   *        201:
   *          description: Usuario registrado exitosamente
   *          content:
   *            application/json:
   *              schema:
   *                $ref: '#/components/schemas/RegisterRequest'   
   * 
   *        400:
   *          description: Solicitud inválida
   *          content:
   *             application/json:
   *               schema:
   *                 $ref: '#/components/schemas/BadRequest'
   */
  public registerUser = async (request: Request, response: Response) => {
    ...
  }
```

#### 📖 Explicación
> **@swagger**

Activa el bloque de documentación Swagger.
Todo lo que esté dentro de este bloque se interpretará como una definición de API.

> **/api/auth/register:**

Define la URL del endpoint.
Debe coincidir exactamente con la ruta real de Express.

> **post:**

Indica si el endpoint es `get`, `post`, `put`, `delete`, etc.

> **summary:**

Una frase corta que explica qué hace el endpoint.
Debe ser conciso y visible en Swagger UI.

> **description:**

Explicación más detallada.
Podés incluir reglas, notas, o comportamientos importantes.

> **tags**

Clasifica el endpoint por dominio funcional.

```typescript
tags: [Authentication]
```

> **security:**

Indica qué tipo de autenticación requiere el endpoint.
Usos comunes:
- **bearerAuth → JWT por header**
- **cookieAuth → JWT en cookies**
- **apiKeyAuth → API Key por header**

> **requestBody:**

Describe qué espera recibir el endpoint.
- `required`: si el body es obligatorio
- `content`: tipo de contenido `(application/json)`
- `schema`: referencia a un schema reutilizable

> **responses:**

Describe todas las respuestas posibles del endpoint.
Cada respuesta debe incluir:

- Código HTTP
- Descripción
- Estructura del JSON de respuesta

---
>⚠️ **Nota sobre cookies**
>
>Swagger UI **no puede setear cookies HttpOnly**.
>Para probar endpoints protegidos es necesario:
>
>- **autenticarse previamente**
>- **o desactivar `HttpOnly` en entorno de desarrollo**


### 📝 Schemas

#### ➕ Crear schema
Ejemplo
```typescript
    RegisterUserRequest: {
        type: "object",
        properties: {
            full_name: { 
              type: "string", 
              example: "Juan Perez"
            },
            email: { 
              type: "string",
               example: "example@example.com"
            },
            password: { 
              type: "string", 
              minLength: 8, 
              maxLength: 60, 
              example: "passwordMn@"
            },
            password_confirmation: { 
              type: "string", 
              minLength: 8, 
              maxLength: 60, 
              example: "passwordMn@"
            },
        },
        required: [
          "full_name", 
          "email", 
          "password", 
          "password_confirmation"
        ],
    }
```
#### 📖 Explicación

> **RegisterRequest**

Es el identificador del schema, para utilizarlo hay que hacer referencia:
```typescript
$ref: '#/components/schemas/RegisterRequest'
```

> **type: "object"**

Indica que el schema representa un objeto JSON.
Posibles tipos de dato: **string, number, boolean, array, object**.

> **properties**

Cada campo del request se define dentro de properties.

Dentro de cada campo se puede especificar:

| Propiedad |	Descripción |
|-----------|-----------|
|**type**	|Tipo de dato (string, number, boolean, array, object)|
|**example**	|Ejemplo que Swagger UI mostrará|
|**description**	|Explica qué representa el campo|
|**format**	| Validaciones semánticas (email, uuid, date, etc.)|
|**minLength / maxLength**	|Validación estándar|
|**enum**	|Lista de valores permitidos|

> **required**

Esto le indica a Swagger que esos campos no pueden faltar en el request.

#### 📦 Registrar Schema
Dentro del archivo `src/docs/index.ts`, importar y exportar los schemas creados.

```typescript
import authSchemas  from "./auth/auth.schema";
export default {
    ...authSchemas,
};
```