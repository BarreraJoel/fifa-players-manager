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
}