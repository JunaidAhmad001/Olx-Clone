import React from "react";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Share from "@mui/icons-material/Share";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Chip from "@mui/material/Chip";
import { Divider } from "@mui/material";
import { FavoriteBorder } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import S1 from "../images/dummy.png";
import Footer from "../components/FooterCom";
import SmallFooter from "../components/SmallFooter";
const ads = [
  {
    id: 1,
    title: "REDMI NOTE 13 PRO (12GB/512GB)",
    price: "Rs 77,000",
    location: "Dharampura, Lahore",
    time: "2 weeks ago",
    featured: true,
    image: "path_to_image_1.jpg", // replace with actual image paths
  },
  {
    id: 2,
    title: "REDMI NOTE 13 PRO (8GB/256GB)",
    price: "Rs 63,000",
    location: "Dharampura, Lahore",
    time: "2 weeks ago",
    featured: false,
    image: S1, // replace with actual image paths
  },
  {
    id: 3,
    title: "TECNO CAMON 30 (12GB/256GB)",
    price: "Rs 50,999",
    location: "Dharampura, Lahore",
    time: "2 weeks ago",
    featured: true,
    image: "path_to_image_3.jpg", // replace with actual image paths
  },
  {
    id: 3,
    title: "TECNO CAMON 30 (12GB/256GB)",
    price: "Rs 50,999",
    location: "Dharampura, Lahore",
    time: "2 weeks ago",
    featured: true,
    image: "path_to_image_3.jpg", // replace with actual image paths
  },
  {
    id: 3,
    title: "TECNO CAMON 30 (12GB/256GB)",
    price: "Rs 50,999",
    location: "Dharampura, Lahore",
    time: "2 weeks ago",
    featured: true,
    image: "path_to_image_3.jpg", // replace with actual image paths
  },
  {
    id: 3,
    title: "TECNO CAMON 30 (12GB/256GB)",
    price: "Rs 50,999",
    location: "Dharampura, Lahore",
    time: "2 weeks ago",
    featured: true,
    image: "path_to_image_3.jpg", // replace with actual image paths
  },
 
  // Add more ads here
];

const Profile = () => {
  return (
    <>
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={3}>
          <Card
          
            sx={{
              textAlign: "center",
              marginBottom: 4,
              padding: 2,
              maxWidth: "300px",
              border: "none",
            boxShadow: "none",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
              {/* <Avatar sx={{ width: 184, height: 184 }}>R</Avatar> */}
              <Avatar
                aria-label="recipe"
                src={require("../images/pic.jpg")}
                sx={{ width: 184, height: 184 }}
              />
            </Box>
            <Box>
              <Button
                variant="outlined"
                sx={{ marginRight: 1, color: "black", mt: 1 }}
              >
                <Share /> Share user profile
              </Button>
            </Box>
            <Button
              variant="text"
              sx={{
                marginRight: 1,
                fontWeight: 700,
                fontSize: "16px",
                textTransform: "capitalize",
              }}
            >
              Report user |
            </Button>
            <Button
              variant="text"
              sx={{
                fontWeight: 700,
                fontSize: "16px",
                textTransform: "capitalize",
              }}
            >
              Block user
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <Typography variant="h4" sx={{ color: "black", marginBottom: 2 }}>
            Name
          </Typography>
          <Divider sx={{ marginBottom: 2, bgcolor: "grey" }} />
          <Typography variant="h6" sx={{ color: "white", marginBottom: 2 }}>
            Filter by:
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: 1,
              border: "1px solid #e0e0e0",
              borderRadius: 2,
              bgcolor: "white",
              maxWidth: "200px",
            }}
          >
            <LocationOnIcon sx={{ color: "black", marginRight: 1 }} />
            <Typography variant="body1" sx={{ color: "black" }}>
              Pakistan
            </Typography>
          </Box>
          <Grid container spacing={2} sx={{ marginTop: 2 }}>
            {ads.map((ad) => (
              <Grid item xs={12} sm={6} md={4} key={ad.id}>
                <Card>
                  <CardMedia
                    component="img"
                    image={S1}
                    alt={ad.title}
                    sx={{ maxHeight: "140", objectFit: "cover" }}
                  />
                  {/* {ad.featured && (
      <Chip
        label="Featured"
        color="primary"
        sx={{ position: "absolute", top: 10, left: 10 }}
      />
    )} */}
                  <CardContent sx={{ position: "relative" }}>
                    <Typography
                      variant="h6"
                      sx={{ color: "black", fontWeight: "bold" }}
                    >
                      {ad.price}
                    </Typography>
                    {/* Positioning the IconButton to the right */}
                    <IconButton
                      sx={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        color: "black",
                      }}
                    >
                      <FavoriteBorder />
                    </IconButton>
                    <Typography
                      variant="body2"
                      color="text.primary"
                      sx={{ marginBottom: 1 }}
                    >
                      {ad.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {ad.location}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {ad.time}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
    <Footer/>
    <SmallFooter/>
    

    </>
  );
};

export default Profile;
