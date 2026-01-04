import "./config/env.config";
import express from "express";
import cors from "cors";
import routes from "./routes";
import corsConfig from "./config/cors.config";
import appConfig from "./config/app.config";
import swagger from "swagger-ui-express";
import swaggerConfig from "./docs/swagger";
import cookieParser from "cookie-parser";
import cookieConfig from "./config/cookies.config";
import { sequelize } from "./db/sequelize";
import { passportConfig } from "./config/passport.config";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsConfig));

app.use(cookieParser(cookieConfig.secret));
app.use("/api", routes);

// Swagger documentation
app.use("/api/docs", swagger.serve,
    swagger.setup(swaggerConfig, {
        swaggerOptions: { withCredentials: true },
    })
);

app.use(passportConfig.initialize());

async function initializeDatabase() {
    try {
        await sequelize.authenticate();
        console.log("✅ Database connection established successfully.");
    } catch (error) {
        console.error("❌ Unable to connect to the database");
    }
};

const startServer = async () => {
    await initializeDatabase();
    app.listen(appConfig.port, () => {
        console.log(`🚀 Server is running on port: ${appConfig.port}`);
        console.log(`🌍 Environment: ${appConfig.env}`);
        console.log(`📚 API Documentation: http://localhost:${appConfig.port}/api/docs`);
    });
};

startServer()
    .catch((error) => {
        console.error("❌ Failed to start server:", error);
    });

export default app;