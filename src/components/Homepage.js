import React, { useState } from 'react';
import { useProducts } from '../context/ProductContext';
import ProductCard from './ProductCard';
import { Container, Grid, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

function Homepage() {
  const { products } = useProducts();
  const [sortOption, setSortOption] = useState('default');

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortOption) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'alpha-asc':
        return a.title.localeCompare(b.title);
      case 'alpha-desc':
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Product Listings
      </Typography>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel>Sort By</InputLabel>
        <Select
          value={sortOption}
          onChange={handleSortChange}
          label="Sort By"
        >
          <MenuItem value="default">Default</MenuItem>
          <MenuItem value="price-asc">Price: Low to High</MenuItem>
          <MenuItem value="price-desc">Price: High to Low</MenuItem>
          <MenuItem value="alpha-asc">Alphabetical: A to Z</MenuItem>
          <MenuItem value="alpha-desc">Alphabetical: Z to A</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={2}>
        {sortedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </Container>
  );
}

export default Homepage;
