export default {
    PlayerListPaginateResponse: {
        description: "Jugadores obtenidos!",
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/SuccessSchema"
                },
                examples: {
                    success: {
                        $ref: "#/components/examples/GetPlayersPaginateSuccessExample"
                    },
                },
            },
        }
    },
    GetPlayerResponse: {
        description: "Jugador obtenido",
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/SuccessSchema"
                },
                examples: {
                    success: {
                        $ref: "#/components/examples/GetPlayerSuccessExample"
                    },
                },
            },
        }
    },
    CreatePlayerResponse: {
        description: "Jugador creado",
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/SuccessSchema"
                },
                examples: {
                    success: {
                        $ref: "#/components/examples/CreatePlayerSuccessExample"
                    },
                },
            },
        }
    },
    UpdatePlayerResponse: {
        description: "Jugador actualizado",
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/SuccessSchema"
                },
                examples: {
                    success: {
                        $ref: "#/components/examples/UpdatePlayerSuccessExample"
                    },
                },
            },
        }
    },
    GetPlayerImageResponse: {
        description: "Imagen obtenida",
        content: {
            "image/jpeg": {
                schema: {
                    type: "string",
                    format: "binary"
                },
            },
            "image/png": {
                schema: {
                    type: "string",
                    format: "binary"
                }
            },
        }
    },
}