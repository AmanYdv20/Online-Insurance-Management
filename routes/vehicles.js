var express=require("express");
var router=express.Router();

var Vehicle=require("../models/vehicle");

//vehicle route
router.get("/", function(req,res){
    Vehicle.find({},function(err, vehicles){
        if(err){
            console.log("ERROR");
        } else {
            res.render("vehilces", {vehicles: vehicles});
        }
    })
});

router.get("/:id", function(req, res){
    Vehicle.findById(req.params.id, function(err,foundVehicle){
        if(err){
            res.redirect("/vehicles");
        } else {
            res.render("showvehicle", {foundVehicle: foundVehicle});
        }
    })
});

router.get("/:id/register", function(req,res){
    Vehicle.findById(req.params.id, function(err, foundEntry){
        if(err){
            res.redirect("vehicles");
        } else {
            res.render("registerPolicy", {foundEntry: foundEntry});
        }
    })
});

module.exports=router;