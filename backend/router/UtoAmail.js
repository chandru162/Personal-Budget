
const express = require('express');
const bodyParser = require('body-parser');
const usermailmodel = require('../models/usermail_model')
const router = express.Router();

router.use(bodyParser.json());

router.get('/', (req, res) => {
    console.log(req.body)
    res.send("user to Admin mail home page")
})

router.post('/post', (req, res) => {
    res.send("user to Admin mail post page")
    const usermails = new usermailmodel(req.body);
    usermails.save()
    console.log(req.body)

});
// router.get('/get/:email', (req, res) => {
//     // res.send("get page")
//     usermailmodel.find({ email: req.params.email })
//         .then(responce => res.send(responce))
//         .catch(error => res.send(error))

// });
router.get('/get', (req, res) => {
    // console.log(req.body);
    usermailmodel.find()
        .then(responce => res.send(responce))
        .catch(err => console.log(err));

});

router.delete('/delete:_id', (req, res) => {
    // console.log(req.body);
    usermailmodel.delete({_id:req.params._id})
        .then(responce => res.send(responce))
        .catch(err => console.log(err));

});

module.exports = router