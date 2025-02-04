const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const yaml = require("yamljs");
const path = require("path");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API REST Design-First",
      version: "1.0.0",
    },
  },
  apis: ["./src/routes/*.js"],
};

const swaggerDocument = yaml.load(path.join(__dirname, "../../openapi.yaml"));
const specs = swaggerJsdoc(options);

module.exports = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
