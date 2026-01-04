export default {
    LoginSuccessResponse: {
        description: "Login exitoso",
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/SuccessSchema"
                },
                examples: {
                    success: {
                        $ref: "#/components/examples/LoginSuccessExample"
                    },
                },
            },
        }
    },
    RegisterSuccessResponse: {
        description: "Registro exitoso",
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/SuccessSchema"
                },
                examples: {
                    success: {
                        $ref: "#/components/examples/RegisterSuccessExample"
                    },
                },
            },
        }
    },

    InvalidCredentialsResponse: {
        description: "Credenciales invalidas",
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/FailureSchema"
                },
                examples: {
                    InvalidCredentials: {
                        $ref: "#/components/examples/InvalidCredentialsExample"
                    },
                },
            },
        }
    },

}