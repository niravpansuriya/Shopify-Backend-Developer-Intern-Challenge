const express = require("express");

// to create routes for server
const router = express.Router();

// controllers for item
const { getItems, createItem, deleteItem, exportCSV } = require("../controllers/item");

// item validator
const itemValidator = require("../validators/item");

//------------------------------------------------------------------------

// get all items
router.get("/list", getItems);

// create a item
router.post("/", itemValidator.crateItem, createItem);

// delete a item
router.delete("/", itemValidator.deleteItem, deleteItem);

// export data as csv
router.get("/csv",exportCSV)
//------------------------------------------------------------------------

// export router
module.exports = router;
