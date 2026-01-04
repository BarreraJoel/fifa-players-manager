export default {
    FullUserSchema: {
        type: "object",
        properties: {
            id: { type: "integer", example: 1 },
            full_name: { type: "string", example: "Juan Perez" },
            email: { type: "string", example: "juan@example.com" },
            created_at: {
                type: "string",
                format: "date-time",
                example: "2025-12-17T17:00:00Z",
                description: "Fecha y hora de la creación del registro",
            },
            updated_at: {
                type: "string",
                format: "date-time",
                example: "2025-12-17T17:00:00Z",
                description: "Fecha y hora de modificación del registro",
            },
        },
    },

};