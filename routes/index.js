var express=require("express");
var router=express.Router();
var passport=require("passport");
var User=require("../models/user");
//index routes
router.get('/', function(req,res){
    res.render("index");
});



//Authentication Routes will go here
// ***********************************
router.get("/register", function(req,res){
    res.render("register");
});

router.post("/register", function(req,res){
    var newUser=new User({username: req.body.username});
   User.register(newUser, req.body.password, function(err,user){
       if(err){
           console.log(err);
           return res.render("register");
       }
       passport.authenticate("local")(req,res,function(){
           res.redirect("/");
       });
   });
    
});

//login form
router.get('/login', (req, res)=> {
    res.render('login');
  });
  
router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
  }), (req, res)=> {
  
});

router.get('/logout', (req, res)=> {
    req.logout();
    res.redirect('/');
});

module.exports=router;

