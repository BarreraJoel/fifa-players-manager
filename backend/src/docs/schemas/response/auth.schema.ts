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
};