export default {
    // 400
    BadRequest: {
        type: "object",
        properties: {
            success: { type: "boolean", example: false },
            message: { type: "string", example: "Errores de validación" },
            errors: {
                type: "array",
                description: "Listado de errores de validación",
                items: {
                    type: "object",
                    properties: {
                        type: {
                            type: "string",
                            example: "field",
                        },
                        value: {
                            type: "string",
                            example: "example.com",
                        },
                        msg: {
                            type: "string",
                            example: "email no válido",
                        },
                        path: {
                            type: "string",
                            example: "email",
                        },
                        location: {
                            type: "string",
                            example: "body",
                        },
                    },
                },
            }
        }
    },
    // 401
    Unauthorized: {
        type: "object",
        properties: {
            success: { type: "boolean", example: false },
            message: { type: "string", example: "No está autenticado" },
        },
    },
    // 403
    Forbidden: {
        type: "object",
        properties: {
            success: { type: "boolean", example: false },
            message: { type: "string", example: "No tiene permiso para acceder" },
        },
    },
    // 404
    ModelNotFound: {
        type: "object",
        properties: {
            success: { type: "boolean", example: false },
            message: { type: "string", example: "No se encontró" },
        },
    },
    // 422
    UnprocessableEntity: {
        type: "object",
        properties: {
            success: { type: "boolean", example: false },
            message: { type: "string", example: "Unprocessable entity" },
        },
    },
    // 500
    InternalServerError: {
        type: "object",
        properties: {
            success: { type: "boolean", example: false },
            message: { type: "string", example: "Internal Server Error" },
        },
    },
};