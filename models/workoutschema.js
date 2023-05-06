const mongoose=require('mongoose')
const workoutschema=mongoose.Schema({


    bodyPart:{
        type:String,
        required:true   
    },
    equipment:{
        type:String,
        required:true   
    },
    gifUrl:{
        type:String,
        required:true   
    },
    id:{
        type:String,
        required:true ,unique:true  
    },
    name:{
        type:String,
        required:true   
    },
    target:{
        type:String,
        required:true   
    }
})
const workouts=mongoose.model("workouts",workoutschema)


//export models
module.exports=workouts