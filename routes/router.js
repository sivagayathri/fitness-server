//import express
const jwt=require('jsonwebtoken')

const express=require('express')
//router()
const router=new express.Router()
const jwtmiddleware=(req,res,next)=>{
    console.log("middle ware");
    const token=req.headers['verify-token']
try{
    const data=jwt.verify(token,"RESTFULAPIs")
console.log(data);
req.currentuserid=data.loginid
next()
}
catch(error)
{res.status(404).json(error)}
}

const usercontroller=require('../controller/usercontroller')
const admincontroller=require('../controller/admincontroller')
const workoutcontroller=require('../controller/workoutcontroller')
const mealcontroller=require('../controller/mealcontroller')
const trainercontroller=require('../controller/trainercontroller')
router.post('/admin/admin',admincontroller.login)
router.post('/register',usercontroller.register)
router.post('/login',usercontroller.login)
router.get('/diet/:userid',jwtmiddleware,usercontroller.diet)
router.get('/admin/collection',usercontroller.table)
router.get('/workout',workoutcontroller.workkout)
router.get('/userworkout/:id',workoutcontroller.viewproduct)
router.get('/meals',mealcontroller.mealregister)
router.get('/trainer',trainercontroller.trainerget)
module.exports=router