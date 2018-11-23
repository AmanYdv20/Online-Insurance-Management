var mongoose = require("mongoose");

var policySchema=new mongoose.Schema({
    name: String,
    type: String,
    description: String,
    duration: Number,
    customers: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
    }],
    created: {type: Date, default: Date.now}
});

module.exports=mongoose.model("Policy", policySchema);