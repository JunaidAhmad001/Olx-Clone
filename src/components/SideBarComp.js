import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import CategoryView from '../components/CategoriesItem';

export default function Sidebar({ selectedCategory, subcategories }) {
  const [location, setLocation] = useState('Pakistan');
  const [priceRange, setPriceRange] = useState([250, 1000000]);
  
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-start', padding: 2 }}>
      <Box sx={{ borderRight: 1, borderColor: 'divider', padding: 2, width: '250px', marginTop: 15 }}>
        <Typography variant="h6">Filters</Typography>

        <Box sx={{ marginTop: 2 }}>
          <Typography variant="h6" gutterBottom>
            CATEGORIES
          </Typography>
          <List>
            <ListItem button>{selectedCategory}</ListItem>
            {/* Corrected mapping */}
            {subcategories.map((subcategory) => (
              <ListItem button sx={{ pl: 2 }} key={subcategory}>{subcategory}</ListItem>
            ))}
          </List>
        </Box>

        <Box sx={{ marginTop: 2 }}>
          <Typography variant="h6" gutterBottom>
            LOCATIONS
          </Typography>
          <FormControl fullWidth>
            <Select
              value={location}
              onChange={handleLocationChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Location' }}
            >
              <MenuItem value="Pakistan">Pakistan</MenuItem>
            </Select>
          </FormControl>
          <List sx={{ marginTop: 1 }}>
            <ListItem button sx={{ pl: 4 }}>Punjab (144496)</ListItem>
          </List>
        </Box>

        <Box sx={{ marginTop: 2 }}>
          <Typography variant="h6" gutterBottom>
            PRICE
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ textAlign: 'center', width: '48%' }}>
              <Typography>{priceRange[0].toLocaleString()}</Typography>
              <Typography>PKR {priceRange[0]}</Typography>
            </Box>
            <Box sx={{ textAlign: 'center', width: '48%' }}>
              <Typography>{priceRange[1].toLocaleString()}</Typography>
              <Typography>PKR {priceRange[1]}</Typography>
            </Box>
          </Box>
          <Slider
            color="primary"
            value={priceRange}
            onChange={handlePriceChange}
            valueLabelDisplay="auto"
            min={0}
            max={1000000}
            sx={{ marginTop: 2 }}
          />
        </Box>
      </Box>
      <Box sx={{ marginTop: 15 }}>
        <CategoryView />
      </Box>
    </Box>
  );
}
