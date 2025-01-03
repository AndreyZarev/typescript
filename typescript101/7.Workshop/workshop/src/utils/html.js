import { router } from "../router";
export class HtmlUtil {
    static render(appDiv) {
        if (!appDiv) {
            throw new Error("Missing root element!");
        }
        // Init and Handle Routing
        const { pathname } = window.location;
        const html = router[pathname];
        if (html) {
            appDiv.innerHTML = html;
        }
        // Manage Event Listeners
        HtmlUtil.addEventListener(appDiv);
    }
    static addEventListener(appDiv) {
        // Capture HTML Elements
        const usersBtn = document.getElementById("users");
        const postsBtn = document.getElementById("posts");
        // Attach the actual events
        if (usersBtn) {
            usersBtn.addEventListener("click", () => {
                HtmlUtil.navigate(appDiv, "/");
            });
        }
        if (postsBtn) {
            postsBtn.addEventListener("click", () => {
                HtmlUtil.navigate(appDiv, "/post");
            });
        }
    }
    static navigate(appDiv, pathname) {
        const { origin } = window.location;
        const url = `${origin}${pathname}`;
        // to change url
        window.history.pushState({}, pathname, url);
        // to render content
        if (appDiv) {
            appDiv.innerHTML = router[pathname];
        }
    }
}
