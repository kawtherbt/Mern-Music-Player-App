const mongoose = require("mongoose");
// built-in method to validate IDs
module.exports = (req, res, next) => {
	if (!mongoose.Types.ObjectId.isValid(req.params.id))
	return res.status(404).send({ message: "Invalid ID." });

next();
};