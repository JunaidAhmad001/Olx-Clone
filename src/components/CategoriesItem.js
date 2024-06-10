import React, { useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  IconButton,
} from '@mui/material';
import { FavoriteBorder, ViewList, ViewModule } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const items = [
  {
    id: 1,
    title: "IPhone 15 Pro Max 256 HK ",
    price: "358,000",
    location: "Johar Town Phase 1, Lahore",
    date: "5 days ago",
    image: "../images/1.jpg",
  },
  {
    id: 2,
    title: "IPhone 15 Pro Max 256 HK",
    price: "19,900",
    location: "Johar Town, Lahore",
    date: "1 day ago",
    image: "/path/to/image.jpg",
  },
  {
    id: 3,
    title: "IPhone 15 Pro Max 256 HK",
    price: "19,900",
    location: "Johar Town, Lahore",
    date: "1 day ago",
    image: "/path/to/image.jpg",
  },
  // Add more items as needed
];
const CategoryView = () => {
  const [view, setView] = useState('list');
  const [sort, setSort] = useState('newly listed');
  const navigate = useNavigate();

  const handleProductClick = (category, productId) => {
    navigate(`/home/${category}/${productId}`);
  };

  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginY: 2 }}>
        <Typography variant="subtitle1">{items.length} ads</Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginY: 2 }}>
        <Box>
          <IconButton sx={{color:'black'}} onClick={() => setView('list')}>
            <Typography variant='h6' sx={{color:'black'}}>
              VIEW
            </Typography>
            <ViewList />
          </IconButton>
          <IconButton sx={{color:'black'}} onClick={() => setView('grid')}>
            <ViewModule />
          </IconButton>
        </Box>
        <FormControl variant="outlined" sx={{ minWidth: 120 }}>
          <InputLabel>Sort By</InputLabel>
          <Select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            label="Sort By"
          >
            <MenuItem value="newly listed">Newly Listed</MenuItem>
            <MenuItem value="price low to high">Price: Low to High</MenuItem>
            <MenuItem value="price high to low">Price: High to Low</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid item xs={12} md={view === 'list' ? 12 : 4} key={item.id}>
          
            <Card 
              onClick={() => handleProductClick('category', item.id)} 
              sx={{ display: 'flex', flexDirection: view === 'list' ? 'row' : 'column', position: 'relative' }}
            >
              <CardMedia
                component="img"
                sx={{ width: view === 'list' ? 151 : '100%', height: view === 'list' ? 'auto' : 140 }}
                image={item.image}
                alt={item.title}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography variant="subtitle1" color="text.secondary" component="div" >
                    Rs {item.price} 
                    <IconButton sx={{ position: 'absolute', top: 0, right: 0 }}>
                      <FavoriteBorder />
                    </IconButton>
                  </Typography>
                  <Typography component="div" variant="h6" sx={{color:'#002f34'}}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" component="div">
                    {item.location}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" component="div">
                    {item.date}
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', paddingLeft: 1, paddingBottom: 1 }}>
                  <Button variant="outlined" sx={{ marginRight: 1, backgroundColor: "#002f34", color: 'white', '&:hover': { backgroundColor: "#004d40" }}}>Call</Button>
                  <Button variant="outlined" sx={{ marginRight: 1, backgroundColor: "#002f34", color: 'white', '&:hover': { backgroundColor: "#004d40" }}}>Chat</Button>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CategoryView;
