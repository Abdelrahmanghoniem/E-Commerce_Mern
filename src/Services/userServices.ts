import userModel from "../models/userModels";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const SECTET_KEY="https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

interface RegisterParams{
    firstName:string;
    lastName:string;
    email:string;
    password:string;
}


export const register=async ({firstName,lastName,email,password}:RegisterParams)=>{
    const FindUser=await userModel.findOne({email})

    if(FindUser){
        return{data:"user already exist",statusCode:400};
        }
   
        const hashedPassword=await bcrypt.hash(password,10)   
        const newUser=new userModel({firstName,lastName,email,password:hashedPassword})
        await newUser.save()


    return {data:generateJWT({firstName,lastName,email}),statusCode:200};
}

interface loginParams{
    email:string;
    password:string;
}
export const login=async ({email,password}:loginParams)=>{
    const FindUser=await userModel.findOne({email})

    if(!FindUser){
        return {data:"incorrect email or password",statusCode:400}
    }
    const passwordMatch= await bcrypt.compare(password,FindUser.password)
    if (passwordMatch) {
        return { 
          data:  generateJWT({email,firstName:FindUser.firstName,lastName:FindUser.lastName}) , 
          statusCode: 200 ,
          message:"logged in succesfully"

        };
      }



    return {data:"incorrect email or password",statusCode:400}
}

const generateJWT=(data:any)=>{
    return jwt.sign(data,SECTET_KEY,{expiresIn:'15m'})
}