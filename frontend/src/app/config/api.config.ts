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
    },
} as const;
