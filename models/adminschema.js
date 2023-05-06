//define scheme for product
const mongoose=require('mongoose')
//using mongoose define schema
const adminschema=mongoose.Schema({
    adminid:{
        type:String,
        required:true,
        unique:true
    },password:{
        type:String,
        required:true

    }
    
})
//create model using the above schema
const admins=mongoose.model("admins",adminschema)


//export models
module.exports=admins