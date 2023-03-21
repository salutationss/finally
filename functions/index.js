const admin = require('firebase-admin');
admin = admin.initializeApp();

const {deleteImage}  =  require("./src/deleteImage");
const {fetchImage}  =  require("./src/fetchImage");
const {fetchImages}  =  require("./src/fetchImages");
const {genImage}  =  require("./src/genImage");
const {setImageVisibility}  =  require("./src/setImageVisibility");
const {signinGridPadUser}  =  require("./src/signinGridPadUser");
const {signupGridPadUser}  =  require("./src/signupGridPadUser");

exports.deleteImage = deleteImage
exports.fetchImage = fetchImage
exports.fetchImages = fetchImages
exports.genImage = genImage
exports.setImageVisibility = setImageVisibility
exports.signinGridPadUser = signinGridPadUser
exports.signupGridPadUser = signupGridPadUser