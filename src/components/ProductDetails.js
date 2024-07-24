import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { Container, Typography, Button, Card, CardContent, CardMedia } from '@mui/material';

function ProductDetails() {
  const { id } = useParams();
  const { products, addProductToCart } = useProducts();
  const product = products.find(p => p.id === parseInt(id));
  const navigate = useNavigate();

  const handleOrder = () => {
    addProductToCart(product);
    navigate('/checkout');
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        {product.title}
      </Typography>
      <Card sx={{ display: 'flex', flexDirection: 'row', marginBottom: 2 }}>
        <CardMedia
          component="img"
          sx={{ width: 300 }}
          image={product.image}
          alt={product.title}
        />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="body1" paragraph>
            {product.description}
          </Typography>
          <Typography variant="h6">
            Price: ${product.price}
          </Typography>
          <Typography variant="body2">
            Rating: {product.rating}
          </Typography>
          <Button onClick={handleOrder} variant="contained" color="primary" sx={{ marginTop: 2 }}>
            Add To Cart
          </Button>
         
        </CardContent>
      </Card>
    </Container>
  );
}

export default ProductDetails;
