import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import ProductCard from './ProductCard'; // Ensure this path is correct

const ProductGrid = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/products`);
            setProducts(response.data);
        };
        fetchProducts();
    }, []);

    return (
        <Grid container spacing={2}>
            {products.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product._id}>
                    <ProductCard product={product} />
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductGrid;