const workouts=require('../models/workoutschema')
exports.workkout=async(req,res)=>{
    try{
        const workout=await workouts.find()
        res.status(200).json(workout)
    }catch(e){
        res.status(401).json(error)
    }
}
exports.viewproduct = async (req, res) => {
    //get the id
    const id = req.params.id
    try {//logic
        const product = await workouts.findOne({id})
        if (product) {

            res.status(200).json(product)
        } else {
            res.status(404).json("item not found")
        }
    }
    catch (error) {
        res.status(401).json(error)
    }
}