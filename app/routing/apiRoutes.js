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

        var totalDifferences = {
            name: "",
            totalDifference: -999
        };
        for (var i = 0; i < newUser.scores.length; i++) {
            newUser.scores[i] = Number(newUser.scores[i]);
        };

        console.log("newUser after converting scores to numbers \n");
        console.log(newUser);

        var tempName = [];
        var aLength = -9999;
        aLength = friends.length;
        tempName.length = aLength;
        var tempDiff = [];
        tempDiff.length = aLength;
        var tempResults = { tempName, tempDiff };

        var x = 0, y = 0, z = 0, individualDifferences = 0;


        var populateTempResults3 = function () {
            if (resultsPassed === false) {
                console.log("tempResults at start of populateTempResults3");
                console.log(tempResults);

                console.log("friends[" + x + "].name is: " + friends[x].name);
                console.log("tempResults before setting tempDifferences.name = friends[x].name");
                console.log(tempResults);
                tempResults.tempName[x] = friends[x].name;
                console.log("tempResults after setting tempDifferences.name = friendsa[x].name");
                console.log(tempResults);
                console.log("totalDifferences is: ");
                console.log("tempResults before setting tempDifferences.difference = individualDifferences");
                console.log(tempResults);
                tempResults.tempDiff[x] = individualDifferences;
                console.log("tempResults after setting tempDifferences.difference = individualDifferences");
                console.log(tempResults);
                console.log("value of tempResults before push");
                console.log(tempResults);
                console.log("the current length of tempResults before the push: " + tempDiff.length);
                console.log("tempResults after pushing totalDifferences");
                console.log(tempResults);
                console.log("before incrementing x: " + x);
                x++;
                console.log("after incrementing x: " + x);
                individualDifferences = 0;
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

        var populateTempResults = function () {
            if (resultsPassed === false) {
                console.log("current value of x at start of populateTempResults() is: " + x);
                if (x < friends.length) {
                    console.log("position x is: " + x);
                    var individualDifferences = 0;
                    console.log("individualDifferences is: " + individualDifferences);
                    populateTempResults2(y = 0);
                };
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

                var results = [];
                // results.length = 2;
                var aName = "";
                for (var d = 0; d < tempResults.tempName.length; d++) {
                    aName = tempResults.tempName[d];
                    // // friends.findIndex
                    // console.log("aName: " + aName);
                    // var tempArray = [];
                    // tempArray = friends.filter(function (aName) {
                    //     results[0] = friends[tempArray.length].name;
                    //     results[1] = friends[tempArray.length].photo;
                    // });
                    function checkFriendsResult(friends) {
                        return friends.name === aName;
                    }

                    var resultLocation = friends.findIndex(checkFriendsResult);

                    results.push(friends[resultLocation].name);
                    results.push(friends[resultLocation].photo);
                }

                if (results.length < 2)
                {
                    var randNum = Math.floor(Math.random() * (results.length - 1));

                    var multipleResults = [];
                    if (randNum % 2 === 0) {
                        multipleResults.push(results[randNum]);
                        multipleResults.push(results[randNum + 1]);
                        results = [];
                    }

                    else {
                        multipleResults.push(results[randNum - 1]);
                        multipleResults.push(results[randNum]);
                        results = []
                    }

                    results.push(multipleResults[0]);
                    results.push(multipleResults[1]);
                }
                passed = true;

                console.log("value of results is: ");
                console.log(results);

                resultsPassed = passed;
            }
            else {
                console.log("results already passed");
            }

            // req.body = newUser;
            friends.push(req.body); //newUser);
            return res.json(results);
        };

        var determineResults = function () {
            if (resultsPassed === false) {
                console.log("the value of tempRsults.length at beinging of determineResults() is: " + tempDiff.length);
                console.log("the current value of tempResults is: ");
                console.log(tempResults);
                if ((z + 1) < tempDiff.length) {
                    console.log("z is: " + z);
                    console.log("current length of tempResults before inner if: " + tempDiff.length);
                    if ((tempResults.tempDiff[z] > tempResults.tempDiff[z + 1]) && ((z + 1) <= (tempDiff.length - 1))) {
                        console.log("This right side greater");
                        tempResults.tempDiff.splice(z, 1);
                        tempResults.tempName.splice(z, 1);
                        console.log("tempResults.tempDiff.length after slice: " + tempDiff.length);
                        console.log("new value of tempResults is:");
                        console.log(tempResults);
                        console.log("new value of x is: " + z);
                    }

                    else if ((tempResults.tempDiff[z] < tempResults.tempDiff[z + 1]) && ((z + 1) <= (tempDiff.length - 1))) {
                        console.log("This left side greater");
                        tempResults.tempDiff.splice((z + 1), 1);
                        tempResults.tempName.splice((z + 1), 1);
                        console.log("tempResults.tempDiff.length after slice: " + tempDiff.length);
                        console.log("new value of tempResults is:");
                        console.log(tempResults);
                        console.log("new value of x is: " + z);
                    }

                    else {
                        console.log("Neither side greater");
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
    });
};