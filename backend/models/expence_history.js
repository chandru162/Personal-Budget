const mongoose=require('mongoose')

const userhistory=new mongoose.Schema({
    purpose:{
        type:String,
        require:true
    },
    expence:{
        type:String,
        require:true
    }

})

const historymodle=mongoose.model('expencehistory',userhistory)
module.exports=historymodle;