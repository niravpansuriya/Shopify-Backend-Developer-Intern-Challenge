// to validate post request data
const { body } = require("express-validator");

const Item = require("../models/Item");

//------------------------------------------------------------------------

module.exports = {
	// validator for create item api
	crateItem: [
		body("item_id", "item_id is required").exists(),
		body("item_id").custom(async (item_id) => {
			// check if item id already exists
			const item = await Item.findOne({ item_id }).lean();
			if (item) {
				return Promise.reject("item_id already exists");
			}
		}),
		// check if name exists
		body("name", "name is required").exists(),

		// check quantity is positive number and exists
		body("quantity", "quantity is required").exists(),
		body("quantity", "quantity should be number").isNumeric(),
		body("quantity").custom((quantity) => {
			if (quantity < 0) {
				return new Error("quantity should be positive");
			}
			return true;
		}),

		// check height is positive number
		body("height", "height should be number").optional().isNumeric(),
		body("height")
			.optional()
			.custom((height) => {
				if (height < 0) return new Error("height should be positive");
				return true;
			}),

		// check weight is positive number
		body("weight", "weight should be number").optional().isNumeric(),
		body("weight")
			.optional()
			.custom((weight) => {
				if (weight < 0) return new Error("weight should be positive");
			}),
	],

	// validator for delete item api
	deleteItem: [
		// check item_id exists
		body("item_id", "item_id is required").exists(),
		body("item_id").custom(async (item_id) => {
			// check if item id already exists
			const item = await Item.findOne({ item_id }).lean();
			if (!item) {
				return Promise.reject("item not found");
			}
		}),
	],
};
