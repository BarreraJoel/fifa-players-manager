import authResponse from "./auth";
import errorResponse from "./error";
import playerResponse from "./player";
import metricsResponse from "./metrics";

export default {
    ...errorResponse,
    ...authResponse,
    ...playerResponse,
    ...metricsResponse,
}