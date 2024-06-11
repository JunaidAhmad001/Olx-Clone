import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Link from "@mui/material/Link";
import S1 from '../images/dummy.png'
const categories = [
  { price: "$500", description: "Latest mobile phones", city: "New York", image: "1.png" },
  { price: "$2000", description: "Cars and bikes", city: "Los Angeles", image: "2.png" },
  { price: "$300000", description: "Houses and apartments", city: "San Francisco", image: "3.png" },
  { price: "$1500/month", description: "Rental properties", city: "Chicago", image: "4.png" },
  { price: "$150", description: "Gadgets and appliances", city: "Houston", image: "5.png" },
  { price: "$800", description: "Bikes and industrial equipment", city: "Miami", image: "6.png" },
  { price: "$50/hour", description: "Various services", city: "Seattle", image: "7.png" },
  { price: "N/A", description: "Job listings", city: "Austin", image: "8.png" },
  { price: "$300", description: "Pets and animals", city: "Denver", image: "9.png" },
  { price: "$500", description: "Home furniture", city: "Boston", image: "10.png" },
  { price: "$100", description: "Clothing and accessories", city: "Philadelphia", image: "11.png" },
  { price: "$20", description: "Books and literature", city: "San Diego", image: "12.png" },
  { price: "$50", description: "Toys and kids items", city: "Dallas", image: "13.png" },
  { price: "$100", description: "Miscellaneous items", city: "Phoenix", image: "14.png" }
];

const CarCategories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + itemsPerPage, categories.length - itemsPerPage)
    );
  };

  return (
    <Container maxWidth="lg" spacing={2}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" gutterBottom>
         Cars 
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link href="/" sx={{ typography: 'body1', color: '#3a77ff', display: 'flex', alignItems: 'center' }}>
            See more
            <KeyboardArrowRightIcon />
          </Link>
        </Box>
      </Box>
      <Box sx={{ position: 'relative' }}>
        <Button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          sx={{
            position: 'absolute',
            left: '-20px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1,
            backgroundColor: 'grey',
            color: 'black',
            borderRadius: '50%',
            width: 40,
            height: 40,
            minWidth: 'unset',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <KeyboardArrowLeftIcon />
        </Button>
        <Grid container spacing={2}>
          {categories.slice(currentIndex, currentIndex + itemsPerPage).map((category, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                  component="img"
                  image={S1}
                  title={category.description}
                  sx={{ maxHeight: 240, objectFit: 'cover' }}
                />
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant="h6" sx={{ color: 'black' }}>
                      {category.price}
                    </Typography>
                    <FavoriteBorderOutlinedIcon />
                  </Box>
                 
                </CardContent>
                  <CardContent>
                    
                  <Typography variant="body2" color="text.secondary">
                    {category.description}
                  </Typography>
                  </CardContent>
                <CardContent>
                  <Typography color="text.secondary">{category.city}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    2 days
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Button
          onClick={handleNext}
          disabled={currentIndex >= categories.length - itemsPerPage}
          sx={{
            position: 'absolute',
            right: '-20px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1,
            backgroundColor: 'grey',
            color: 'black',
            borderRadius: '50%',
            width: 40,
            height: 40,
            minWidth: 'unset',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <KeyboardArrowRightIcon />
        </Button>
      </Box>
    </Container>
  );
};

export default CarCategories;
