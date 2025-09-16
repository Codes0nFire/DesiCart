
function sendToken(user,statusCode,res){

    let token= user.getJWTToken()
    

    // options for cookies
    const options = {
  expires: new Date(Date.now() + process.env.EXPIRE_COOKIE * 24 * 60 * 60 * 1000),
  httpOnly: true,
//   secure: process.env.NODE_ENV === 'production', 
//   sameSite: 'strict'
};

    // response
    res.status(statusCode)
    .cookie('token',token,options)
    .json({
        success:true,
        user,
        token
    })

}


module.exports=sendToken