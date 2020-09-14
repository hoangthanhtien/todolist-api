const express = require("express");
const router = express.Router();
const apiController = require("../controller/api.controller");

router.get("/", apiController.getApi);

router.post("/", apiController.addTodo);

router.put("/", apiController.updateTodo);

router.post("/change-status/:id", apiController.completed);
router.delete("/delete-task/:id", apiController.deleteTodo);

module.exports = router;
