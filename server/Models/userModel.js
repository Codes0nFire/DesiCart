const mongoose = require('mongoose')
const validator = require('validator')







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


const userModel=mongoose.model("user",userSchema)

module.exports=userModel