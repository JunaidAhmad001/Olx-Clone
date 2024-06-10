import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const SmallFooter = () => {
  return (
    <Box bgcolor="#002f34" color="white" py={2} >
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="flex-end">
          <Typography variant="body2">
           Digital Horizon . © 2024 OLX
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default SmallFooter;
