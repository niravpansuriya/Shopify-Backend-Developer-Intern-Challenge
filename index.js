/**
 * This is the entry file
 */

// to use environment variables from .env file
require("dotenv").config();

// colorful logging
const colors = require("colors");

// to create a server
const express = require("express");

// to avoid cors during development
const cors = require("cors");

// item routes
const itemRouter = require("./server/router/item");
const connectDb = require("./server/db");

//------------------------------------------------------------------------

// create a server
const app = express();

// sever will run on this port, default is 80
const port = process.env.PORT || 80;

// to avoid cors during development
app.use(cors());

// to parse request body in json format
app.use(express.json());

//------------------------------------------------------------------------

/**
 * Routers
 */

// item routes
app.use("/api/v1/item", itemRouter);

// error handling
app.use((err, req, res, next) => {
	// I do not prefer to send proper error in error message
	// because some one can use it to attack on system
	// because sometimes uses can know system parameters
	// via error message, so I sent "internal server error"
	return res
		.status(500)
		.send({ status: 500, message: "internal server error" });
});

//------------------------------------------------------------------------

// connect database
connectDb()
	.then(() => {
		// on successful connection

		// use any logger
		console.log(colors.blue.inverse("Mongo DB connected "));

		// start server
		app.listen(port, () =>
			console.log(
				colors.green.inverse(`server is running on port ${port} `)
			)
		);
	})
	.catch((err) => {
		// on unsuccessful connection
		console.log(err);
	});
