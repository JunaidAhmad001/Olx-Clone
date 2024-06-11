import React from "react";
import {
  Container,
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
  Avatar,
} from "@mui/material";
import { Carousel } from "antd";
import CategoriesMenu from "./CategoriesMenu";
import ImageS from "../images/1.png";
import ImageS2 from "../images/carosel2.png";
import { FavoriteBorder } from "@mui/icons-material";
import ShareIcon from "@mui/icons-material/Share";
import { useNavigate, Link } from "react-router-dom";
const contentStyle = {
  height: "400px",
  width: "100%",
  objectFit: "contain", // Ensure the image fits within the container
  backgroundColor: "black",
};

const items = [
  {
    id: 1,
    title: "IPhone 15 Pro Max 256 HK",
    price: "358,000",
    location: "Johar Town Phase 1, Lahore",
    description:
      "Tecno camon 20 8/256 with box and charger most demanding colour in neat condition no any fault with box and charger No Open No repair 100% orignal 36k dead final Only call JazakAllah",
    date: "5 days ago",
    image: "../images/1.jpg",
  },
  // Add more items as needed
];

const ProductSelect = () => {
  const navigate = useNavigate();
  const goToProfile = () => {
    navigate("profile");
  };
  return (
    <Container maxWidth="xl" sx={{ my: 5 }}>
      <CategoriesMenu />
      <Box sx={{ display: "flex", justifyContent: "space-around", mt: 5 }}>
        <Box
          sx={{
            width: "650px",
            backgroundColor: "black",
            borderRadius: "sm",
            padding: 10,
          }}
        >
          <Carousel autoplay arrows infinite={true}>
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
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Avatar
                  sx={{ mr: 2, width: 58, height: 58 }}
                  aria-label="recipe"
                >
                  R
                </Avatar>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "700",
                      color: "#002f34",
                    }}
                  >
                    userName
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "#002f34",
                    }}
                  >
                    Member since Dec 2020
                  </Typography>
                  {/* <Typography onClick={goToProfile} sx={{fontSize:'14px', fontWeight:"700",color:"#002f34"}}>
                  see profile 
                  </Typography> */}
                  <Link
                    to={`/profile`}
                    style={{
                      textDecoration: "none",
                      fontSize: "14px",
                      fontWeight: "700",
                      color: "#002f34",
                    }}
                  >
                    <Typography> see profile </Typography>
                  </Link>
                </Box>
              </Box>

              <Button
                variant="contained"
                sx={{ backgroundColor: "#002f34" }}
                fullWidth
              >
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          mt: 5,
          ml: 8,
          width: "50%",
        }}
      >
        {items.map((item) => (
          <React.Fragment key={item.id}>
            <Box
              sx={{
                width: "100%",
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
                  color="#002f34"
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
                  mt={1}
                  component="div"
                  variant="h6"
                  sx={{ color: "#002f34" }}
                  fontWeight={700}
                >
                  {item.title}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 1,
                  }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    component="div"
                  >
                    {item.location}
                  </Typography>
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

            {/* ---------------------------------------------Details------------------------------- */}

            <Box
              sx={{
                width: "100%",
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
                  color="#002f34"
                  component="div"
                  fontWeight={700}
                  sx={{ marginBottom: 2 }}
                >
                  Details
                </Typography>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: 2,
                  }}
                >
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    component="div"
                    fontWeight={400}
                    sx={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <span>Is Deliverable</span>
                    <span>No</span>
                  </Typography>
                  <Typography
                    variant="body1"
                    color="#002f34"
                    component="div"
                    fontWeight={700}
                    sx={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <span style={{ color: "text.secondary" }}>Brand</span>
                    <span>Tecno</span>
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    component="div"
                    sx={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <span fontWeight={400}>Price</span>
                    <span fontWeight={700}>37,500</span>
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    component="div"
                    sx={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <span fontWeight={400}>Condition</span>
                    <span fontWeight={700}>Used</span>
                  </Typography>
                </Box>
              </CardContent>
            </Box>

            {/* ---------------------------------------------Description------------------------------- */}

            <Box
              sx={{
                width: "100%",
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
                  Description
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
                  {item.description}
                </Typography>
              </CardContent>
            </Box>
          </React.Fragment>
        ))}
      </Box>
    </Container>
  );
};

export default ProductSelect;
