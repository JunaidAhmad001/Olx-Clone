import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RouteComponent from './pages/Route';
import Categories from './components/PostAdd';
import SelectCatForm from './components/SelectCatForm';
import MobileList from './components/MobileList';
import ProductSelect from './components/SelectedProduct'
import Profile from './components/Profile';
function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RouteComponent />,
      children: [{ path: 'home', element: <RouteComponent /> }],
    },
    {
      path: 'post',
      element: (
        <Categories
          setSelectedCategory={setSelectedCategory}
          setSelectedSubcategory={setSelectedSubcategory}
          selectedCategory={selectedCategory}
          selectedSubcategory={selectedSubcategory}
        />
      ),
    },
    {
      path: 'home/:category',
      element: <MobileList />,
    },
    {
      path: 'home/:category/:id',
      element: <ProductSelect />,
    },
    {
      path: 'post/attributes',
      element: (
        <SelectCatForm
          setSelectedCategory={setSelectedCategory}
          setSelectedSubcategory={setSelectedSubcategory}
          selectedCategory={selectedCategory}
          selectedSubcategory={selectedSubcategory}
        />
      ),
    },
    {
      path: 'profile',
      element: (
        <Profile />
        
      ),
    },
  ]);
   
  console.log('App rendering with selectedCategory:', selectedCategory);

  return <RouterProvider router={router} />;
}

export default App;
