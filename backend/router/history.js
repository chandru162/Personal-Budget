
const express = require('express');
const bodyParser = require('body-parser');
const historymodle = require('../models/expence_history')
const router = express.Router();

router.use(bodyParser.json());

router.get('/',(req,res)=>{
   console.log(req.body)
   res.send("history home page")
})

router.post('/post',(req,res)=>{
   res.send("post page")
   const history = new historymodle(req.body);
   history.save()
   console.log(req.body) 

});
router.get('/get/:email',(req,res) => {
   // res.send("get page")
   historymodle.find({ email: req.params.email })
      .then(responce => res.send(responce))
      .catch(error => res.send(error))

});
router.get('/get',(req,res) => {
   // console.log(req.body);
   historymodle.find()
      .then(responce => res.send(responce))
      .catch(err => console.log(err));

});

module.exports= router