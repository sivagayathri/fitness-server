const db = require('./db')
const jwt = require('jsonwebtoken')
const register = (name,userid,password,weight,height,bmi) => {
    console.log('inside logic');
    //2.we've to check acno is existing in our exisiting bank database
    //asynchronous function call-promise()
    return db.User.findOne(
      {
       userid  //because key and value area same
  
      }).then((result) => {
        console.log(result);
        //2.1.if acno is existing,send response as "user already exist" to client
        if (result) {
  
          return {
            statusCode: 401,
            message: "User Already exist.....",
  
          }
        }
        else {
          //2.2.if acno is not existing,create acno in bank database with details as uname,pswd and
          const newUser = new db.User({
            name,
            userid,
            password,
            weight,
            height,
            bmi
          })
          //to store data in mongodb
          newUser.save()
          return {
            statusCode: 200,
            message: "Register successfully"
          }
        }
  
      })
  
    // send response as "register successfully" to client
  
  }//export



  const login = (userid, password) => {
    //to check the name and pswd available in database 
    console.log("hello server please respond");
    return db.User.findOne(
      {
        userid,
        password
      }).then((result) => {
      
        if(result){
          const token = jwt.sign({
            loginid:userid
          }, "supersecretekey123")
            return {
                statusCode: 200,
                message: "login successfull",
                currentUsername: result.name,
                currentuserid: userid,
                token
               }
        }
       
        else {
          return {
            statusCode: 404,
            message: "invalid acno and pswd"
          }
        }
      })
  }
  const store=(bmi,diet,workout)=>{
    console.log('here my admin');
    return db.Admin.findOne({
      bmi
    }).then((result)=>{
      console.log('hi there1111');
      if(result){
        return {
          statusCode: 401,
          message: "Already exist.....",

        }
      }else{
        const newadmin = new db.Admin({
          bmi,
          diet,
          workout
        })
        //to store data in mongodb
        newadmin.save()
        return {
          statusCode: 200,
          message: "Register successfully"
        }
      }
    })
  }
  const userdiet = (userid) => {
    //check acno is available in usercollection
    return db.User.findOne({
     userid
    }).then((result) => {
      if (result) {
        //acno is present
        //send balance to frontend
        return {
          statusCode: 200,
          bmi: result.bmi
        }
      }
      else {
        return {
          statusCode: 404,
          message: "invalid number"
        }
      }
    })
  }
  
  const loginn = (adminid, password) => {
    //to check the name and pswd available in database 
    console.log("hello server please respond");
    return db.Admin.findOne(
      {
        adminid,
        password
      }).then((result) => {
      
        if(result){
            return {
                statusCode: 200,
                message: "login successfull",
              
               }
        }
       
        else {
          return {
            statusCode: 404,
            message: "invalid acno and pswd"
          }
        }
      })
  }
  const table=()=>{
    console.log('get request');
  return db.User.find().then((result)=>{
    console.log(result);
    if(result){
     
     return result
   
     
    }else{
      return{
        statusCode:400,
        message:"no response"
      }
    }
   
  })
  }

module.exports = {
    register,
    login,
    store,
    userdiet,
    loginn,
    table
    
  }