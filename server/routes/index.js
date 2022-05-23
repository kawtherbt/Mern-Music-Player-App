const router = require("express").Router();
const admin = require("../middleware/admin"); // admin-only permissions to check user details 
const auth = require("../middleware/auth");
const validateObjectId = require("../middleware/validateObjectId");
const {signup,  getAllUsers, getUserById, updateUserById, deleteUserById} =require( "../controllers/UserController");
const { createSong, getAllSongs, updateSong, deleteSongById, likeSong, likedSongs } = require("../controllers/SongController");
const { createPlaylist, editPlaylistById, addSongToPlaylist, removeSongFromPlaylist, favourite, getRandomPlaylists, getPlaylistById, getAllPlaylists, deletePlaylistById } = require("../controllers/PlayslistController");
const { login } = require("../controllers/loginController");
const { Search } = require("../controllers/SearchController");
const { createProfile, getAllProfiles, getOneProfile, deleteProfile}= require("../controllers/ProfileController")

//auth routes  /login
router.post("/login", login );


//user routes /users
router.post("/", signup );

router.get("/:id", [validateObjectId, auth], getUserById );

router.put("/:id", [validateObjectId, auth], updateUserById);

router.delete("/:id", [validateObjectId, admin],deleteUserById);

router.get("/", admin, getAllUsers);


//song routes /songs
router.post("/create", admin, createSong);

router.get("/getsongs/all", getAllSongs);

router.put("/update/:id", [validateObjectId, admin], updateSong);

router.delete("/delete/:id", [validateObjectId, admin], deleteSongById);

router.put("/like/:id", [validateObjectId, auth], likeSong);

router.get("/liked/liked", auth, likedSongs);



//playlist routes /playlists
router.post("/createplaylist", auth, createPlaylist );

router.put("/edit/:id", [validateObjectId, auth],editPlaylistById );

router.delete("/remove/:id", [validateObjectId, auth],deletePlaylistById);

router.get("/getplaylist/:id", [validateObjectId, auth],getPlaylistById);

router.put("/add-song/add", auth, addSongToPlaylist);

router.put("/remove-song/remove", auth,removeSongFromPlaylist );

router.get("/favourite/:id", auth,favourite );

router.get("/random/random", auth, getRandomPlaylists);

router.get("/playlists/all", auth,getAllPlaylists );



//profile routes
router.post("/createprofile",  auth,createProfile)

router.get("/getone/:id",auth, getOneProfile)

router.get("/getall/all",admin,getAllProfiles )

router.delete("/deleteprofile/:id",[validateObjectId, auth],deleteProfile)


//search routes  /search
router.get("/", auth, Search);






module.exports = router;