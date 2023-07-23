const indexR = require("./index");

exports.routesInit = (app) => {
  app.use("/",indexR);
}