// const express=require('express')
// const bodyParser=require('body-parser')
// const usermodle=require('../modles/user_models')
// var router=express.Router()



// router.use(bodyParser.json())

// router.get('/',(req,res)=>{
//     res.send('user page')
// })


// router.post('/post',(req,res)=>{
//     console.log(req.body)
//     const newuser=new usermodle(req.body)
//     newuser.save()
//     .then(responce=>console.log(responce))
//     .catch(err=>console.log(err))
//     res.send("user posting page")
// })

/////////////////////////

const express = require('express');
const bodyParser = require('body-parser');
const usermodel = require('../models/user_models'); // Corrected variable name and directory path
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
            console.log(response);
            res.send("User has been posted successfully"); // Sending response after save is successful
        })
        .catch(err => {
            console.log(err);
            res.status(500).send("An error occurred while posting the user"); // Handling error response
        });
});

module.exports = router;
