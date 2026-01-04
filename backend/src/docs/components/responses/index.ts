import authResponse from "./auth";
import errorResponse from "./error";

export default {
    ...errorResponse,
    ...authResponse,
}