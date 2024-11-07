import { HttpService } from "./http";
export class PostService extends HttpService {
    constructor(baseUrl) {
        super(`${baseUrl}/posts`);
    }
    getSinglePost(postId) {
        // Validation
        return this.getOne(postId);
    }
}
