export default {
    GetMetricsResponse: {
        description: "Metricas obtenidas!",
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/SuccessSchema"
                },
                examples: {
                    success: {
                        $ref: "#/components/examples/GetMetricsSuccessExample"
                    },
                },
            },
        }
    },
    GetBestPlayersResponse: {
        description: "Mejores jugadores obtenidos!",
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/SuccessSchema"
                },
                examples: {
                    success: {
                        $ref: "#/components/examples/GetBestPlayersSuccessExample"
                    },
                },
            },
        }
    },
}