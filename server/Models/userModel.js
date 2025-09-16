const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const JWT=require("jsonwebtoken")





const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
      maxlength: [25, "Name cannot exceed 50 characters"],
      minlength:[3,"Name should have atleast 3 chars"]
    },

    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
      validate: [validator.isEmail, "Please enter a valid email"],
    },

    password: {
      type: String,
      required: [true, "Please enter your password"],
      minlength: [6, "Password must be at least 6 characters"],
      select: false,
    },

    avatar: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
    role:{
        type:String,
        default:"user"

    },

    resetPasswordToken: String,
    resetPasswordExpire: Date,
  },
  { timestamps: true } 
);


// Hashing the password using bcrypt
userSchema.pre("save", async  function (next){
  //  if password is not modified no need to hash  the password again 
   if(!this.isModified("password")){
    return next()
  }
  this.password= await bcrypt.hash(this.password,10)
})



// Genrate JWT Token
userSchema.methods.getJWTToken= function (){
   let token= JWT.sign({id:this._id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_EXPIRE*24*60*60*1000})
   return token
}


// password verification
userSchema.methods.verifyPassword= async function (enteredPassword){
return await bcrypt.compare(enteredPassword+"",this.password)

}


const userModel=mongoose.model("user",userSchema)

module.exports=userModel