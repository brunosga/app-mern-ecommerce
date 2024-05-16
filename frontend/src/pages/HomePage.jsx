import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import { Grid } from '@mui/material';  // Import the Grid component

const baseURL = import.meta.env.VITE_BASE_URL;
axios.defaults.baseURL = baseURL;

const HomePage = () => {
  const [productList, setProductList] = useState([]);

  const getProduct = async () => {
    try {
      const response = await axios.get(`${baseURL}/products`);
      setProductList(response.data);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <NavBar />
      <h1>My HomePage</h1>
      {/* Use Grid container to arrange ProductCard items */}
      <Grid container spacing={2}>  {/* spacing prop adds space between grid items */}
        {productList.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product._id}>
            <ProductCard
              product={product}
              getProduct={getProduct}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default HomePage;
