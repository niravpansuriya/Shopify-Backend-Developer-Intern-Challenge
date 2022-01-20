const express = require("express");

// to create routes for server
const router = express.Router();

// controllers for item
const {
	getItems,
	createItem,
	deleteItem,
	exportCSV,
	getItem,
} = require("../controllers/item");

// item validator
const itemValidator = require("../validators/item");

//------------------------------------------------------------------------

// get all items
router.get("/list", getItems);

// get specific item
router.get("/details/:item_id", getItem);

// create a item
router.post("/create", itemValidator.crateItem, createItem);

// delete a item
router.delete("/delete", itemValidator.deleteItem, deleteItem);

// export data as csv
router.get("/export", exportCSV);
//------------------------------------------------------------------------

// export router
module.exports = router;
