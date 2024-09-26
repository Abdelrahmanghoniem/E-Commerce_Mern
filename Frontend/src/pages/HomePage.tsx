import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid2';


import ProductCard from '../components/ProductCard'; // Adjust the path based on your project structure
import { useEffect, useState } from "react";

const HomePage = () => {

    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3001/product").then(async(response)=>{
            const data=await response.json()
            setProducts(data)
        })
    })

  return (
    <Container sx={{ mt: 2 }}>
      <Grid container spacing={2} component="div">
        {products.map((p)=>(
            <Grid  size={{ xs: 12, sm: 6,md:4 }} spacing={2}  component="div">
                <ProductCard />
              </Grid>
              
        ))}
     
      </Grid>
    </Container>
  );
};

export default HomePage;
