// pages/Route.js
import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from '../components/AppBar';
import CategoriesMenu from '../components/CategoriesMenu';
import AvatarCategories from '../components/Categories';
import MobileCat from '../components/MobileCat';
import ImageScroll from '../components/CaroselImages';
import CarCategories from '../components/CarsCat';
import Footer from '../components/FooterCom';
import SmallFooter from '../components/SmallFooter';
import SellBtn from '../components/SellBtn';
import { Container } from '@mui/material';
function Route() {
  return (
    <>
      <ResponsiveAppBar />
      <div style={{ marginTop: '120px', padding: '20px' }}>
        <CategoriesMenu />
      </div>

      <ImageScroll />
      <Container maxWidth="xl">
      <AvatarCategories/>
      <MobileCat />
      <CarCategories />
      </Container>
      

      <Footer />
      <SmallFooter />
     {/* Ensure SellBtn is rendered */}
      {/* <Outlet /> */}
    </>
  );
}

export default Route;
