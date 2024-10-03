import  express, { response }  from "express";
import { getAllProducts } from "../Services/ProductService";

const router=express.Router()

router.get('/',async (request,response)=>{
    try{
        const products=await getAllProducts();
        response.status(200).send(products)
    }catch{
        response.status(500).send({message:"Error fetching products"})
    }
})

export default router;