const users = require('../models/userschema')
const jwt = require('jsonwebtoken')
exports.register = async (req, res) => {
    const { name, userid, password, weight, height, bmi } = req.body
    try {
        const user = await users.findOne({ userid })
        if (user) {


            res.status(401).json("user already exist")
        } else {
            const newuser = new users({
                name, userid, password, weight, height, bmi
            })
            await newuser.save()
            res.status(200).json("user registeration sucessfull")
        }
    } catch (error) {
        res.status(401).json(error)
    }
}
exports.login = async (req, res) => {
    const { userid, password } = req.body
    try {
        const result = await users.findOne({
            userid, password
        })
        if (result) {

     res.json({ token: jwt.sign({ currentuserid:result.userid, currentUsername: result.name, }, 'RESTFULAPIs'), currentuserid: result.userid, currentUsername: result.name,bmi:result.bmi });
           
        }
    }
    catch (e) {
        console.error(e);
        res.status(500).json({
            message: "Server Error"
        });
    }

}

exports.diet = async (req, res) => {
    const userid = req.params.userid
    try {
        //to get all items from a collection
        const diet = await users.find({ userid })
        if (diet) {
       
           
           res.status(200).json(diet)
        }
        else {
            res.status(401).json("hey there an error")
        }
    } catch (error) {
        res.status(401).json(error)
    }
}
exports.table=async(req,res)=>{
    try {
        const allproducts = await users.find()
        //send to client
        res.status(200).json(allproducts)
    }
    catch (error) {
        res.status(401).json(error)
    }
}