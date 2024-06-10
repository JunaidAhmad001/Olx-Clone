import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const AvatarCategories = () => {
  const totalAvatars = 14; // Total number of avatars you want to render
  const name = [
    "Mobile",
    "Vehicles",
    "Properties for Sale",
    "Properties for Rent",
    "Electronics and Home Appliances",
    "Bikes, Business Industrial",
    "Services",
    "Jobs",
    "Animal",
    "Furniture",
    "Fashion",
    "Books",
    "Kids",
    "Kids",
  ];

  return (
    <Container maxWidth="lg">
      <Typography variant="h6" gutterBottom>
        All Categories
      </Typography>
      <Grid container >
        {[...Array(totalAvatars)].map((_, index) => (
          <Grid item key={index} xs={6} sm={4} md={2} lg={2} xl={1} ml={3}>
            <Avatar
              alt={`Category ${index + 1}`}
              src={require(`../images/${index + 1}.png`)}
              sx={{ width: 100, height: 100, margin: "auto" }}
            />
            <Typography variant="subtitle2" align="center">
              {name[index]}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AvatarCategories;
