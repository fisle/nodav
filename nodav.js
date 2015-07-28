/**
 * nodav
 * https://github.com/fisle/nodav
 *
 * Copyright (c) 2015 Petri Immonen
 * Licensed under the MIT license.
 */

// Require our dependencies first
var request = require('request');
var method = Nodav.prototype;
var parseString = require('xml2js').parseString;

function Nodav (config) {
    this._server = config.server;
    this._username = config.username;
    this._password = config.password;
}

method.get = function(url, method, payload) {
    method = method || 'GET';
    payload = payload || '';
    console.log(url);
    console.log(method);

    var options = {
        url: url,
        method: method,
        multipart: [{ body: payload }],
        headers: { 'User-Agent': 'nodav caldav library' },
        auth: {
            'user': this._username,
            'pass': this._password,
            'sendImmediately': false
        }
    };

    function callback(error, response, body) {
        console.log(response.statusCode);
        console.log(body);
    }
    request(options, callback);
};

method.getTasks = function() {
    this.get(this._server);
};

method.getEvents = function() {
};

module.exports = Nodav;
