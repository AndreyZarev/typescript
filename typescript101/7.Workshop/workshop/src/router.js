import { postPage } from "./views/post";
import { userPage } from "./views/user";
export const router = {
    "/": userPage,
    "/post": postPage,
};
