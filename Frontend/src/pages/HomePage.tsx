import Container from "@mui/material/Container";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import { Product } from "../types/Product";
import { BASE_URL } from "../constants/baseUrl";
import { Box, Grid2 } from "@mui/material";

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/product`);
        const data = await response.json();
        setProducts(data);
      } catch {
        setError(true);
      }
    };

    fetchData();
  }, []);

  if(error) {
    return <Box>Something went wrong, please try again!</Box>
  }

  return (
    <Container sx={{ mt: 2 }}>
      <Grid2 container spacing={2}>
        {products.map((p) => (
          <Grid2  size={{md:4}} >
            <ProductCard {...p} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default HomePage;