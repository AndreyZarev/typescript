import { fetchByUrl } from "../utils/http";
export class HttpService {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }
    create(body) {
        const config = {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-type": "application/json; charset=UTF-8" },
        };
        return fetchByUrl(this.apiUrl, config);
    }
    getOne(id) {
        return fetchByUrl(`${this.apiUrl}/${id}`);
    }
    getAll() {
        return fetchByUrl(this.apiUrl);
    }
    update(body) {
        const config = {
            method: "PUT",
            body: JSON.stringify(body),
            headers: { "Content-type": "application/json; charset=UTF-8" },
        };
        return fetchByUrl(`${this.apiUrl}/${body.id}`, config);
    }
    delete(id) {
        const config = { method: "DELETE" };
        return fetchByUrl(`${this.apiUrl}/${id}`, config);
    }
}
