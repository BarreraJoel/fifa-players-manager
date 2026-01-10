import { environment } from "src/environments/environment";

export const API_CONFIG = {
    baseURL: environment.api.baseUrl,
    endpoints: {
        auth: {
            login: "/auth/login",
            register: "/auth/register",
            me: "/auth/me",
            logout: "/auth/logout",
        },
        players: {
            getPlayers: "/players",
            getPlayer: "/players/:id",
            getPlayerImage: "/players/:id/image",
            createPlayer: "/players",
            editPlayer: "/players/:id",
        },
        metric: {
            getMetrics: "/metrics/",
            getBestPlayers: "/metrics/outstanding-players",
            getAnalytics: "/metrics/analytics",
            
        },
    },
} as const;
