import authPaths from "./auth";
import playerPaths from "./player";
import metricPaths from "./metrics";

export default {
    ...authPaths,
    ...playerPaths,
    ...metricPaths
}