const express = require("express");
const { Food } = require("./model");
const { authorSControllers } = require("./controller");
const db = require("./mongodb");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/foods", async (req, res) => {
  try {
    let data = await Food.find({});
    res.status(200).send(data);
  } catch (err) {
    res.send(err);
  }
});

app.get("/food/:id", async (req, res) => {
  try {
    let id = req.params.id;
    console.log("id", id);
    let data = await Food.findById(id);
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.put("/food/:id", async (req, res) => {
  try {
    let data = await Food.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/food", async (req, res) => {
  try {
    let food = new Food(req.body);
    let data = await food.save();
    res.status(201).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});
app.get("/authors", authorSControllers.getAllAuthors);
app.get("/author/:id", authorSControllers.getAuthorById);
app.listen(9000, () => console.log("server is running on 9000"));
