
//DEFINE CONNECTION BETWEEN NODE AND MONGODB USING MONGOOSE

//import mongoose
const mongoose=require('mongoose')
//get connection string from env
const DB=process.env.DATABASE
//CONNECT MONGODB
mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("cart db database connected successsfully");
}).catch((error)=>{
    console.log(error);
})