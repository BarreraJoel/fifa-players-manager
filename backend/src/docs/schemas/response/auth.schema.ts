export default {
    RegisterUserResponse: {
        type: "object",
        properties: {
            status: {
                type: "boolean",
                description: "Nombre completo del usuario",
                example: true,
            },
            message: {
                type: "string",
                description: "Mensaje descriptivo",
                example: "Registro exitoso!",
            },
            data: {
                $ref: "#/components/schemas/FullUserSchema"
            }
        },
    },
    LoginResponse: {
        type: "object",
        properties: {
            status: {
                type: "boolean",
                description: "Estado de la solicitud",
                example: true,
            },
            message: {
                type: "string",
                description: "Mensaje descriptivo",
                example: "Inicio de sesión exitoso!",
            },
            data: {
                type: "object",
                properties: {
                    user: {
                        $ref: "#/components/schemas/FullUserSchema"
                    }
                }
            }
        },
    },
    InvalidCredentialResponse: {
        type: "object",
        properties: {
            status: {
                type: "boolean",
                description: "Estado de la solicitud",
                example: false,
            },
            message: {
                type: "string",
                description: "Mensaje descriptivo",
                example: "Credenciales inválidas",
            },
        },
    },
};