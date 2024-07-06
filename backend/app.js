const express=require('express')
const app=express()
require('dotenv').config()
const user1 = require('./router/user.js')
const history = require('./router/history.js')
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

app.use('/user',user1)
app.use('/history',history)

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})