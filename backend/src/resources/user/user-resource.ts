import { User } from "../../models";

export class UserResource {
    static toResponse(user: User) {
        return {
            id: user.id,
            full_name: user.full_name,
            email: user.email,
            created_at: user.created_at,
            updated_at: user.updated_at,
        };
    }
}
