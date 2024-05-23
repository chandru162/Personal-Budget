const express=require('express')
const app=express()
require('dotenv').config()
const user = require('./router/user.js')
const mongodb = require('./config/db.js')
const port = process.env.PORT
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.json())
// app.use('/auth',user)
mongodb()
 
app.get('/',(req,res)=>{
    res.send('home page')
})
app.use('/userdetails',user)

app.listen(port,()=>{
    console.log(`server is running on port ${port}`) 
})