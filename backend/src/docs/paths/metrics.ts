export default {
    "/api/metrics": {
        get: {
            summary: "Obtener metricas",
            description: "",
            tags: ["Metrics"],
            security: [
                {
                    cookieAuth: [],
                }
            ],
            responses: {
                "200": {
                    $ref: "#/components/responses/GetMetricsResponse"
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
    "/api/metrics/best-players": {
        get: {
            summary: "Obtener los jugadores mejor puntuados",
            description: "",
            tags: ["Metrics"],
            security: [
                {
                    cookieAuth: [],
                }
            ],
            responses: {
                "200": {
                    $ref: "#/components/responses/GetBestPlayersResponse"
                },
                "401": {
                    $ref: "#/components/responses/UnauthorizedResponse"
                },
                "500": {
                    $ref: "#/components/responses/InternalServerErrorResponse"
                },
            }
        },
    }
}