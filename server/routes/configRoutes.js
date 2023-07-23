const indexR = require("./index");
const usersR = require("./users");
const productsR = require("./products")

exports.routesInit = (app) => {
  app.use("/",indexR);
  app.use("/users",usersR);
  app.use("/products", productsR);
}