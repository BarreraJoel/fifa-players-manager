export default {
    ErrorResponseSchema: {
        type: "object",
        properties: {
            success: { type: "boolean", example: false },
            message: { type: "string", example: "Mensaje de error" },
        },
    },
    ValidationErrorSchema: {
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
        },
    },
}