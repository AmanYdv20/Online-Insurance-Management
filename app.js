const express=require('express');
const app=express();

app.get('/', (req,res)=>{
    res.send("HII exist");
});

app.listen(3000, (res, error) =>{
    console.log("Application has been started on port 3000")
});