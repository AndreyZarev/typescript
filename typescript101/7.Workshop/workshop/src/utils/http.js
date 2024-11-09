export const fetchByUrl = (url, httpConfig = {}) => {
    return fetch(url, httpConfig)
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => console.error(`Error: ${error}`));
};
