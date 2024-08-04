const express=require('express')
const app=express()
require('dotenv').config()
const user = require('./router/user.js')
const history = require('./router/history.js')
const utoamail = require('./router/UtoAmail.js')
const mongodb = require('./config/db.js')
const port = process.env.PORT
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.json())

mongodb()
 
app.get('/',(req,res)=>{
    res.send('server is running >> home page')

})
app.use('/user',user)

app.use('/history',history)
app.use('/utoamail',utoamail)

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})