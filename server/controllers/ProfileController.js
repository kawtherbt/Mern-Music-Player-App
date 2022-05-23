const { validate, Profiles} = require("../models/profile")
const { User } = require("../models/user");


const createProfile=async (req, res) => {
	const { error } = validate(req.body);
	if (error) 
		return res.status(400).send({ message: error.details[0].message });

	const user = await User.findById(req.user._id);
	const profiles = await Profiles({ ...req.body, user: user._id }).save();
	


	res.status(201).send({ data: profiles });
}


const getAllProfiles = async (req ,res)=>{
    try {
       const data =  await Profiles.find().populate('user', ["name", "email", "isAdmin"])
       // populate méthode prédifinie pour récupérer des données d'un modèle déjà en relation avec moi (user)
       res.status(200).json(data)} 
         catch (error) {
        res.status(404).json(" Error: couldn't get profiles !")
    }
}


const getOneProfile = async (req ,res)=>{
        
        const profile = await Profiles.findById(req.params.id);
        if (!profile) return res.status(404).send("not found");
    
        res.status(200).send({ profile });
    };
    

const deleteProfile = async (req ,res)=>{
        const user = await User.findById(req.user._id);
        const profile = await Profiles.findById(req.params.id);
        if (!user._id.equals(profile.user))
            return res
                .status(403)
                .send({ message: "User don't have access to delete!" });
    
        
        await profile.remove();
        res.status(200).send({ message: "Removed from profiles" });
    };

module.exports={
createProfile,
getAllProfiles,
getOneProfile,
deleteProfile
}