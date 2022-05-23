const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Joi = require("joi"); // joi is an object used for validation
const { number } = require("joi");

const profileSchema= new mongoose.Schema({
    user: {type: Schema.Types.ObjectId,   //clé étrangère entre profile Model et user Model  
        // view mongoose documentation  // pour récupérer les infos du user spécifique à ce profil 
        ref: "user",
        required: true
      },
    phone_number:{type: Number, required:true},
    country: { type: String, required: true },
	city: { type: String, required: true },
	postal_code: { type: String, required: true },
	dob: { type: Date, required: true }},
    {
        timestamps: true,
      }
);

const validate = (profile) => {
	const schema = Joi.object({
        user: Joi.string().required(),
		phone_number: Joi.number().required(),
        country: Joi.string().required(),
        city: Joi.string().required(),
        postal_code: Joi.string().required(),
		dob: Joi.date().required(),
	});
	return schema.validate(profile);
};


const Profiles =mongoose.model("profiles", profileSchema);
module.exports={Profiles, validate}