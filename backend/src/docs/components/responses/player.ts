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
}