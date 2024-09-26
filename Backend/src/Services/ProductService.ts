import ProductModel from "../models/productModel";

export const getAllProducts=async ()=>{
    return await ProductModel.find();
}

export const seedInitialProducts=async()=>{
    const products=[
    {
        title:"MSI GF63 Thin labtop",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVBCDJh5jSdZN10pDv4OCG4lbyozMhmcy2fA&s",
        price:24000,
        stock:10
    },
    {
        title:"Asus ROG labtop",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDBoTaLj792Fk-39eZx3hB-vWQlcXl7h95Jw&s",
        price:27000,
        stock:8
    },
    {
        title:"Hp labtop",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXPNCVu9X30NQIbx70aMIqq1LIDo38XMzFog&s",
        price:15000,
        stock:18
    },

    ];

    const existingProducts=await getAllProducts();

    if (existingProducts.length===0){
        await ProductModel.insertMany(products)
    }
};