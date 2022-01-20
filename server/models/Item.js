const mongoose = require("mongoose");

//------------------------------------------------------------------------

const itemSchema = new mongoose.Schema(
	{
		// unique for each items
		item_id: {
			unique: true,
			type: String,
			required: true,
			trim: true,
			lowercase: true,
		},
		name: {
			type: String,
			required: true,
			trim: true,
		},
		quantity: {
			type: Number,
			default: 0,
			min: 0,
		},
		color: {
			type: String,
			trim: true,
			lowercase: true,
		},
		height: {
			type: Number,
			min: 0,
		},
		weight: {
			type: Number,
			min: 0,
		},
		createdAt: Number,
		updatedAt: Number,
	},
	{
		timestamps: {
			currentTime: () => Date.now(),
		},
	}
);

const Item = mongoose.model("item", itemSchema);

//------------------------------------------------------------------------

module.exports = Item;
