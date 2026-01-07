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
                "400": {
                    $ref: "#/components/responses/BadRequestResponse"
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
    "/api/players/{id}": {
        get: {
            summary: "Obtener un jugador",
            description: "Obtener la información de un jugador",
            tags: ["Players"],
            security: [
                {
                    cookieAuth: [],
                }
            ],
            parameters: [
                {
                    in: "path",
                    name: "id",
                    required: true,
                    schema: {
                        type: "integer",
                        minimum: 1,
                        description: "id del jugador",
                        example: 10
                    }
                }
            ],
            responses: {
                "200": {
                    $ref: "#/components/responses/GetPlayerResponse"
                },
                "400": {
                    $ref: "#/components/responses/BadRequestResponse"
                },
                "401": {
                    $ref: "#/components/responses/UnauthorizedResponse"
                },
                "404": {
                    $ref: "#/components/responses/ModelNotFoundResponse"
                },
                "500": {
                    $ref: "#/components/responses/InternalServerErrorResponse"
                },
            }
        }
    },


}