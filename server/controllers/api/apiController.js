const db = require("../../database/models");
let futbolista = db.Futbolista;

let apiController = {
  getData: (req, res) => {
    futbolista.findAll().then((data) => {
      res.json(data);
    });
  },

  postData: (req, res) => {
    console.log(req.body);

    futbolista
      .create({
        name: req.body.name,
        age: req.body.age,
        squad_number: 9,
        position: "Ataque",
        nationality: req.body.nationality,
        team_id: 2,
      })
      .then(console.log("Futbolista creado"));
  },

  noRoute: (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  },
};

module.exports = apiController;
