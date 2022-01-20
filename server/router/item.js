const express = require("express");

// to create routes for server
const router = express.Router();

// controllers for item
const {
	getItems,
	createItem,
	updateItem,
	deleteItem,
	exportCSV,
	getItem,
} = require("../controllers/item");
const { validateData } = require("../middlewares");

// item validator
const itemValidator = require("../validators/item");

//------------------------------------------------------------------------

// get all items
router.get("/list", getItems);

// get specific item
router.get("/details/:item_id", getItem);

// create an item
router.post("/create", itemValidator.crateItem, validateData, createItem);

// update an item
router.patch("/update", itemValidator.updateItem, validateData, updateItem);

// delete an item
router.delete("/delete", itemValidator.deleteItem, validateData, deleteItem);

// export data as csv
router.get("/export", exportCSV);
//------------------------------------------------------------------------

// export router
module.exports = router;
