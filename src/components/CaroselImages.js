import React from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ImageS from '../images/carousel1.png';
import ImageS2 from '../images/carosel2.png';
import { Carousel } from 'antd';

function ImageScroll() {
  const contentStyle = {
    height: 'auto', // Change height to auto to maintain aspect ratio
    width: '100%', // Set width to 100%
    textAlign: 'center',
    
  };
  

  return (
    <Container maxWidth="xl" sx={{my:5}}>
      <Carousel autoplay>
        <div>
          <img style={contentStyle} src={ImageS} alt="Image 1" />
        </div>
        <div>
          <img style={contentStyle} src={ImageS2} alt="Image 2" />
        </div>
      </Carousel>
      <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}></Box>
    </Container>
  );
}

export default ImageScroll;
