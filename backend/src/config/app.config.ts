import { env } from "process";

export default {
  port: env.APP_PORT ?? 3000,
  env: env.NODE_ENV ?? "development",
  frontendUrl: env.FRONTEND_URL ?? "http://localhost:4200",
};
