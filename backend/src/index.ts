import "dotenv/config";
import express from "express";
import cors from "cors";
import routes from "./routes";
import corsConfig from "./config/cors.config";
import appConfig from "./config/app.config";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsConfig));

app.use("/api", routes);

const startServer = async () => {
    app.listen(appConfig.port, () => {
        console.log(`🚀 Server is running on port: ${appConfig.port}`);
        console.log(`🌍 Environment: ${appConfig.env}`);
    });
};

startServer()
    .catch((error) => {
        console.error("❌ Failed to start server:", error);
    });

export default app;