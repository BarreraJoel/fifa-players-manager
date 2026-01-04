export default {
    // 400
    BadRequestExample: {
        summary: "Solicitud invalida",
        value: {
            success: false,
            message: "Errores de validación",
            errors: [
                {
                    type: "field",
                    value: "example.com",
                    msg: "email no válido",
                    path: "email",
                    location: "body",
                }
            ],
        },
    },
    // 401
    UnauthorizedExample: {
        summary: "No autenticado",
        value: {
            success: false,
            message: "No está autenticado",
        },
    },
    // 403
    ForbiddenExample: {
        summary: "No permitido",
        value: {
            success: false,
            message: "No tiene permiso para acceder",
        },
    },
    // 404
    ModelNotFoundExample: {
        summary: "Recurso no encontrado",
        value: {
            success: false,
            message: "No se encontró",
        },
    },
    // 422
    UnprocessableEntityExample: {
        summary: "No se puede procesar la entidad",
        value: {
            success: false,
            message: "Unprocessable entity",
        },
    },
    // 500
    InternalServerErrorExample: {
        summary: "Error Interno del Servidor",
        value: {
            success: false,
            message: "Ocurrió un error interno en el servidor",
        },
    },

}