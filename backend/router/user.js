
const express = require('express');
const bodyParser = require('body-parser');
const usermodel = require('../models/user_models');
const router = express.Router();

router.use(bodyParser.json());

router.get('/', (req, res) => {
    res.send('user page');
});

router.post('/post', (req, res) => {
    console.log(req.body);
    const newuser = new usermodel(req.body);
    newuser.save()
        .then(response => {
            // console.log(response);
            res.send("User has been posted successfully");
        })
        .catch(err => {
            console.log(err);
            res.status(500).send("An error occurred while posting the user"); 
        });
});

router.get('/get/:email',(req,res)=>{
    // console.log(req.params.email)
    usermodel.find({email:req.params.email})
    .then(response=>res.send(response))
    .catch(err=>console.log(err))
    
})

router.get('/get', (req,res) => {
    // console.log(req.body);
    usermodel.find()
        .then(users => res.send(users))
        .catch(err => console.log(err));
        
});

router.delete('/delete/:_id',(req,res)=>{
    // console.log(req.body)
    usermodel.findByIdAndDelete(req.params._id)
    .then(response=>res.send(response))
    .catch(err=>console.log(err))

})
module.exports = router;
