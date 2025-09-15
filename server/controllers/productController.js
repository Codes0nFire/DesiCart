
// controllers/productController.js

const handleAsyncError = require("../middlewares/handleAsyncError");
const productModel = require("../Models/productModel");
const Apifun = require("../utils/apifun");
const HandleError = require("../utils/handleError");

// Get all products
exports.getAllProducts =handleAsyncError(async (req, res,next) => {

    const itemPerPage=2

    const api=new Apifun(productModel.find(),req.query).search().filter()
    // .pagination(itemPerPage)

    // filter the data before pageination chceckout evn that page is ossible to show or not
    // based on the data that we have in our database

    let copyProducts=api.query.clone()
    let documentCount=await copyProducts.countDocuments()

    let canhavePages=Math.ceil(documentCount/itemPerPage)

    const pageno=Number(api.queryStr.pageno ) || 1

    // if user lookouit for the pagno but we dont have enougjh items to render that page 

    if(pageno>canhavePages && documentCount>0){
        return next(new HandleError("This page is not avilable ",404))
    }

    // Now apply Paginatiom
    api.pagination(itemPerPage)

    const products = await api.query

    if(!products || products.length==0){
        return next(new HandleError("No products found",404))
    }

    res.status(200).json({
        success:true,
        products,
        productCount:documentCount,
        totalPages:canhavePages,
        productPerPage:itemPerPage,
        currentPageNo:pageno
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