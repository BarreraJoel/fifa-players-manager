export default {
    GetBestPlayersSuccessExample: {
        summary: "Mejores jugadores obtenidos",
        value: {
            status: true,
            message: "Mejores jugadores obtenidos!",
            data: {
                best_players: [
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
                    }
                ]
            }
        }
    },
    GetMetricsSuccessExample: {
        summary: "Jugador creado",
        value: {
            status: true,
            message: "Jugador creado!",
            data: {
                metrics: {
                    players_count: 163000,
                    overall_average: 87,
                    top_overall: 95,
                    high_potential: 94
                }
            }
        },
    },
}