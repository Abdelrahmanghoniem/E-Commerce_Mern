import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid2';


import ProductCard from '../components/ProductCard'; // Adjust the path based on your project structure
import { useEffect, useState } from "react";
import { Product } from "../types/Product";
import { Base_URL } from "../constants/BaseUrl";
import { Box } from "@mui/material";

const HomePage = () => {

    const [products,setProducts]=useState<Product[]>([])
    const [error,setError]=useState(false)

    useEffect(()=>{
        const fetchData=async()=>{
        try{
        
            const response=await fetch(`${Base_URL}/product`)
            const data=await response.json()
            setProducts(data)
        } catch {
            setError(true);
        }
    }
        fetchData();
    },[])

    if(error){
        return <Box>sometihing went wrong  please try again</Box>
    }

  return (
    <Container sx={{ mt: 2 }}>
      <Grid container spacing={2} component="div">
        {products.map(({_id,title,image,price})=>(
            <Grid  size={{ xs: 12, sm: 6,md:4 }} spacing={2}  component="div">
                <ProductCard id={_id} title={title} image={image} price={price} />
              </Grid>
              
        ))}
     
      </Grid>
    </Container>
  );
};

export default HomePage;

