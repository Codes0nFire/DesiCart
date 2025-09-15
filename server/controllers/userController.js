const express = require('express')
const userModel = require('../Models/userModel')
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

    res.status(201).json({
        success:true,
        user
    })

}