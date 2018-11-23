var mongoose = require("mongoose");

var lifeSchema=new mongoose.Schema({
    name: String,
    type: String,
    description: String,
    duration: Number,
    created: {type: Date, default: Date.now}
});

module.exports=mongoose.model("Life", lifeSchema);