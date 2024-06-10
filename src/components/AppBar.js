import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SearchItems from "./SearchItems";
import LoginButton from "./LoginBtn";
// import AdbIcon from '@mui/icons-material/Adb';
import CustomizedInputBase from "../components/SearchLocation";
import MyCustomIcon from "./LogoIcon";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import TimeToLeaveOutlinedIcon from "@mui/icons-material/TimeToLeaveOutlined";
import styled from "styled-components";
import Divider from "@mui/material/Divider";
import SellBtn from "./SellBtn";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const CustomIconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%; /* To make it a circle */
  /* background-color: lightblue; Change this to any color you prefer */
  background-image: linear-gradient(
    rgba(0, 47, 52, 0.16),
    rgba(0, 47, 52, 0.01) 81.77%,
    rgba(0, 47, 52, 0.01)
  );
  padding: 10px;
`;

const CustomIcon = styled(TimeToLeaveOutlinedIcon)`
  font-size: 40px; /* Increase the size of the icon */
`;

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "white", color: "black" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <MyCustomIcon sx={{ display: { xs: "flex", md: "flex" }, mr: 1 }} />

            <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
              <CustomIconWrapper>
                <CustomIcon />
              </CustomIconWrapper>
              <Typography sx={{ ml: 1 }}>Motor</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", ml: 3 }}>
              <CustomIconWrapper>
                <BusinessOutlinedIcon />
              </CustomIconWrapper>
              <Typography sx={{ ml: 1 }}>Property</Typography>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
        {/*-----------------------for Second header-------------------*/}
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Custom Icon with text */}
            <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
              <CustomizedInputBase />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
              <SearchItems />
            </Box>
            {/* Custom Property Icon with text */}
            <Box sx={{ display: "flex", alignItems: "center", ml: 1 }}>
              <LoginButton />

              <Typography sx={{ ml: 1 }}>
                <SellBtn />
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Divider />
    </>
  );
}

export default ResponsiveAppBar;
