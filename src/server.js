const express = require('express')
const bodyParser = require('body-parser')
const userRouter = require('./router/userRouter')
require('./db/mongoose')
const app = express()
 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(userRouter)
const port = process.env.PORT || 3000
app.listen(port, ()=> {
    console.log('Server is up to '+ port)
})