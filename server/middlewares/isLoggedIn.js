const userModel = require("../Models/userModel")
const HandleError = require("../utils/handleError")
const JWT= require("jsonwebtoken")

async function isLoggedIn (req,res,next){

        let {token}= req.cookies
        // lookout for token and if token is not avilable  it means the user needs to login first
        // in order to acces the resource
        
        if(!token){
            return next( new HandleError("Please login first to access the resource",401) )
        }

        let decodeToken= JWT.verify(token,process.env.JWT_SECRET)

        let loggedInUser=await userModel.findById(decodeToken.id)

        if (!loggedInUser) {
        return next(new HandleError("User not found or no longer exists", 401));
                    }

        // save the logged in user in our req.user so that we can acces the user inside the routes

        req.user=loggedInUser

        // now user is verified 
        next()


}

module.exports=isLoggedIn