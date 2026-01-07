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

    CreatePlayerRequestSchema: {
        type: "object",
        properties: {
            fifa_version: { type: "string", example: "18" },
            fifa_update: { type: "string", example: "4" },
            long_name: { type: "string", example: "Enzo Perez" },
            player_face_url: { type: "string", example: "https://img.a.transfermarkt.technology/portrait/big/56066-1625771376.png?lm=1" },
            overall: { type: "integer", example: 70 },
            potential: { type: "integer", example: 72 },
            age: { type: "integer", example: 31 },
            player_positions: { type: "string", example: "MCD" },
            nationality_name: { type: "string", example: "Argentina" },
            club_name: { type: "string", example: "River Plate" },
            preferred_foot: {
                type: "string",
                enum: ["Left", "Right"],
                example: "Left"
            },
            pace: { type: "integer", example: 70 },
            shooting: { type: "integer", example: 55 },
            passing: { type: "integer", example: 77 },
            dribbling: { type: "integer", example: 30 },
            defending: { type: "integer", example: 50 },
            physic: { type: "integer", example: 75 },
        },
        required: [
            "fifa_version",
            "fifa_update",
            "long_name",
            "player_face_url",
            "age",
            "player_positions",
            "overall",
            "potential",
        ],
    },

    UpdatePlayerRequestSchema: {
        type: "object",
        properties: {
            fifa_version: { type: "string", example: "19" },
            fifa_update: { type: "string", example: "5" },
            long_name: { type: "string", example: "Enzo Perez modificado" },
            player_face_url: { type: "string", example: "https://img.a.transfermarkt.technology/portrait/big/56066-1625771376.png?lm=1" },
            overall: { type: "integer", example: 72 },
            potential: { type: "integer", example: 74 },
            age: { type: "integer", example: 32 },
            player_positions: { type: "string", example: "MCD" },
            nationality_name: { type: "string", example: "Argentina" },
            club_name: { type: "string", example: "River Plate" },
            preferred_foot: {
                type: "string",
                enum: ["Left", "Right"],
                example: "Left"
            },
            pace: { type: "integer", example: 72 },
            shooting: { type: "integer", example: 57 },
            passing: { type: "integer", example: 79 },
            dribbling: { type: "integer", example: 32 },
            defending: { type: "integer", example: 53 },
            physic: { type: "integer", example: 77 },
        },
    },



};