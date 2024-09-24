import ProductModel from "../models/productModel";

export const getAllProducts=async ()=>{
    return await ProductModel.find();
}

export const seedInitialProducts=async()=>{
    const products=[
    {title:"MSI GF63 Thin",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVBCDJh5jSdZN10pDv4OCG4lbyozMhmcy2fA&s"
        ,price:24000,stock:10}

    ];

    const existingProducts=await getAllProducts();

    if (existingProducts.length===0){
        await ProductModel.insertMany(products)
    }
};