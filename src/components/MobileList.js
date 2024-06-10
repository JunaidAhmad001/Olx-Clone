import React, { useState, useEffect } from 'react';
import ResponsiveAppBar from '../components/AppBar';
import Sidebar from './SideBarComp';
import CategoriesMenu from '../components/CategoriesMenu';

const MobileList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All categories');
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    // console.log('MobileList mounted with selectedCategory:', selectedCategory);
  }, []);

  const handleCategoryClick = (category) => {
    console.log("handleCategoryClick called with category:", category);
    setSelectedCategory(category);
    const subcategoryMap = {
      'Mobile Phones': ['Smartphones', 'Feature Phones', 'Accessories'],
      'Cars': ['Sedans', 'SUVs', 'Trucks'],
      'Motorcycles': ['Sport Bikes', 'Cruisers', 'Scooters'],
      'Houses': ['Villas', 'Apartments', 'Cottages'],
      'Video-Audios': ['TVs', 'Speakers', 'Headphones'],
      'Tablets': ['iPad', 'Android Tablets', 'Windows Tablets'],
      'Land & Plots': ['Residential Plots', 'Commercial Plots', 'Agricultural Land'],
    };
    const selectedSubcategories = subcategoryMap[category] || [];
    setSubcategories(selectedSubcategories);
    console.log("Selected Category:", category);
    console.log("Selected Subcategories:", selectedSubcategories);
  };

  return (
    <>
      <ResponsiveAppBar />
      <CategoriesMenu onCategoryClick={handleCategoryClick} />
      <Sidebar selectedCategory={selectedCategory} subcategories={subcategories} />
    </>
  );
};

export default MobileList;
