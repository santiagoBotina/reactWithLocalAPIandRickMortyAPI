const express = require("express");
const Router = express.Router();

//Api controller
const apiController = require("../controllers/api/apiController");

//Posting data from react
Router.post("/", apiController.postData);

//main endpoint
Router.get("/", apiController.getData);

// All other GET requests not handled before will return our React app
Router.get("*", apiController.noRoute);

module.exports = Router;
