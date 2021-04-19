const express = require("express")
const app = express()

const mongoose = require("mongoose")

//importing routes
const authRoutes = require('./routes/auth')

//Middleware
app.use(express.json())

//Routing middleware
app.use('/api/user',authRoutes)

mongoose.connect('mongodb+srv://sanjay:TV2En81vQ5MF3yII@cluster0.ozki2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' ,
{ useNewUrlParser: true,useUnifiedTopology: true } ,
    ()=>{
    console.log("Connected to Mongoose Database")
});

app.listen(3000, ()=>{
    console.log("server up and running")
})