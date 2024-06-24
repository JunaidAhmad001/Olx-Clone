import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Container,
  Avatar,
  Typography,
  Card,
  IconButton,
  Box,
  CardHeader,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const AvatarCategories = ({
  setSelectedCategory,
  setSelectedSubcategory,
  selectedCategory,
  selectedSubcategory,
}) => {
  const navigate = useNavigate();
  // const [selectedCategory, setSelectedCategory] = useState(null);
  // const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [isDetailView, setIsDetailView] = useState(false); // State to toggle view

  const names = [
    "Mobiles",
    "Vehicles",
    "Property for Sale",
    "Property for Rent",
    "Electronics & Home Appliances",
    "Bikes",
    "Services",
    "Jobs",
    "Animals",
    "Furniture & Home Decor",
    "Fashion & Beauty",
    "Books, Sports & Hobbies",
    "Kids",
  ];

  const subcategories = {
    Mobiles: ["Smartphones", "Accessories", "Tablets"],
    Vehicles: [
      "Cars",
      "Cars on Installments",
      "Car Accessories",
      "Spare Parts",
      "Buses, Vans & Trucks",
      "Rickshaw & Chingchi",
      "Other Vehicles",
      "Boats",
      "Tractors & Trailers",
    ],
    "Property for Sale": ["Houses", "Apartments", "Land"],
    "Property for Rent": ["Houses", "Apartments", "Rooms"],
    "Electronics & Home Appliances": [
      "TVs",
      "Refrigerators",
      "Washing Machines",
    ],
    Bikes: ["Mountain Bikes", "Road Bikes", "Electric Bikes"],
    Services: ["Home Services", "Business Services", "Personal Services"],
    Jobs: ["Full-Time", "Part-Time", "Freelance"],
    Animals: ["Dogs", "Cats", "Birds"],
    "Furniture & Home Decor": ["Sofas", "Tables", "Chairs"],
    "Fashion & Beauty": ["Men", "Women", "Kids"],
    "Books, Sports & Hobbies": ["Fiction", "Non-Fiction", "Textbooks"],
    Kids: ["Toys", "Clothes", "Books"],
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);

    setSelectedSubcategory(null); // Reset selected subcategory
    setIsDetailView(true); // Switch to detail view
  };

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
    navigate("/post/attributes");
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h5" align="center" gutterBottom sx={{ my: 2 }}>
        Choose a category
      </Typography>
      {!isDetailView ? (
        <Grid container spacing={2}>
          {names.map((name, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                onClick={() => handleCategoryClick(name)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  padding: "10px",
                  backgroundColor:
                    selectedCategory === name ? "lightblue" : "transparent",
                  transition: "background-color 0.3s ease",
                }}
              >
                <Avatar
                  alt={`Category ${index + 1}`}
                  src={require(`../images/${index + 1}.png`)}
                  sx={{ width: 56, height: 56, marginRight: 2 }}
                />
                <Typography variant="subtitle1" flexGrow={1}>
                  {name}
                </Typography>
                <IconButton>
                  <KeyboardArrowRightIcon />
                </IconButton>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box sx={{ marginTop: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" align="center" gutterBottom>
                Categories
              </Typography>
              <Grid container spacing={2}>
                {names.map((name, index) => (
                  <Grid item xs={12} sm={12} key={index}>
                    <Card
                      onClick={() => handleCategoryClick(name)}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                        padding: "10px",
                        backgroundColor:
                          selectedCategory === name
                            ? "lightblue"
                            : "transparent",
                        transition: "background-color 0.3s ease",
                      }}
                    >
                      <Avatar
                        alt={`Category ${index + 1}`}
                        src={require(`../images/${index + 1}.png`)}
                        sx={{ width: 56, height: 56, marginRight: 2 }}
                      />
                      <Typography variant="subtitle1" flexGrow={1}>
                        {name}
                      </Typography>
                      <IconButton>
                        <KeyboardArrowRightIcon />
                      </IconButton>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
              <Typography variant="h6" align="center" gutterBottom>
                {selectedCategory} Subcategories
              </Typography>
              {/* <Grid container spacing={2}>
                {subcategories[selectedCategory].map((subcat, subindex) => (
                  <Grid item xs={12} sm={6} md={6} key={subindex}>
                    <Card
                      onClick={() => handleSubcategoryClick(subcat)}
                      sx={{
                        cursor: 'pointer',
                        padding: '10px',
                        backgroundColor: selectedSubcategory === subcat ? 'lightgreen' : 'transparent',
                        transition: 'background-color 0.3s ease',
                      }}
                    >
                      <Typography variant="subtitle2" align="center">
                        {subcat}
                      </Typography>
                    </Card>
                  </Grid>
                ))}
              </Grid> */}
              <Grid item xs={12} md={6}>
                {selectedCategory && (
                  <Box sx={{ padding: "10px" }}>
                    <ul style={{ listStyleType: "none", padding: 0 }}>
                      {subcategories[selectedCategory].map(
                        (subcat, subindex) => (
                          <li
                            key={subindex}
                            onClick={() => handleSubcategoryClick(subcat)}
                            style={{
                              marginBottom: "10px",
                              backgroundColor:
                                selectedSubcategory === subcat
                                  ? "lightgreen"
                                  : "transparent",
                              cursor: "pointer",
                              transition: "background-color 0.3s ease",
                            }}
                          >
                            <Card sx={{ cursor: "pointer" }}>
                              <CardHeader
                                title={
                                  <Typography variant="subtitle2" align="left">
                                    {subcat}
                                  </Typography>
                                }
                              />
                            </Card>
                          </li>
                        )
                      )}
                    </ul>
                  </Box>
                )}
              </Grid>
            </Grid>
          </Grid>
          <Box sx={{ marginTop: 2, textAlign: "center" }}>
            <Typography
              variant="body2"
              onClick={() => setIsDetailView(false)}
              sx={{
                cursor: "pointer",
                color: "blue",
                textDecoration: "underline",
              }}
            >
              Back to categories
            </Typography>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default AvatarCategories;
