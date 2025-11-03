// Core Module
const path = require("path");

// External Module
const express = require("express");
const cors = require("cors")

const { default: mongoose, Collection } = require("mongoose");
const bodyParser = require("body-parser");

//Local Module
const errorsController = require("./controllers/errors");
const itemsRouter = require("./routes/itemsRouter");


const app = express();
const DB_PATH =
  "mongodb+srv://Harsh3106:Achanak123@cluster0.0hy1k0s.mongodb.net/todoapp?retryWrites=true&w=majority&appName=Cluster0";

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use('/api/todo',itemsRouter);
app.use(errorsController.pageNotFound);

const PORT = 18;

mongoose.connect(DB_PATH).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
  });
});
