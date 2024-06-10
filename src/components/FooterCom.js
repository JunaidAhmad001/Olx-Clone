import React from 'react';
import { Container, Grid, Typography, Link, Box } from '@mui/material';
import { Twitter, Facebook, YouTube, Instagram, Apple, Android } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box bgcolor="#ebeeef" color="rgba(0, 47, 52, .64)" py={4} >
      <Container maxWidth="lg">
        <Grid container spacing={10}>
          <Grid item xs={12} sm={3} md={3} lg={4} xl={2}>
            <Typography variant="h6" color={'black'} gutterBottom>
              POPULAR 
            </Typography>
            <Link href="#" color="inherit" underline='none' display="block">Cars</Link>
            <Link href="#" color="inherit" underline='none' display="block">Flats for rent</Link>
            <Link href="#" color="inherit" underline='none' display="block">Mobile Phones</Link>
            <Link href="#" color="inherit" underline='none' display="block">Jobs</Link>
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={4} xl={2}>
            <Typography variant="h6" color={'black'} gutterBottom>
              TRENDING
            </Typography>
            <Link href="#" color="inherit" underline='none' display="block">Bikes</Link>
            <Link href="#" color="inherit" underline='none' display="block">Watches</Link>
            <Link href="#" color="inherit" underline='none' display="block">Books</Link>
            <Link href="#" color="inherit" underline='none' display="block">Dogs</Link>
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={4} xl={2}>
            <Typography variant="h6" color={'black'} gutterBottom>
              ABOUT US
            </Typography>
            <Link href="#" color="inherit" underline='none' display="block">About Dubizzle Group</Link>
            <Link href="#" color="inherit" underline='none' display="block">OLX Blog</Link>
            <Link href="#" color="inherit" underline='none' display="block">Contact Us</Link>
            <Link href="#" color="inherit" underline='none' display="block">OLX for Businesses</Link>
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={4} xl={2}>
            <Typography variant="h6" color={'black'} gutterBottom>
              OLX
            </Typography>
            <Link href="#" color="inherit" underline='none' display="block">Help</Link>
            <Link href="#" color="inherit" underline='none' display="block">Sitemap</Link>
            <Link href="#" color="inherit" underline='none' display="block">Terms of use</Link>
            <Link href="#" color="inherit" underline='none' display="block">Privacy Policy</Link>
          </Grid>
          <Grid item xs={12} sm={3} md={3} lg={4} xl={2}>
            <Box>
              <Typography variant="h6" color={'black'} gutterBottom>
                FOLLOW US
              </Typography>
              <Box display="flex" alignItems="center">
                <Link href="#" color="inherit" mr={2}>
                  <Twitter />
                </Link>
                <Link href="#" color="inherit" mr={2}>
                  <Facebook />
                </Link>
                <Link href="#" color="inherit" mr={2}>
                  <YouTube />
                </Link>
                <Link href="#" color="inherit" mr={2}>
                  <Instagram />
                </Link>
            
              </Box>
            </Box>
            <Box border={'2px solid red'} display={'flex'} my={2}>
              <Box display="flex" justifyContent='center' >
              <Link href="#" color="inherit" mr={2}>
                  <Apple />
                </Link>
                <Link href="#" color="inherit" mr={2}>
                  <Android />
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
        
      </Container>
    </Box>
  );
};

export default Footer;
