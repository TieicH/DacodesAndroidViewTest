"use strict";
const axios = require("axios");

const getGames = (req, res) => {
  axios
    .get("https://venados.dacodes.mx/api/games", {
      headers: { Accept: "application/json" }
    })
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(error => {
      res.status(500).send({
        message: "Error en la petición",
        error: error.message,
        stack: error.stack
      });
    });
};

const getPlayers = (req, res) => {
  axios
    .get("https://venados.dacodes.mx/api/players", {
      headers: { Accept: "application/json" }
    })
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(error => {
      res.status(500).send({
        message: "Error en la petición",
        error: error.message,
        stack: error.stack
      });
    });
};
const getStadistics = (req, res) => {
  axios
    .get("https://venados.dacodes.mx/api/statistics", {
      headers: { Accept: "application/json" }
    })
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(error => {
      res.status(500).send({
        message: "Error en la petición",
        error: error.message,
        stack: error.stack
      });
    });
};

module.exports = {
  getGames,
  getPlayers,
  getStadistics
};
