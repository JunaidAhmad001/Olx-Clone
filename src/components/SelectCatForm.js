import React, { useState } from 'react';
import {
  TextField,
  Box,
  Typography,
  Link,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
  Container,
  Switch,
  FormControlLabel,
  Avatar
} from '@mui/material';
import CategorySelectionModal from './CategorySectionModal';

const SelectCatForm = ({
  setSelectedCategory,
  setSelectedSubcategory,
  selectedCategory,
  selectedSubcategory,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [type, setType] = useState('Car Parts');
  const [condition, setCondition] = useState('New');
  const [formValues, setFormValues] = useState({
    adTitle: '',
    description: '',
    price: '',
    location: '',
    name: 'Junaid Ahmad',
    phone: '',
  });
  const [formErrors, setFormErrors] = useState({
    adTitle: false,
    price: false,
    location: false,
    phone: false,
  });

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };

  const validateField = (id, value) => {
    setFormErrors({
      ...formErrors,
      [id]: !value,
    });
  };

  const handleBlur = (event) => {
    const { id, value } = event.target;
    validateField(id, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = Object.values(formValues).every((value) => value);
    if (isValid) {
      // Submit the form
      console.log('Form submitted:', formValues);
    } else {
      // Mark all fields as touched to display errors
      const newErrors = {};
      Object.keys(formValues).forEach((key) => {
        newErrors[key] = !formValues[key];
      });
      setFormErrors(newErrors);
    }
  };

  const categories = [
    'Mobile',
    'Vehicles',
    'Properties for Sale',
    'Properties for Rent',
    'Electronics and Home Appliances',
    'Bikes, Business Industrial',
    'Services',
    'Jobs',
    'Animal',
    'Furniture',
    'Fashion',
    'Books',
    'Kids',
  ];

  const subcategories = {
    Mobile: ['Smartphones', 'Accessories', 'Tablets'],
    Vehicles: ['Cars', 'Motorcycles', 'Trucks'],
    'Properties for Sale': ['Houses', 'Apartments', 'Land'],
    'Properties for Rent': ['Houses', 'Apartments', 'Rooms'],
    'Electronics and Home Appliances': ['TVs', 'Refrigerators', 'Washing Machines'],
    'Bikes, Business Industrial': ['Mountain Bikes', 'Road Bikes', 'Electric Bikes'],
    Services: ['Home Services', 'Business Services', 'Personal Services'],
    Jobs: ['Full-Time', 'Part-Time', 'Freelance'],
    Animal: ['Dogs', 'Cats', 'Birds'],
    Furniture: ['Sofas', 'Tables', 'Chairs'],
    Fashion: ['Men', 'Women', 'Kids'],
    Books: ['Fiction', 'Non-Fiction', 'Textbooks'],
    Kids: ['Toys', 'Clothes', 'Books'],
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
  };

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
    handleCloseModal();
  };

  return (
    <div>
      <Container maxWidth="lg">
        <Typography variant="h5" gutterBottom>POST YOUR AD</Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginBottom: 2 }}
        >
          <Typography variant="subtitle1">Selected Category</Typography>
          <Typography variant="subtitle1" gutterBottom sx={{ marginLeft: 2 }}>
            {`${selectedCategory} / ${selectedSubcategory}`}
          </Typography>
          <Link
            onClick={handleOpenModal}
            sx={{ typography: 'subtitle1', color: 'black', display: 'flex', alignItems: 'center', marginLeft: 2 }}
          >
            Change
          </Link>
        </Box>

        <Divider sx={{ marginY: 2 }} />

        <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Typography variant="h6" gutterBottom>INCLUDE SOME DETAILS</Typography>
          <TextField
            id="adTitle"
            label="Ad title"
            placeholder="Mention the key features of your item (e.g. brand, model, age, type)"
            fullWidth
            margin="normal"
            required
            error={formErrors.adTitle}
            helperText={formErrors.adTitle && 'Ad title is required'}
            value={formValues.adTitle}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          <TextField
            id="description"
            label="Description"
            placeholder="Include condition, features and reason for selling"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            value={formValues.description}
            onChange={handleInputChange}
          />

          <Divider sx={{ marginY: 2 }} />

          <Typography variant="h6" gutterBottom>Type</Typography>
          <ToggleButtonGroup
            value={type}
            exclusive
            onChange={(event, newType) => setType(newType)}
            aria-label="type"
            sx={{ marginBottom: 2 }}
          >
            <ToggleButton value="Car Parts" aria-label="car parts">
              Car Parts
            </ToggleButton>
            <ToggleButton value="Other Parts" aria-label="other parts">
              Other Parts
            </ToggleButton>
          </ToggleButtonGroup>

          <Divider sx={{ marginY: 2 }} />

          <Typography variant="h6" gutterBottom>Condition</Typography>
          <ToggleButtonGroup
            value={condition}
            exclusive
            onChange={(event, newCondition) => setCondition(newCondition)}
            aria-label="condition"
          >
            <ToggleButton value="New" aria-label="new">
              New
            </ToggleButton>
            <ToggleButton value="Used" aria-label="used">
              Used
            </ToggleButton>
          </ToggleButtonGroup>
          <Divider sx={{ marginY: 2 }} />

          <Typography variant="h6" gutterBottom>Set a Price</Typography>
          <TextField
            id="price"
            label="Price"
            placeholder="Enter a price"
            fullWidth
            required
            margin="normal"
            error={formErrors.price}
            helperText={formErrors.price && 'Price is required'}
            value={formValues.price}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          <Divider sx={{ marginY: 2, color: 'black' }} />

          <Typography variant="h6" gutterBottom>YOUR AD'S LOCATION</Typography>
          <TextField
            id="location"
            label="Location"
            placeholder="Enter your location"
            fullWidth
            required
            margin="normal"
            error={formErrors.location}
            helperText={formErrors.location && 'Location is required'}
            value={formValues.location}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          <Divider sx={{ marginY: 2 }} />

          <Typography variant="h6" gutterBottom>REVIEW YOUR DETAILS</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
            <Box
              sx={{
                width: 50,
                height: 50,
                backgroundColor: '#f5f5f5',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 2,
              }}
            >
               <Avatar
                aria-label="recipe"
                src={require("../images/pic.jpg")}
                sx={{ width: 80, height: 80 }}
              />
            </Box>
            <TextField
              id="name"
              label="Name"
              value={formValues.name}
              fullWidth
              margin="normal"
              disabled
            />
          </Box>
          <TextField
            id="phone"
            label="Mobile Phone Number"
            placeholder="+92 Phone number"
            fullWidth
            required
            margin="normal"
            error={formErrors.phone}
            helperText={formErrors.phone && 'Phone number is required'}
            value={formValues.phone}
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 }}>
            <Typography>Show my phone number in ads</Typography>
            <Switch name="showPhoneNumber" color="primary" />
          </Box>
          <Divider sx={{ marginY: 2, color: 'black' }} />
          <Button type="submit" variant="contained" color="primary" sx={{ backgroundColor:"#002f34"}}>Post now</Button>
        </Box>

        <Dialog open={openModal} onClose={handleCloseModal}>
          <DialogTitle>Select Category</DialogTitle>
          <DialogContent>
            <CategorySelectionModal
              categories={categories}
              subcategories={subcategories[selectedCategory]}
              handleCategoryClick={handleCategoryClick}
              handleSubcategoryClick={handleSubcategoryClick}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModal} variant="contained" color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </div>
  );
};

export default SelectCatForm;
