const express = require('express')
const userModel = require('../Models/userModel')
const HandleError = require('../utils/handleError')
const sendToken = require('../utils/jwtToken')
const router=express.Router()




exports.registerUser=async (req,res,next)=>{

    const {name,email,password}=req.body 

    let user=await userModel.create({

        name,
        email,
        password,
        avatar: {
        public_id: "temp public id",
        url:"temp url "
        },

    })

    sendToken(user,200,res)

}









exports.loginUser=async (req,res,next)=>{

    const {email,password}=req.body 
    
    // Both the feilds are must
    if(!email || !password){
        return next(new HandleError("Email or Password Cannot be blank",400))
    }

    // checkout in the database if there exist any user with the given email 
    let user=await  userModel.findOne({email}).select('+password')

    // if therre is no user with that email id
    if(!user){
        return next(new HandleError("Email or Password is incorrect",401))
    }

    // if there exists a user with the enteredemailid verify its password
    let isValiduser=await user.verifyPassword(password)

    // if verification fails
    if(!isValiduser){
        return next( new HandleError("Email or Password is incorrect",401))
    }

    

    // Remove password from the output
    user.password = undefined;


    sendToken(user,200,res)




    

}