import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Container } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from 'react';

const CategoriesMenu = ({ onCategoryClick }) => {
  const navigator = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const isSmallScreen = useMediaQuery('(max-width:845px)');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCategoryClick = (category) => {
    console.log('props.onCategoryClick:', onCategoryClick);

    if (onCategoryClick) {
      onCategoryClick(category); // Call the prop function
    }
    console.log(`You clicked on ${category}`);
    navigator(`home/${category}`);
    handleClose();
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', margin: "0px", justifyContent: 'space-between' }}>
        <Typography>ALL CATEGORIES</Typography>
        {isSmallScreen ? (
          <Tooltip title="All categories">
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? 'categories-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <ArrowDropDownIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <>
  {['Mobile Phones', 'Cars', 'Motorcycles', 'Houses', 'Video-Audios', 'Tablets', 'Land & Plots'].map((category) => (
    <Box key={category} sx={{ cursor: 'pointer' }}>
    

      <Link to={`/home/${category}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Typography>{category}</Typography>
      </Link>
    
    </Box>
  ))}
</>

        )}
      </Box>

      <Menu
        anchorEl={anchorEl}
        id="categories-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {['Mobile Phones', 'Cars', 'Motorcycles', 'Houses', 'Video-Audios', 'Tablets', 'Land & Plots'].map((category) => (
          <MenuItem key={category} onClick={() => handleCategoryClick(category)}>{category}</MenuItem>
        ))}
      </Menu>
    </Container>
  );
};

export default CategoriesMenu;
