import authResponse from "./auth";
import errorResponse from "./error";
import playerResponse from "./player";

export default {
    ...errorResponse,
    ...authResponse,
    ...playerResponse,
}