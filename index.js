
//loads .env file contents into process.env
require('dotenv').config()
const express=require('express')
const cors=require('cors')
const jwt=require('jsonwebtoken')
//import connection.js file to connect mongodb
require('./db')
//import router
const router=require('./routes/router')
const server=express()
server.use(cors())
server.use(express.json())

//use router
server.use(router)

const PORT=process.env.PORT||3000
//test api
server.get('/',(req,res)=>{
    res.status(200).json("fit server server started")
})
server.listen(PORT,()=>{
    console.log(`FITNESS SERVER:${PORT}`);
})



































