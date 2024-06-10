import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  Container,
  Avatar,
  Typography,
  Card,
  CardHeader,
  IconButton,
  Box,
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const AvatarCategories = ({
  setSelectedCategory,
  setSelectedSubcategory,
  selectedCategory,
  selectedSubcategory,
}) => {
  const navigate = useNavigate();

  const totalAvatars = 14;
  const names = [
    'Mobile',
    'Vehicles',
    'Properties for Sale',
    'Properties for Rent',
    'Electronics and Home Appliances',
    'Bikes, Business Industrial',
    'Services',
    'Jobs',
    'Animal',
    'Furniture',
    'Fashion',
    'Books',
    'Kids',
    'Kids',
  ];

  const subcategories = {
    Mobile: ['Smartphones', 'Accessories', 'Tablets'],
    Vehicles: ['Cars', 'Motorcycles', 'Trucks'],
    'Properties for Sale': ['Houses', 'Apartments', 'Land'],
    'Properties for Rent': ['Houses', 'Apartments', 'Rooms'],
    'Electronics and Home Appliances': ['TVs', 'Refrigerators', 'Washing Machines'],
    'Bikes, Business Industrial': ['Mountain Bikes', 'Road Bikes', 'Electric Bikes'],
    Services: ['Home Services', 'Business Services', 'Personal Services'],
    Jobs: ['Full-Time', 'Part-Time', 'Freelance'],
    Animal: ['Dogs', 'Cats', 'Birds'],
    Furniture: ['Sofas', 'Tables', 'Chairs'],
    Fashion: ['Men', 'Women', 'Kids'],
    Books: ['Fiction', 'Non-Fiction', 'Textbooks'],
    Kids: ['Toys', 'Clothes', 'Books'],
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null); // Reset selected subcategory
  };

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
    navigate('/post/attributes');
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h6" gutterBottom>
        Post an Ad
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{ border: '2px red solid' }}>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {names.map((name, index) => (
                <li
                  key={index}
                  onClick={() => handleCategoryClick(name)}
                  style={{
                    marginBottom: '10px',
                    backgroundColor: selectedCategory === name ? 'lightblue' : 'transparent',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease',
                  }}
                >
                  <Card sx={{ cursor: 'pointer' }}>
                    <CardHeader
                      avatar={
                        <Avatar
                          alt={`Category ${index + 1}`}
                          src={require(`../images/${index + 1}.png`)}
                        />
                      }
                      action={
                        <IconButton aria-label="settings">
                          <KeyboardArrowRightIcon />
                        </IconButton>
                      }
                      title={
                        <Typography variant="subtitle2" align="left">
                          {name}
                        </Typography>
                      }
                    />
                  </Card>
                </li>
              ))}
            </ul>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          {selectedCategory && (
            <Box sx={{ border: '2px green solid', padding: '10px' }}>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {subcategories[selectedCategory].map((subcat, subindex) => (
                  <li
                    key={subindex}
                    onClick={() => handleSubcategoryClick(subcat)}
                    style={{
                      marginBottom: '10px',
                      backgroundColor: selectedSubcategory === subcat ? 'lightgreen' : 'transparent',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s ease',
                    }}
                  >
                    <Card sx={{ cursor: 'pointer' }}>
                      <CardHeader
                        title={
                          <Typography variant="subtitle2" align="left">
                            {subcat}
                          </Typography>
                        }
                      />
                    </Card>
                  </li>
                ))}
              </ul>
            </Box>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default AvatarCategories;
