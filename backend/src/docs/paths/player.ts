export default {
    "/api/players": {
        get: {
            summary: "Obtener al usuario logueado",
            description: "Obtiene la informacion del usuario logueado actualmente",
            tags: ["Players"],
            security: [
                {
                    cookieAuth: [],
                }
            ],
            parameters: [
                {
                    in: "query",
                    name: "limit",
                    required: true,
                    schema: {
                        type: "integer",
                        minimum: 1,
                        description: "Cantidad de resultados a devolver por página.",
                        example: 10
                    }
                },
                {
                    in: "query",
                    name: "after",
                    schema: {
                        type: "string",
                        minimum: 1,
                        description: "Cursor para obtener la siguiente página."
                    }
                },
                {
                    in: "query",
                    name: "before",
                    schema: {
                        type: "string",
                        minimum: 1,
                        description: "Cursor para obtener la página anterior."
                    }
                },
            ],
            responses: {
                "200": {
                    $ref: "#/components/responses/PlayerListPaginateResponse"
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

}