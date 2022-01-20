// convert json to csv
const json2csv = require("json2csv").parse;

// Item mongoose model
const Item = require("../models/Item");

//------------------------------------------------------------------------

/**
 *
 * This controller gives list of all items
 */
const getItems = async (req, res, next) => {
	try {
		// get all items from database
		const items = await Item.find();

		// send items
		return res.status(200).send({ status: 200, data: { items } });
	} catch (error) {
		// use any logger
		console.log("There is error in getItems api", error);

		// default error handler
		next(error);
	}
};

/**
 * This controller gives details about single item
 */
const getItem = async (req, res, next) => {
	try {
		// get item id
		const { item_id } = req.params;

		// get item from database
		const item = await Item.findOne({ item_id });

		// if item not found
		if (!item) {
			return res
				.status(400)
				.send({ status: 400, error: "item not found" });
		}
		// send item
		return res.status(200).send({ status: 200, data: item });
	} catch (error) {
		// use any logger
		console.log("There is error in getItem api", error);

		// default error handler
		next(error);
	}
};

/**
 *
 * This controller creates item
 */
const createItem = async (req, res, next) => {
	try {
		// get data
		const { item_id, name, quantity, height, weight, color } = req.body;

		// upload data on database
		const item = new Item({
			item_id,
			name,
			quantity,
			height,
			weight,
			color,
		});

		// if there will be any error during saving item in db,
		// it will go inside catch, so it will be handled
		await item.save();

		return res
			.status(200)
			.send({ status: 200, message: "item created successfully" });
	} catch (error) {
		console.log("There is some error in createItem api", error);

		// default error handler
		next(error);
	}
};

/**
 * This controller updates item
 */
const updateItem = async (req, res, next) => {
	try {
		// get data
		const { item_id, name, quantity, color, weight, height } = req.body;

		// update in database
		await Item.findOneAndUpdate(
			{ item_id },
			{
				$set: {
					name,
					quantity,
					color,
					weight,
					height,
				},
			},
			{ runValidators: true }
		);

		return res
			.status(200)
			.send({ status: 200, message: "Update successful" });
	} catch (error) {
		console.log("There is some error in updateItem api", error);

		// default error handler
		next(error);
	}
};
/**
 *
 * This controller deletes item
 */
const deleteItem = async (req, res, next) => {
	try {
		// get data
		const { item_id } = req.body;

		// delete item in database
		await Item.deleteOne({ item_id });

		return res
			.status(200)
			.send({ status: 200, message: "item deleted successfully" });
	} catch (error) {
		console.log("There is some error in deleteItem api", error);

		// default error handler
		next(error);
	}
};

/**
 * This controller export items to csv data
 */
const exportCSV = async (req, res, next) => {
	try {
		// get all items from database
		const items = await Item.find().select(["-_id"]).lean();

		// convert to csv
		var csv = json2csv(items);

		// send csv
		res.attachment("inventory-items.csv");
		res.send(Buffer.from(csv));
	} catch (error) {
		console.log("There is some error in exportCSV", error);

		// default error handler
		next(error);
	}
};

//------------------------------------------------------------------------

// export controllers
module.exports = {
	getItems,
	getItem,
	createItem,
	updateItem,
	deleteItem,
	exportCSV,
};
