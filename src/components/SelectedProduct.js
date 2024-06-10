import React from "react";
import {
  Container,
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { Carousel } from "antd";
import CategoriesMenu from "./CategoriesMenu";
import ImageS from "../images/carousel1.png";
import ImageS2 from "../images/carosel2.png";
import { FavoriteBorder } from "@mui/icons-material";
import ShareIcon from "@mui/icons-material/Share";
const contentStyle = {
  height: "500px", // Change height to auto to maintain aspect ratio
  width: "100%", // Set width to 100%
  textAlign: "center",
};
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
const productSelect = () => {
  return (
    <Container maxWidth="xl" sx={{ my: 5 }}>
      <CategoriesMenu />
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 5 }}>
        <Box
          sx={{
            width: "65%",
            backgroundColor: "black",
            borderRadius: "sm",
            pl: 10,
            pr: 10,
          }}
        >
          <Carousel autoplay arrows infinite={false}>
            <div>
              <img style={contentStyle} src={ImageS} alt="Image 1" />
            </div>
            <div>
              <img style={contentStyle} src={ImageS2} alt="Image 2" />
            </div>
          </Carousel>
        </Box>
        <Box sx={{ width: "30%" }}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" component="div">
                Agha Mohsin Raza
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Member since Dec 2020
              </Typography>
              <Button variant="contained" fullWidth>
                Show phone number
              </Button>
              <Button variant="outlined" fullWidth sx={{ mt: 1 }}>
                Chat
              </Button>
              <Typography variant="body2" sx={{ mt: 2 }}>
                Location
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Bani Gala, Islamabad
              </Typography>
              <Typography variant="body2" sx={{ mt: 2 }}>
                AD ID 1088313340
              </Typography>
              <Button variant="text" fullWidth sx={{ mt: 1 }}>
                Report this ad
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 5 }}>
        {items.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
              mb: 2,
              border: "1px solid #e0e0e0",
              borderRadius: 1,
              padding: 2,
            }}
          >
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography
                variant="h3"
                color="002f34"
                component="div"
                fontWeight={700}
              >
                Rs {item.price}
                <IconButton
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 30,
                    color: "black",
                  }}
                >
                  <ShareIcon />
                </IconButton>
                <IconButton
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    color: "black",
                  }}
                >
                  <FavoriteBorder />
                </IconButton>
              </Typography>
              <Typography
                component="div"
                variant="h6"
                sx={{ color: "#002f34" }}
                fontWeight={700}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                component="div"
              >
                {item.location}
              </Typography>
              <Box sx={{ display: "flex", top: 0, right: 0 }}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  component="div"
                >
                  {item.date}
                </Typography>
              </Box>
            </CardContent>
            {/* ---------------------------------------------Details------------------------------- */}
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography
                variant="h3"
                color="002f34"
                component="div"
                fontWeight={700}
              >
                Rs {item.price}
                <IconButton
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 30,
                    color: "black",
                  }}
                >
                  <ShareIcon />
                </IconButton>
                <IconButton
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    color: "black",
                  }}
                >
                  <FavoriteBorder />
                </IconButton>
              </Typography>
              <Typography
                component="div"
                variant="h6"
                sx={{ color: "#002f34" }}
                fontWeight={700}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                component="div"
              >
                {item.location}
              </Typography>
              <Box sx={{ display: "flex", top: 0, right: 0 }}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  component="div"
                >
                  {item.date}
                </Typography>
              </Box>
              {/* ---------------------------------------------Description------------------------------- */}
            </CardContent>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography
                variant="h3"
                color="002f34"
                component="div"
                fontWeight={700}
              >
                Rs {item.price}
                <IconButton
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 30,
                    color: "black",
                  }}
                >
                  <ShareIcon />
                </IconButton>
                <IconButton
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    color: "black",
                  }}
                >
                  <FavoriteBorder />
                </IconButton>
              </Typography>
              <Typography
                component="div"
                variant="h6"
                sx={{ color: "#002f34" }}
                fontWeight={700}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                component="div"
              >
                {item.location}
              </Typography>
              <Box sx={{ display: "flex", top: 0, right: 0 }}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  component="div"
                >
                  {item.date}
                </Typography>
              </Box>
            </CardContent>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default productSelect;
