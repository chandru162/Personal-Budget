const mongoose=require('mongoose')

const userhistory=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    purpose:{
        type:String,
        required:true
    },
    expence:{
        type:String,
        required:true
    }

})

const historymodle=mongoose.model('expencehistory',userhistory)
module.exports=historymodle;