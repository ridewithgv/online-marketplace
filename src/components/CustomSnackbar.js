import React from 'react';
import { Snackbar, Alert, Button } from '@mui/material';

const CustomSnackbar = ({ open, handleClose, message, severity = "success" }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000} 
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }} 
      action={
        <Button color="inherit" onClick={handleClose}>
          Close
        </Button>
      }
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
