export default {
    RegisterRequestSchema: {
        type: "object",
        properties: {
            full_name: {
                type: "string",
                description: "Nombre completo del usuario",
                example: "Juan Perez",
            },
            email: {
                type: "string",
                format: "email",
                description: "Email del usuario",
                example: "example@example.com",
            },
            password: {
                type: "string",
                minLength: 8,
                maxLength: 60,
                description: "Contraseña del usuario",
                example: "fifa1Ab_",
            },
            password_confirmation: {
                type: "string",
                minLenght: 8,
                maxLenght: 60,
                description: "Confirmación de contraseña",
                example: "fifa1Ab_",
            },
        },
        required: ["full_name", "email", "password", "password_confirmation"],
    },
    LoginRequestSchema: {
        type: "object",
        properties: {
            email: {
                type: "string",
                example: "example@example.com",
                format: "email",
                description: "Email del usuario"
            },
            password: {
                type: "string",
                minLenght: 8,
                maxLenght: 60,
                example: "fifa1Ab_",
                description: "Contraseña del usuario"
            },
        },
        required: ["email", "password"],
    },

    InvalidCredentialsSchema: {
        type: "object",
        properties: {
            success: { type: "boolean" },
            message: { type: "string" },
        },
    },



}