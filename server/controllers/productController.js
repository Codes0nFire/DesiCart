
// controllers/productController.js

const handleAsyncError = require("../middlewares/handleAsyncError");
const productModel = require("../Models/productModel");
const Apifun = require("../utils/apifun");
const HandleError = require("../utils/handleError");

// Get all products
exports.getAllProducts =handleAsyncError(async (req, res,next) => {

    // const apiFun=new Apifun(productModel.find(),req.query)

    // console.log(req.query)

    const products = await productModel.find()

    res.status(200).json({
        success:true,
        products
    })

})

// Get a single product
exports.getSingleProduct = handleAsyncError(async (req, res,next) => {


 const product = await productModel.findById(req.params.id);
    if (!product) {
      return  next( new HandleError("product not found!",404))
    }

    res.status(200).json({
        success:true,
        product
    })
})


// Create a product
exports.createProduct = handleAsyncError(async (req, res,next) => {

    const product = await productModel.create(req.body)

    res.status(201).json({
        success:true,
        product
    })
       
})



// Update  a product
exports.updateProduct = handleAsyncError( async (req, res,next) => {

   

    const updatedproduct = await productModel.findOneAndUpdate({_id:req.params.id},req.body,{new:true})

    if (!updatedproduct) {
      return next( new HandleError("product not found!",404))
    }

    res.status(201).json({
        success:true,
        updatedproduct
    })
       
})


// Delete  a product
exports.deleteProduct = handleAsyncError(async (req, res,next) => {

   
    const deletedproduct = await productModel.findOneAndDelete({_id:req.params.id})

    if (!deletedproduct) {
      return  next( new HandleError("product not found!",404))
    }


    res.status(200).json({
        success:true,
        deletedproduct
    })
       
});