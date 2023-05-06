const mongoose=require('mongoose')
const trainerschema=mongoose.Schema({
    tid:{
        type:String,
        required:true,
        unique:true
    },
    photo:{
        type:String,
        required:true  
    },
    tname:{
        type:String,
        required:true   
    },
    mobile:{
        type:Number,
        required:true     
    },
    centre:{
        type:String,
        required:true
    }
})
const traineers=mongoose.model("traineers",trainerschema)


//export models
module.exports=traineers