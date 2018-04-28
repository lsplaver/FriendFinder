var express = require("express");
var path = require("path");
var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });
};