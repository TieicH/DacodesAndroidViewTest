"use strict";
var app = require("./app");
var port = 3001;

app.listen(port, () => {
  console.log("Servidor corriendo en el puerto: " + port);
});
