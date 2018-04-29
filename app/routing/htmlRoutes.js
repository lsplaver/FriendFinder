var express = require('express');
var path = require('path');

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/:route\*", function (req, res) {
        var route = req.params.route;
        console.log(req.params);
        console.log("length of req.params: " + req.param.length);

        console.log(route);
        if ((route === "survey") && (req.params[0] === "")) {
            res.sendFile(path.join(__dirname, "../public/survey.html"));
        }

        else {
            res.sendFile(path.join(__dirname, "../public/home.html"));
        }
    });
}; 
