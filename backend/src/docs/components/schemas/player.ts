export default {
    FullPlayerSchema: {
        type: "object",
        properties: {
            id: { type: "integer", example: 1 },
            fifa_version: { type: "string", example: "15" },
            long_name: { type: "string", example: "Lionel Andrés Messi Cuccittini" },
            player_face_url: { type: "string", example: "https://cdn.sofifa.net/players/158/023/15_120.png" },
            nationality_name: { type: "string", example: "Argentina" },
            club_name: { type: "string", example: "FC Barcelona" },
            age: { type: "integer", example: 27 },
            player_positions: { type: "string", example: "CF" },
            preferred_foot: { type: "string", example: "Left" },
            overall: { type: "integer", example: 93 },
            potential: { type: "integer", example: 95 },
            pace: { type: "integer", example: 93 },
            shooting: { type: "integer", example: 89 },
            passing: { type: "integer", example: 86 },
            dribbling: { type: "integer", example: 96 },
            defending: { type: "integer", example: 27 },
            physic: { type: "integer", example: 63 },
        },
    },



};