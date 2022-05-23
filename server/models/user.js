const mongoose= require("mongoose")
const jwt = require("jsonwebtoken")
const Joi = require("joi") // joi is an object used for validation
const passwordComplexity= require("joi-password-complexity")

// Schemas are used to define the data types of each field 
const userSchema= new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, unique: true, required: true },
	password: { type: String, required: true },
	gender: { type: String, required: true },
	dob: { type: Date, required: true },
	likedSongs: { type: [String], default: [] },
	playlists: { type: [String], default: [] },
	isAdmin: { type: Boolean, default: false },
});

// method to generate token 
userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign(
		{ _id: this._id, username: this.username, isAdmin: this.isAdmin },
		process.env.JWTPRIVATEKEY,
		{ expiresIn: "100d" }
	);
	return token;
};

// Joi's validate method to check if the user meets all of the requirement listed below
const validate = (user) => {
	const schema = Joi.object({
		name: Joi.string().min(3).max(10),
		username: Joi.string().min(3).max(10),
		email: Joi.string().email().required(),
		password: passwordComplexity().required(),
		dob: Joi.date().required(),
		gender: Joi.string().valid("male", "female", "non-binary")
	});
	return schema.validate(user);
};

const User = mongoose.model("user", userSchema);



module.exports = { User, validate };
