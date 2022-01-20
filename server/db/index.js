// to manage mongo database
const mongoose = require("mongoose");

const colors = require("colors");
const mongoUri = process.env.MONGO_URI;

//------------------------------------------------------------------------

if (!mongoUri) {
	// use any logger
	console.log(
		colors.red.inverse("mongo uri not found in environment variables")
	);
}

//------------------------------------------------------------------------

/**
 * This method is used to establish the connection with mongo server
 * @returns Promise
 */
const connectDb = () => {
	return new Promise(async (resolve, reject) => {
		// connect with database
		try {
			await mongoose.connect(mongoUri);
			return resolve();
		} catch (error) {
			return reject(error);
		}
	});
};

//------------------------------------------------------------------------

module.exports = connectDb;
