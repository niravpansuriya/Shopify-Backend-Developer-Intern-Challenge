// to validate data in api
const { validationResult } = require("express-validator");

//------------------------------------------------------------------------

/**
 * This middleware throws error if there is any error in
 * data validation
 */
const validateData = async (req, res, next) => {
	// data validation
	const errors = validationResult(req);

	// if there is any error
	if (!errors.isEmpty()) {
		return res.status(400).send({ status: 400, errors: errors.array() });
	}

	// if there is not any error
	next();
};

//------------------------------------------------------------------------

module.exports = { validateData };
