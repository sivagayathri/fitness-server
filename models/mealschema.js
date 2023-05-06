const mongoose=require('mongoose')
const mealschema=mongoose.Schema({
    mealid:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String,
        required:true  
    },
    title:{
        type:String,
        required:true   
    },
    content:{
        type:String,
        required:true     
    }
})
const meals=mongoose.model("meals",mealschema)


//export models
module.exports=meals