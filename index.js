global.__base = __dirname;
const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require('body-parser');


/* Load in custom modules
--------------------------------- */
const {passport} = require('./config/middleware');
require('./config/db');
const components = require("./components");


/* express app
----------------------------------------------------------
*/
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());

app.use(cors());

app.use("/api", components.routes);



// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "/frontend/build")));

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/frontend/build/index.html"));
});


const port = process.env.PORT || 5000;
app.listen(port);
