// const { response } = require('express');
const Register=require('../models/register');

const jwt = require('jsonwebtoken');


module.exports.registerUser=async(req,res)=>{
    try {
        const {name,email,password}=req.body;
        if(!name|| !email || !password){
            return res.status(301).json({
                message:"Fileds Cannot be empty"
            })
        }
        const currentUser=await Register.findOne({email});
        if(!currentUser){

    const newUser=await Register.create({
        name,email,password
    })
    if(!newUser){
        return res.status(501).json({
            message:"Error in saving"
        })
    }
    return res.status(200).json({
        message:"User Registered Successfully",
        data:newUser
    })
    }else{
        console.log("U have already registered on our website please login to continue");
        return res.status(301).json({
            message:"Please Login to continue",
        })
    }

    } catch (error) {
        return res.status(501).json({
            message:"Internal Server Error",
        })
    }
}
module.exports.loginUser=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const currentUser=await Register.findOne({email});
        if(!currentUser){
            return res.status(301).json({
                message:"User Not Found, please register to continue",
            })
        }else{
            if(password===currentUser.password){
                //   console.log(process.env.SECRET);
                let token = jwt.sign(currentUser.toJSON(), "Umar", {
                    expiresIn: "10000000",
                  });
                  res.cookie('jwt',token);
                return res.status(200).json({
                    message:"Login Successfull",
                    data:token
                })
            }else{
                return res.status(301).json({
                    message:"Invalid email or password",
                })
            }
        }
        
    } catch (error) {
        return res.status(501).json({
            message:"Internal Server Error",
        })
    }
}

module.exports.verifyUser=async(req,res)=>{
//    console.log("User Verified Successfully",req.user);
   return res.status(200).json({
    message:"User Has been verified",
    data:req.user
   })
}