const mongoose=require('mongoose')
const userschema=mongoose.Schema({
    name:{
        type:String,
        required:true    
    },
    userid:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    weight:{
        type:Number,
        required:true
    },
    height:{
        type:Number,
        required:true
    },
    bmi:{
        type:Number,
        required:true
    }
})
//create model using the above schema
const users=mongoose.model("users",userschema)


//export models
module.exports=users