import authSchema from "./auth";
import userSchema from "./user";
import errorSchema from "./error";
import commonSchema from "./common";

export default {
    ...commonSchema,
    ...authSchema,
    ...userSchema,
    ...errorSchema,
}