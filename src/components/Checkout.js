import React, { useState } from 'react';
import {
  Container,
  Typography,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  Box,
  Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../context/ProductContext'; 
import CustomSnackbar from './CustomSnackbar';

const Checkout = () => {
  const { selectedProducts, clearCart } = useProducts();
  const [open, setOpen] = useState(false); 
  const navigate = useNavigate(); 

  const handlePlaceOrder = () => {
    if (selectedProducts.length === 0) {
      console.error("Cart is empty. Cannot place order.");
      return;
    }

    setOpen(true);
    
    setTimeout(() => {
      clearCart();
    }, 1000); 
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container sx={{ paddingTop: 4 }}>
      <Typography variant="h2" gutterBottom>
        Checkout
      </Typography>
      {selectedProducts.length > 0 ? (
        <div>
          <Box sx={{ marginBottom: 2 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={1}>
                <Typography variant="h6">#</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h6">Image</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">Name</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="h6">Price</Typography>
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
          </Box>
          <List>
            {selectedProducts.map((product, index) => (
              <ListItem key={index} alignItems="flex-start">
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={1}>
                    <Typography variant="body1">{index + 1}</Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <ListItemAvatar>
                      <Avatar
                        variant="square"
                        alt={product.title}
                        src={product.image}
                        sx={{ width: 80, height: 80 }}
                      />
                    </ListItemAvatar>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1">{product.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.longDescription}
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography variant="body1">${product.price}</Typography>
                  </Grid>
                  <Grid item xs={1}></Grid>
                </Grid>
              </ListItem>
            ))}
          </List>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate('/')}
            sx={{ marginTop: 4}}
          >
            Continue Shopping
          </Button>

          <Button
            variant="contained"
            color="primary"
            onClick={handlePlaceOrder}
            sx={{ marginTop: 4,marginLeft:10  }}
          >
            Place Order
          </Button>
         
          <CustomSnackbar
            open={open}
            handleClose={handleClose}
            message="Order placed successfully!"
            severity="success"
          />
        </div>
      ) : (
        <div>
          <Typography variant="body1">No items in the cart.</Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate('/')}
            sx={{ marginTop: 2 }}
          >
            Continue Shopping
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Checkout;
