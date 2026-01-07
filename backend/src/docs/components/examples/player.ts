export default {
    GetPlayersPaginateSuccessExample: {
        summary: "Jugadores obtenidos",
        value: {
            status: true,
            message: "Jugadores obtenidos!",
            data: {
                players: {
                    items: [
                        {
                            id: 1,
                            fifa_version: "15",
                            long_name: "Lionel Andrés Messi Cuccittini",
                            player_face_url: "https://cdn.sofifa.net/players/158/023/15_120.png",
                            nationality_name: "Argentina",
                            club_name: "FC Barcelona",
                            age: 27,
                            player_positions: "CF",
                            preferred_foot: "Left",
                            overall: 93,
                            potential: 95,
                            pace: 93,
                            shooting: 89,
                            passing: 86,
                            dribbling: 96,
                            defending: 27,
                            physic: 63
                        },
                        {
                            id: 2,
                            fifa_version: "15",
                            long_name: "Cristiano Ronaldo dos Santos Aveiro",
                            player_face_url: "https://cdn.sofifa.net/players/020/801/15_120.png",
                            nationality_name: "Portugal",
                            club_name: "Real Madrid CF",
                            age: 29,
                            player_positions: "LW, LM",
                            preferred_foot: "Right",
                            overall: 92,
                            potential: 92,
                            pace: 93,
                            shooting: 93,
                            passing: 81,
                            dribbling: 91,
                            defending: 32,
                            physic: 79
                        },
                        {
                            id: 3,
                            fifa_version: "15",
                            long_name: "Arjen Robben",
                            player_face_url: "https://cdn.sofifa.net/players/009/014/15_120.png",
                            nationality_name: "Netherlands",
                            club_name: "FC Bayern München",
                            age: 30,
                            player_positions: "RM, LM, RW",
                            preferred_foot: "Left",
                            overall: 90,
                            potential: 90,
                            pace: 93,
                            shooting: 86,
                            passing: 83,
                            dribbling: 92,
                            defending: 32,
                            physic: 64
                        },
                        {
                            id: 4,
                            fifa_version: "15",
                            long_name: "Zlatan Ibrahimović",
                            player_face_url: "https://cdn.sofifa.net/players/041/236/15_120.png",
                            nationality_name: "Sweden",
                            club_name: "Paris Saint-Germain",
                            age: 32,
                            player_positions: "ST",
                            preferred_foot: "Right",
                            overall: 90,
                            potential: 90,
                            pace: 76,
                            shooting: 91,
                            passing: 81,
                            dribbling: 86,
                            defending: 34,
                            physic: 86
                        },
                        {
                            id: 5,
                            fifa_version: "15",
                            long_name: "Manuel Peter Neuer",
                            player_face_url: "https://cdn.sofifa.net/players/167/495/15_120.png",
                            nationality_name: "Germany",
                            club_name: "FC Bayern München",
                            age: 28,
                            player_positions: "GK",
                            preferred_foot: "Right",
                            overall: 90,
                            potential: 90,
                            pace: 0,
                            shooting: 0,
                            passing: 0,
                            dribbling: 0,
                            defending: 0,
                            physic: 0
                        }
                    ],
                    total_count: 161583,
                    paginate_info: {
                        has_next: true,
                        has_previous: false,
                        next_cursor: "WzVd",
                        prev_cursor: null
                    }
                }
            }
        },

    },
    GetPlayerSuccessExample: {
        summary: "Jugador obtenido",
        value: {
            status: true,
            message: "Jugador obtenido!",
            data: {
                player: {
                    id: 1,
                    fifa_version: "15",
                    fifa_update: "2",
                    long_name: "Lionel Andrés Messi Cuccittini",
                    player_face_url: "https://cdn.sofifa.net/players/158/023/15_120.png",
                    nationality_name: "Argentina",
                    club_name: "FC Barcelona",
                    age: 27,
                    player_positions: "CF",
                    preferred_foot: "Left",
                    overall: 93,
                    potential: 95,
                    pace: 93,
                    shooting: 89,
                    passing: 86,
                    dribbling: 96,
                    defending: 27,
                    physic: 63
                }
            }
        },
    },
    CreatePlayerSuccessExample: {
        summary: "Jugador creado",
        value: {
            status: true,
            message: "Jugador creado!",
            data: {
                player: {
                    id: 1,
                    fifa_version: "18",
                    fifa_update: "4",
                    long_name: "Enzo Perez",
                    player_face_url: "https://img.a.transfermarkt.technology/portrait/big/56066-1625771376.png?lm=1",
                    nationality_name: "Argentina",
                    club_name: "River Plate",
                    age: 31,
                    player_positions: "MCD",
                    preferred_foot: "Left",
                    overall: 70,
                    potential: 72,
                    pace: 70,
                    shooting: 55,
                    passing: 77,
                    dribbling: 30,
                    defending: 50,
                    physic: 75
                }
            }
        },
    },
    CreatePlayerFullExample: {
        summary: "Crear con los parametros completos",
        value: {
            id: 1,
            fifa_version: "18",
            fifa_update: "4",
            long_name: "Enzo Perez",
            player_face_url: "https://img.a.transfermarkt.technology/portrait/big/56066-1625771376.png?lm=1",
            nationality_name: "Argentina",
            club_name: "River Plate",
            age: 31,
            player_positions: "MCD",
            preferred_foot: "Left",
            overall: 70,
            potential: 72,
            pace: 70,
            shooting: 55,
            passing: 77,
            dribbling: 30,
            defending: 50,
            physic: 75
        },
    },
    CreatePlayerMinimalExample: {
        summary: "Crear con los parametros minimos",
        value: {
            fifa_version: "15",
            fifa_update: "2",
            long_name: "Rodrigo Mora",
            player_face_url: "https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/r/rod/large/29621.png",
            nationality_name: "Uruguay",
            age: 29,
            player_positions: "CF",
            overall: 72,
            potential: 74
        },

    }
}