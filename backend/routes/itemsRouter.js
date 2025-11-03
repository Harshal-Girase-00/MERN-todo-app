const express = require("express");

const itemsRouter = express.Router();

const itemsController = require("../controllers/itemsController");

itemsRouter.get("/",itemsController.getAllItems);
itemsRouter.post("/",itemsController.createItems);
itemsRouter.delete("/:id",itemsController.deleteItem);
itemsRouter.put("/:id/completed",itemsController.markCompleted);

module.exports = itemsRouter;
