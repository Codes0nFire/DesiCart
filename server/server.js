// Handle uncaughtException
process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION! Shutting down...');
  console.error(err.name, err.message);
  
    process.exit(1);

});



require('dotenv').config();
const express=require("express")
const app= express()
const PORT=process.env.PORT || 5000
const dbconnection=require("./config/db")

const cors  = require('cors')
const cookieparser=require("cookie-parser")
const morgan = require('morgan')
const productRoutes=require("./routes/productRoute");
const userRoutes=require("./routes/userroute")
const errHandler = require('./middlewares/error');

app.use(express.json())
app.use(cookieparser())
app.use(cors())
app.use(morgan("dev"))


// Mount all product routes under /api/v1
app.use("/api/v1", productRoutes);

// Mount all user routes 
app.use("/api/v1", userRoutes);

// Handle the errors
app.use(errHandler)


// SERVER CONNECTION
const server = app.listen(PORT,()=>{
    console.log(`server is start and running on port ${PORT}`)
})

// Handle unhandledRejection
process.on("unhandledRejection", (err) => {
  console.log(`Error : ${err.message}`);
  console.log(`Shutting down the server`);
  server.close(() => {
    process.exit(1);
  });
});
