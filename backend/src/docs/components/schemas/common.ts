export default {
    SuccessSchema: {
        description: "Solicitud exitosa",
        type: "object",
        properties: {
            success: { type: "boolean" },
            message: { type: "string" },
            data: { type: "object" },
        },
    },
    FailureSchema: {
        description: "Solicitud fallida",
        type: "object",
        properties: {
            success: { type: "boolean" },
            message: { type: "string" },
        },
    },
    FailureValidationSchema: {
        description: "Solicitud fallida por validacion",
        type: "object",
        properties: {
            success: { type: "boolean" },
            message: { type: "string" },
            errors: { type: "array" }
        },
    },
}