const express = require("express");
const port = 5000;
const cors = require("cors");
const {
  getAllCharachters,
  addCharacter,
  updateCharacter,
  deleteOne,
} = require("./mongoDb/index");
const app = express();
const { db } = require("./mongoDb");

app.use(express.json());
app.use(express.urlencoded({ extended : true}))
app.use(cors());

app.get("/get", (req, res) => {
  getAllCharachters()
    .then((response) => res.status(200).json(response))
    .catch((err) => console.log(err));
});
app.post("/add", (req, res) => {
  addCharacter(req.body)
    .then((response) => res.status(201).json(response))
    .catch((err) => console.log(err));
});

app.put("/update/:id", (req, res) => {
  const id = req.params.id;
  const data = req.body;
  updateCharacter(data, { _id: id })
    .then((updatedCharacter) => {
      console.log(updateCharacter);
      res.status(202).json(updatedCharacter);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    });
});

app.delete("/delete/:id", (req, res) => {
  deleteOne({ _id: req.params.id })
    .then((resp) => res.status(203).json(resp))
    .catch((err) => console.log(err));
});
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
