var mongoose = require("mongoose");

var policySchema=new mongoose.Schema({
    name: String,
    type: String,
    duration: Number,
    number: Number,
    installment: Number,
    newMoney: Number,
    description: String,
    customers: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
    }],
    created: {type: Date, default: Date.now}
});

module.exports=mongoose.model("Policy", policySchema);