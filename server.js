var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
// var apiRoutes = require('./app/routing/apiRoutes');
// var htmlRoutes = require('./app/routing/htmlRoutes');

var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(apiRoutes());
// app.use(htmlRoutes());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("The server is listening at https://localhost:" + PORT);
});