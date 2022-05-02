const express = require("express");
const path = require("path");
const app = express();

//PORT
const PORT = process.env.PORT || 3001;

//Static files
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/api", (req, res) => {
  let respuesta = {
    info: {
      status: 200,
    },
    data: [
      {
        name: "Santiago",
        msg: "Hola soy Santiago",
      },
      {
        name: "Saul",
        msg: "Hola soy Saul",
      },
      {
        name: "Lina",
        msg: "Hola soy Lina",
      },
      {
        name: "María",
        msg: "Hola soy María",
      },
      {
        name: "Pepe",
        msg: "Hola soy Pepe",
      },
    ],
  };
  res.json(respuesta);
});

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
