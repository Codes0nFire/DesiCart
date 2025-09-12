
// controllers/productController.js

const productModel = require("../Models/productModel");

// Get all products
exports.getAllProducts =async (req, res) => {

     const products = await productModel.find()

    res.status(200).json({
        success:true,
        products
    })

};

// Get a single product
exports.getSingleProduct = async (req, res) => {
 const product = await productModel.findOne({_id:"68c41f198f75e0606b61104b"})

    res.status(200).json({
        success:true,
        product
    })
};


// Create a product
exports.createProduct = async (req, res) => {

    const product = await productModel.create(req.body)

    res.status(201).json({
        success:true,
        product
    })
       
};