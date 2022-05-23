const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");


const signup =async(req, res)=>{
    const { error } = validate(req.body);
	if (error) return res.status(400).send({ message: error.details[0].message });

	const user = await User.findOne({ email: req.body.email });
	if (user)
		return res
			.status(403) // user have permission + data sent as JSON
			.send({ message: "User with given email already Exist!" }); //data sent back + access denied 

	const salt = await bcrypt.genSalt(Number(process.env.SALT));
	const hashPassword = await bcrypt.hash(req.body.password, salt);
	let newUser = await new User({
		...req.body,
		password: hashPassword,
	}).save();

	newUser.password = undefined;
	newUser.__v = undefined;
	res
		.status(200)
		.send({ data: newUser, message: "Account created successfully" });

}

	



const getAllUsers=async (req, res)=>{
	const users = await User.find().select("-password -__v");
	res.status(200).send({ data: users });
}

const getUserById=async (req, res)  =>{
	//validateObjectIdchecks if the object passed as an argument has an id property equal to what was passed in the db 
    //------>>> uses that value as its id parameter and continue on
    //______________________________________________
    //argument 2= auth contains information about how handling authentication
    //p.s: (in this case we are not authenticating).
    //_______________________________________________
	const user = await User.findById(req.params.id).select("-password -__v");
	res.status(200).send({ data: user });
}

const updateUserById=async (req, res)=>{
	const user = await User.findByIdAndUpdate(
		req.params.id,
		{ $set: req.body },{ new: true }).select("-password -__v"); 
	res.status(200).send({ data: user, message: "Profile updated successfully" });
}

const deleteUserById=async (req, res)=>{
	await User.findByIdAndDelete(req.params.id);
	res.status(200).send({ message: "Successfully deleted user." });}


module.exports={
	signup,
	getAllUsers,
	getUserById,
	updateUserById,
	deleteUserById,
	
}


