import React from 'react';
import { Box, Card, CardHeader, Avatar, IconButton, Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const CategorySelectionModal = ({ categories, subcategories, handleCategoryClick, handleSubcategoryClick }) => {
  return (
    <Box>
      {categories.map((category, index) => (
        <Card key={index} onClick={() => handleCategoryClick(category)}>
          <CardHeader
            avatar={<Avatar src={require(`../images/${index + 1}.png`)} />}
            action={<IconButton><KeyboardArrowRightIcon /></IconButton>}
            title={<Typography variant="subtitle2">{category}</Typography>}
          />
        </Card>
      ))}
      {subcategories && subcategories.map((subcategory, index) => (
        <Card key={index} onClick={() => handleSubcategoryClick(subcategory)}>
          <CardHeader
            avatar={<Avatar src={require(`../images/${index + 1}.png`)} />}
            action={<IconButton><KeyboardArrowRightIcon /></IconButton>}
            title={<Typography variant="subtitle2">{subcategory}</Typography>}
          />
        </Card>
      ))}
    </Box>
  );
};

export default CategorySelectionModal;
