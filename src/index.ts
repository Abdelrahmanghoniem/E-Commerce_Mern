import express from "express"
import mongoose from "mongoose"
import userRoute from "./routes/userRoute"
import { seedInitialProducts } from "./Services/ProductService"
import productRoute from "./routes/productRoute"

const app = express()
const port = 3001


app.use(express.json())
mongoose.connect("mongodb://localhost:27017/E-COMMERCE-two")
.then(() => console.log("connected"))
.catch((err)=>console.log("failed to connect",err))


//seed the products to database
seedInitialProducts()
app.use('/user',userRoute)
app.use('/product',productRoute)

app.listen(port,()=>{
    console.log(`server is running at: http://localhost:${port}`)
})






