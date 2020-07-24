import request from 'superagent';

var baseUrl = 'http://localhost:8080';



function callback(resolve, reject, err, res) {
    if (err || !res.ok) {
        reject(err);
    } else {
        if (res.body) {
            resolve(res.body);
        } else {
            reject(res.body);
        }
    }
}

var serverConnector = {
    post: function (uri, body) {
        return new Promise(function (resolve, reject) {
            request
                .post(uri)
                .send(body)
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .end(callback.bind(null, resolve, reject));
        });
    },

    get: function (uri) {
        return new Promise(function (resolve, reject) {
            request
                .get(uri)
                .set('Accept', 'application/json')
                .end(callback.bind(null, resolve, reject));
        });
    },
    put: function (uri, body) {
        return new Promise(function (resolve, reject) {
            request
                .put(uri)
                .send(body)
                .set('Accept', 'application/json')
                .end(callback.bind(null, resolve, reject));
        });
    },
    del: function (uri) {
        return new Promise(function (resolve, reject) {
            request
                .del(uri)
                .set('Accept', 'application/json')
                .end(callback.bind(null, resolve, reject));
        });
    },
    baseUrl
};

export default serverConnector;
