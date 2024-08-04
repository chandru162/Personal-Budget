const mongoose=require('mongoose')

const usermail = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

const usermailmodel = new mongoose.model('UtoAmail', usermail)
module.exports=usermailmodel