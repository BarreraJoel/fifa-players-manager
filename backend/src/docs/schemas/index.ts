import userSchema from "./model/user.schema";
import authRequestSchema from "./request/auth.schema";
import authResponseSchema from "./response/auth.schema";
import commonResponseSchema from "./response/common-response.schema";

export default {
    ...commonResponseSchema,
    ...userSchema,
    ...authRequestSchema,
    ...authResponseSchema,
};