import mongoose,{Schema,Document} from "mongoose";


export interface IProduct extends Document{
    title:string;
    price:number;
    image:string;
    stock:number;
}

const ProductSchema=new Schema<IProduct>({
    title:{type:String,required:true},
    price:{type:Number,required:true},
    image:{type:String,required:true},
    stock:{type:Number,required:true,default:0}

})

const ProductModel = mongoose.model<IProduct>('Product',ProductSchema)
export default ProductModel