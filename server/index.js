const express = require("express");
const path = require("path");
const app = express();

//Router
const apiRoute = require("./routes/api");

//Static files
app.use(express.static(path.resolve(__dirname, "../client/build")));
//Parsing data from form
app.use(express.urlencoded({ extended: true }));
//JSON
app.use(express.json());

//PORT
const PORT = process.env.PORT || 3001;

app.use("/api", apiRoute);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
