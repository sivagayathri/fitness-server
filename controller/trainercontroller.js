const traineers=require('../models/trainerschema')
exports.trainerget=async(req,res)=>{
    try{
        const trainer=await traineers.find()
        res.status(200).json(trainer)
    }catch(e){
        res.status(401).json(e)
    }
}