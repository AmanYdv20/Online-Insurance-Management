var express=require('express');
var app=express();
var bodyParser=require("body-parser");
var mongoose=require("mongoose");
var Vehicle = require("./models/vehicle");
var seedDB = require("./seed");

mongoose.connect('mongodb://localhost:27017/insurance_system');
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static('public'));

seedDB();

//index routes
app.get('/', function(req,res){
    res.render("index");
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

app.get("/vehicles/new", function(req, res){
    res.render("new");
});

app.post("/vehicles", function(req, res){
    console.log(req.body.vehicle);
    Vehicle.create(req.body.vehicle, function(err, newEntry){
        if(err){
            res.render("/new");
        } else {
            res.redirect("/vehicles");
        }
    })
});

app.get("/vehicles/:id", function(req, res){
    Vehicle.findById(req.params.id, function(err,foundVehicle){
        if(err){
            res.redirect("/vehicles");
        } else {
            res.render("showvehicle", {foundVehicle: foundVehicle});
        }
    })
});

app.get("/vehicles/:id/register", function(req,res){
    Vehicle.findById(req.params.id, function(err, foundEntry){
        if(err){
            res.redirect("vehicles");
        } else {
            res.render("registerPolicy", {foundEntry: foundEntry});
        }
    })
});


app.listen(3000, (res, error) =>{
    console.log("Application has been started on port 3000")
});