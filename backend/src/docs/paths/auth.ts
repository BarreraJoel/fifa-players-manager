export default {
    "/api/auth/login": {
        post: {
            summary: "Iniciar sesión",
            description: "Ingreso de credenciales para acceder a la aplicación",
            tags: ["Authentication"],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/LoginRequestSchema"
                        }
                    }
                }
            },
            responses: {
                "200": {
                    $ref: "#/components/responses/LoginSuccessResponse"
                },
                "400": {
                    $ref: "#/components/responses/BadRequestResponse"
                },
                "401": {
                    $ref: "#/components/responses/InvalidCredentialsResponse"
                },
                "500": {
                    $ref: "#/components/responses/InternalServerErrorResponse"
                },
            }
        }
    },
    "/api/auth/register": {
        post: {
            summary: "Registrar un nuevo usuario",
            description: "Crea una nueva cuenta de usuario",
            tags: ["Authentication"],
            requestBody: {
                required: true,
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/RegisterRequestSchema"
                        }
                    }
                }
            },
            responses: {
                "201": {
                    $ref: "#/components/responses/RegisterSuccessResponse"
                },
                "400": {
                    $ref: "#/components/responses/BadRequestResponse"
                },
                "500": {
                    $ref: "#/components/responses/InternalServerErrorResponse"
                },

            }
        }
    },
    "/api/auth/me": {
        get: {
            summary: "Obtener al usuario logueado",
            description: "Obtiene la informacion del usuario logueado actualmente",
            tags: ["Authentication"],
            security: [
                {
                    cookieAuth: [],
                }
            ],
            requestBody: {
                required: false,
            },
            responses: {
                "200": {
                    $ref: "#/components/responses/UserAuthResponse"
                },
                "401": {
                    $ref: "#/components/responses/UnauthorizedResponse"
                },
                "500": {
                    $ref: "#/components/responses/InternalServerErrorResponse"
                },
            }
        }
    },
    "/api/auth/logout": {
        delete: {
            summary: "Cerrar sesión",
            description: "Cierre de sesión y eliminar la cookie",
            tags: ["Authentication"],
            security: [
                {
                    cookieAuth: [],
                }
            ],
            responses: {
                "204": {
                    description: "Sesión cerrada exitosamente"
                },
            }
        }
    }

}