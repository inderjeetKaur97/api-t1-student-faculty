const express=require('express')
const app = express()
const dbConnect = require('./db/conn')
const studentRoute = require('./api/routes/student')

app.use(express.urlencoded({extended:false}))
app.use(express.json())

//routes handling
app.use('/student',studentRoute)

app.use((req,res,next)=>{
    res.status(404).json({
        error:"Not Found"
    })
})

module.exports=app