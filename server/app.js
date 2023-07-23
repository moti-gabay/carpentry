const express = require("express");
const http = require("http");
const path = require("path");
const {routesInit} = require("./routes/configRoutes");
const { config } = require("./config/secret");
const cors = require("cors")
require("./db/mongoConnect");

const app = express();
// prevent cors problem
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));
routesInit(app);
const server = http.createServer(app);
const port = config.PORT;
server.listen(port);