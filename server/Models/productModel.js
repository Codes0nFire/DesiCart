const mongoose = require("mongoose");



const productSchema=mongoose.Schema({

    name:{
        type:String,
        required:[true,"Please Enter the name of the product"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"Please Enter product description"],
        trim:true
    },
    price:{
        type:Number,
        required:[true,"Please Enter product price"],
        MaxLength:[8,"Price cannot exceed 8 digits"]
    },
    rating:{
        type:Number,
        default:0
    },
    image:[
        {
            public_id:{
                    type:String,
                    required:true
            },
            url:{
                type:String,
                required:true

            }
        }
    ],
    category:{
        type:String,
        required:[true,"Please Enter product category"],
    },
    stock:{
        type:Number,
        required:[true,"Please Enter stock "],
        MaxLength:[8,"Stock cannot exceed 8 digits"],
        default:1
    },
    review:[
       {
        name:{
            type:String,
            required:true
        },
         rating:{
            type:Number,
            required:true
        },
         comment:{
            type:String,
            required:true
        }
       }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }


})



const productModel=mongoose.model("product",productSchema)

module.exports=productModel