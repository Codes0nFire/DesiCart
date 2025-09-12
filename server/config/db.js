

const MONGO_URI=process.env.MONGO_URI
const  mongoose=require("mongoose")

// DATABAS CONNECTION
module.exports=mongoose
.connect(MONGO_URI).
then(()=>console.log(`connected to the database`)).
catch((err)=>console.log(err))
