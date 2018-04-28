var express = require('express');
var path = require('path');

module.exports = function (app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

        app.get("/:route\*", function (req, res) {
        var route = req.params.route;
        // var route2 = req.params.route2;
        // var params0 = req.params.0;
        console.log(req.params);
        // console.log(req);
        console.log("length of req.params: " + req.param.length);
        // console.log(req.params[0]);

        console.log(route);
        // console.log(route2);
        if ((route === "survey") && (req.params[0] === "")) {
            // app.get("/survey", function (req, res) {
                res.sendFile(path.join(__dirname, "../public/survey.html"));
            // });
        }

        else {
            // app.get("*", function (req, res) {
                res.sendFile(path.join(__dirname, "../public/home.html"));
            // });
        }
    });
}; 
