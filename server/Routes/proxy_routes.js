"use strict";

var express = require("express");
var proxyController = require("../Controllers/proxy_controller");

var citaApi = express.Router();

citaApi.get("/games", proxyController.getGames);
citaApi.get("/players", proxyController.getPlayers);
citaApi.get("/stadistics", proxyController.getStadistics);

module.exports = citaApi;
