import { env } from "process";

const isProduction = env.ENV === "production";

export default {
    secret: env.COOKIE_SECRET ?? "",
    cookieOptions: {
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? "none" : "lax",
        signed: true,
    } as const
};