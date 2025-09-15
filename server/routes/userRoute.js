const express = require('express')
const userModel = require('../Models/userModel')
const { registerUser } = require('../controllers/userController')
const router=express.Router()



router.post("/register",registerUser)



module.exports=router
