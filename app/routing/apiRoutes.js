var express = require("express");
var path = require("path");
var friends = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var newUser = req.body;
        console.log(newUser);
        // var results = "test";

        var totalDifferences = {
            name: "",
            totalDifference: ""
        };
        for (var i = 0; i < newUser.scores.length; i++) {
            newUser.scores[i] = Number(newUser.scores[i]);
        };

        console.log("newUser after converting scores to numbers \n");
        console.log(newUser);

        var tempResults = []; //[friends.length];
        // tempResults

        // var populateTempResults = function(){}, determineResults = function(){}, populateTempResults2 = function(){};

        var x = 0, y = 0, z = 0, individualDifferences = 0;


        var populateTempResults3 = function () {
            if (resultsPassed === false) {
                console.log(totalDifferences);
                console.log("tempResults at start of populateTempResults3");
                console.log(tempResults);

                console.log("friends[" + x + "].name is: " + friends[x].name);
                console.log("tempResults before setting tempDifferences.name = friends[x].name");
                console.log(tempResults);
                totalDifferences.name = friends[x].name;
                console.log("tempResults after setting tempDifferences.name = friendsa[x].name");
                console.log(tempResults);
                console.log("totalDifferences is: ");
                console.log(totalDifferences);
                console.log("tempResults before setting tempDifferences.difference = individualDifferences");
                console.log(tempResults);
                totalDifferences.totalDifference = individualDifferences;
                console.log("tempResults after setting tempDifferences.difference = individualDifferences");
                console.log(tempResults);
                console.log("the updates totalDifferences.totalDifference is: " + totalDifferences.totalDifference);
                console.log("value of tempResults before push");
                console.log(tempResults);
                console.log("the current length of tempResults before the push: " + tempResults.length);
                tempResults.push(totalDifferences);
                console.log("tempResults after pushing totalDifferences");
                console.log(tempResults);
                console.log("before incrementing x: " + x);
                x++;
                console.log("after incrementing x: " + x);
                populateTempResults();
            }

            else {
                return;
            }
        };

        var populateTempResults2 = function () {
            if (resultsPassed === false) {
                if (y < 10) {
                    console.log("position y is: " + y);
                    var tempNum = 0;
                    console.log("tempNum is: " + tempNum);

                    console.log("friends[" + x + "].scores[" + y + "] is: " + friends[x].scores[y]);
                    tempNum = Math.abs(friends[x].scores[y] - newUser.scores[y]);
                    console.log("the value of tempNum after absolute value is: " + tempNum);
                    individualDifferences += tempNum;
                    console.log("the updated value of individualDifferences is: " + individualDifferences);
                    y++;
                }

                else {
                    populateTempResults3();
                }
                populateTempResults2();
            }
            else {
                return;
            }
        };

        // var totalDifferences = {
        //     name: "",
        //     totalDifference: ""
        // };

        var populateTempResults = function () {
            if (resultsPassed === false) {
                // console.log("the value of friends.length is: " + friends.length);
                // for (var x = 0; x < friends.length; x++) {
                console.log("current value of x at start of populateTempResults() is: " + x);
                if (x < friends.length) {
                    console.log("position x is: " + x);
                    var individualDifferences = 0;
                    console.log("individualDifferences is: " + individualDifferences);
                    // for (var y = 0; y < 10; y++) {
                    populateTempResults2(y = 0);
                    // var populateTempResults2 = function () {
                    //     if (y < 10) {
                    //         console.log("position y is: " + y);
                    //         var tempNum = 0;
                    //         console.log("tempNum is: " + tempNum);

                    //         console.log("friends[" + x + "].scores[" + y + "] is: " + friends[x].scores[y]);
                    //         tempNum = Math.abs(friends[x].scores[y] - newUser.scores[y]);
                    //         console.log("the value of tempNum after absolute value is: " + tempNum);
                    //         individualDifferences += tempNum;
                    //         console.log("the updated value of individualDifferences is: " + individualDifferences);
                    //         y++;
                    //     };
                    //     populateTempResults2();
                    // };

                    // console.log(totalDifferences);

                    // console.log("friends[" + x + "].name is: " + friends[x].name);
                    // totalDifferences.name = friends[x].name;
                    // console.log("totalDifferences is: ");
                    // console.log(totalDifferences);
                    // totalDifferences.totalDifference = individualDifferences;
                    // console.log("the updates totalDifferences.totalDifference is: " + totalDifferences.totalDifference);
                    // tempResults.push(totalDifferences);
                    // console.log("tempResults after pushing totalDifferences");
                    // console.log(tempResults);
                    // x++;
                };
                // populateTempResults();
                determineResults();
            }

            else {
                return;
            }
        };

        var resultsPassed = false;
        var passResult = function (passed) {
            console.log("passed: " + passed);
            if (passed === false) {
                console.log("final value of tempResults is:");
                console.log(tempResults);

                var results = tempResults;
                passed = true;

                console.log("value of results is: ");
                console.log(results);

                resultsPassed = passed;
                // return res.json(results);
            }
            else {
                console.log("results already passed");
            }

            return res.json(results);
        };

        var determineResults = function () {
            if (resultsPassed === false) {
                // for (var x = 0; x < tempResults.length; x++) {
                console.log("the value of tempRsults.length at beinging of determineResults() is: " + tempResults.length);
                console.log("the current value of tempResults is: ");
                console.log(tempResults);
                if ((z + 1) < tempResults.length) {
                    console.log("z is: " + z);
                    console.log("current length of tempResults before inner if: " + tempResults.length);
                    if ((tempResults[z].totalDifference < tempResults[z + 1].totalDifference) && ((z + 1) >= (tempResults.length - 1))) {
                        tempResults.slice(z, z);
                        console.log("tempResults.length after slice: " + tempResults.length);
                        console.log("new value of tempResults is:");
                        console.log(tempResults);
                        console.log("new value of x is: " + z);
                    }

                    else if ((tempResults[z].totalDifference > tempResults[z + 1].totalDifference) && ((z + 1) >= (tempResults.length - 1))) {
                        tempResults.slice((z + 1), (z + 1));
                        console.log("tempResults.length after slice: " + tempResults.length);
                        console.log("new value of tempResults is:");
                        console.log(tempResults);
                        console.log("new value of x is: " + z);
                    }

                    else {
                        z++;
                    }
                    determineResults();
                };
                console.log("resultsPassed: " + resultsPassed);
                passResult(resultsPassed);
            }

            else {
                return;
            }
        };

        populateTempResults();
        // determineResults();

        // var passResult = function() {
        // console.log("final value of tempResults is:");
        // console.log(tempResults);

        // var results = tempResults;

        // console.log("value of results is: ");
        // console.log(results);

        // res.json(results);
        // };
        // tempResults = [];
        // };
    });
};