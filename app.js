const express=require('express');
const app=express();
const bodyParser=require("body-parser");
const mongoose=require("mongoose");

mongoose.connect('mongodb://localhost:27017/insurance_system');
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static('public'));

var vehicleSchema=new mongoose.Schema({
    name: String,
    type: String,
    description: String,
    duration: Number,
    created: {type: Date, default: Date.now}
});

var Vehicle=mongoose.model("Vehicle", vehicleSchema);

//index routes
app.get('/', function(req,res){
    res.redirect("/vehicles");
});

//vehicle route
app.get("/vehicles", function(req,res){
    Vehicle.find({},function(err, vehicles){
        if(err){
            console.log("ERROR");
        } else {
            res.render("vehilces", {vehicles: vehicles});
        }
    })
});

// app.get("/vehicles/new", function(req, res){
//     res.render("new");
// });



app.listen(3000, (res, error) =>{
    console.log("Application has been started on port 3000")
});