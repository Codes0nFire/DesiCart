require('dotenv').config();
const express=require("express")
const app= express()
const PORT=process.env.PORT || 5000
const dbconnection=require("./config/db")

const cors  = require('cors')
const cookieparser=require("cookie-parser")
const morgan = require('morgan')
const productRoutes=require("./routes/productRoute")

app.use(express.json())
app.use(cookieparser())
app.use(cors())
app.use(morgan("dev"))






// Mount all product routes under /api/v1
app.use("/api/v1", productRoutes);






// SERVER CONNECTION
app.listen(PORT,()=>{
    console.log(`server is start and running on port ${PORT}`)
})