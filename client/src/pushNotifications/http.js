//const host = process.env.NODE_ENV === "production" ? "https://push-notification-demo-server.herokuapp.com" : "http://localhost:4000";
const host = "https://push-notification-demo-server.herokuapp.com";

function post(path, body) {
    return fetch(`${host}${path}`, {
        credentials: "omit",
        headers: { "content-type": "application/json;charset=UTF-8", "sec-fetch-mode": "cors" },
        body: JSON.stringify(body),
        method: "POST",
        mode: "cors"
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            return data;
        });
}

function get(path) {
    return fetch(`${host}${path}`, {
        credentials: "omit",
        headers: { "content-type": "application/json;charset=UTF-8", "sec-fetch-mode": "cors" },
        method: "GET",
        mode: "cors"
    })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            return data;
        });
}

const http = {
    post: post,
    get: get
};

export default http;
