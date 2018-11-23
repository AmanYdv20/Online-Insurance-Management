var mongoose = require("mongoose");
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema=new mongoose.Schema({
    username: String,
    password: String,
    policies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Policy"
    }]
});

UserSchema.plugin(passportLocalMongoose);

module.exports=mongoose.model("User", UserSchema);