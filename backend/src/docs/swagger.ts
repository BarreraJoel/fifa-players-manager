import swaggerDocs from "swagger-jsdoc";
import schemas from "./schemas";
import appConfig from "../config/app.config";

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'FIFA Player Manager API Documentation',
            version: '1.0.0',
            description: "API REST para la gestión de jugadores FIFA",
        },
        servers: [
            {
                url: `http://localhost:${appConfig.port}`,
                description: "Servidor de desarrollo",
            },
        ],
        components: {
            securitySchemes: {
                cookieAuth: {
                    type: "apiKey",
                    in: "cookie",
                    name: "access_token",
                    description: "Autenticación mediante JWT almacenado en una cookie HTTP",
                },
            },
            schemas: schemas,
        },
    },
    apis: ['src/routes/**/*.router.ts'],
};

export default swaggerDocs(options);