global.__base = __dirname;
const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require('body-parser');


/* Load in custom modules
--------------------------------- */
const components = require("./components");
// Load passport config
const {passport} = require('./config/middleware');
// Load DB config
require('./config/db');



/* express app
----------------------------------------------------------
*/
// Wrap server with express
const app = express();

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//Initialize passport module
app.use(passport.initialize());

// Allow CORS for dev purposes
app.use(cors());

//Load in routes
app.use("/api", components.routes);



// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "/frontend/build")));

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/frontend/build/index.html"));
});


const port = process.env.PORT || 5000;
app.listen(port);
