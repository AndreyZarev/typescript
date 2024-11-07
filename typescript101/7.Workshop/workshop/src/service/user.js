import { HttpService } from "./http";
export class UserService extends HttpService {
    constructor(baseUrl) {
        super(`${baseUrl}/users`);
    }
    getSingleUser(userId) {
        // Validation
        return this.getOne(userId);
    }
}
