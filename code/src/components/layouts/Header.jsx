// import  React,{useState}from  "react";
// import { AppBar, Box, IconButton, Toolbar, Typography } from  '@mui/material';
// import FastfoodIcon from '@mui/icons-material/Fastfood';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Link } from "react-router-dom";
// import '../../styles/HeaderStyle.css';
// import { Drawer } from "@mui/material"





//  const Header  = () => {
//    const [mobileOpen,setMobile]  = useState(false);

//    ///Handel Menu Click

//    const handleDrawerToggle  =() =>{
//        setMobileOpen (!mobileOpen)
//    }


//     ///Meny Drawer
//       const drawer  = (
//          <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>


//                     <ul className="mobile-navigation">
//                     <li><Link to="/">Home</Link></li>
//                     <li><Link to="/menu">Menu</Link></li>
//                      <li><Link to="/about">About</Link></li>
//                      <li><Link to="/contact">Contact</Link></li>
//                         </ul>
                        


            

//          </Box>
//       )

//      return(
//         <>
//          <Box>
//             <AppBar  component={"nav"}  sx={{bgcolor:"black "}}>
//                 <Toolbar>
//                   <IconButton color='inherit' aria-label="open drawer" edge="start" sx={{mr:2, display:{sm:"none"}}}>
//                      <MenuIcon/>
//                   </IconButton>
//                 <Typography color={'goldenrod'} variant='h6' component="div" sx={{flexGrow: 1}}>
//                   <FastfoodIcon/>
//                   Resturant</Typography>
//                   <Box sx={{ display: { xs: "none", sm: "block" } }}>
//                     <ul className="navigation-menu">
//                     <li><Link to="/">Home</Link></li>
//                     <li><Link to="/menu">Menu</Link></li>
//                      <li><Link to="/about">About</Link></li>
//                      <li><Link to="/contact">Contact</Link></li>
//                         </ul>
//                         </Box>


//                 </Toolbar>
//             </AppBar>
//              <Box component="nav">
//                <Drawer variant="temporary" open={mobileOpen}
//                 onClose={handleDrawerToggle}
//                 sx={{display:{xs:'block', sm:'none'},
//                }}
//                onClick={handleDrawerToggle}
//                 >
//                   {drawer}
//                </Drawer>

//              </Box>
//          </Box>
        
//         </>

//      )
// }


















import React, { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  Divider
} from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import '../../styles/HeaderStyle.css';

const Header = () => {
  const [mobileOpen, setMobile] = useState(false);

  // Handle Menu Click
  const handleDrawerToggle = () => {
    setMobile(!mobileOpen);
  };

  // Menu Drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', p: 2 }}>
      <Typography
        variant="h6"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 2,
          color: 'goldenrod',
          flexFlow:1,
          my:2

        }}
      >
        <FastfoodIcon sx={{ mr: 1 }} />
        Restaurant
      </Typography>
      <Divider/>
      <ul className="mobile-navigation">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={'goldenrod'}
              variant='h6'
              component="div"
              sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}
            >
              <FastfoodIcon sx={{ mr: 1 }} />
              Restaurant
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>

        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: 240,
                backgroundColor: '#fff',
              }
            }}
            onClick={handleDrawerToggle}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
        <Toolbar/>
        </Box>
      
      </Box>
    </>
  );
};

export default Header;
