export default {
    LoginSuccessExample: {
        summary: "Login exitoso",
        value: {
            status: true,
            message: "Login exitoso",
            data: {
                user: {
                    id: 1,
                    full_name: "Juan Perez",
                    email: "juan@example.com",
                    created_at: "2025-12-17T17:00:00Z",
                    updated_at: "2025-12-17T17:00:00Z",
                }
            }
        },
    },
    RegisterSuccessExample: {
        summary: "Registro exitoso",
        value: {
            status: true,
            message: "Registro exitoso",
            data: {
                user: {
                    id: 2,
                    full_name: "Jose Perez",
                    email: "jose@example.com",
                    created_at: "2025-12-17T17:00:00Z",
                    updated_at: "2025-12-17T17:00:00Z",
                }
            }
        },
    },
    UserLoggedSuccessExample: {
        summary: "Usuario logueado",
        value: {
            status: true,
            message: "Usuario obtenido!",
            data: {
                user: {
                    id: 2,
                    full_name: "Jose Perez",
                    email: "jose@example.com",
                    created_at: "2025-12-17T17:00:00Z",
                    updated_at: "2025-12-17T17:00:00Z",
                }
            }
        },
    },

    InvalidCredentialsExample: {
        summary: "Credenciales invalidas",
        value: {
            status: false,
            message: "Credenciales invalidas",
        },
    },


}