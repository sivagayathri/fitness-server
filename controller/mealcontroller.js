const meals=require('../models/mealschema')
exports.mealregister=async(req,res)=>{
    try{
        const meal=await meals.find()
        res.status(200).json(meal)
    }catch(e){
        res.status(401).json(error)
    }
}