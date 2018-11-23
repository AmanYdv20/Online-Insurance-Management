var express=require("express");
var router=express.Router();

var Life=require("../models/life");

//vehicle route
router.get("/", function(req,res){
    Life.find({},function(err, lifes){
        if(err){
            console.log("ERROR");
        } else {
            res.render("life", {lifes: lifes});
        }
    })
});

router.get("/:id", function(req, res){
    Life.findById(req.params.id, function(err,foundlife){
        if(err){
            res.redirect("/life");
        } else {
            res.render("showlife", {foundlife: foundlife});
        }
    })
});

router.get("/:id/register", function(req,res){
    Life.findById(req.params.id, function(err, foundEntry){
        if(err){
            res.redirect("vehicles");
        } else {
            console.log(req.params);
            res.render("registerPolicy", {foundEntry: foundEntry});
        }
    })
});

module.exports=router;