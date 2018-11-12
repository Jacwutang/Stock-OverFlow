const express = require("express");
const path = require("path");
const session = require("express-session");
const cors = require("cors");
const components = require("./components");
const { db } = require("./config");
const appRoot = require("app-root-path");
// Wrap server with express
const app = express();

// Allow CORS for dev purposes
app.use(cors());

//Load in routes
app.use("/", components.routes);

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "/frontend/build")));

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/frontend/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);
