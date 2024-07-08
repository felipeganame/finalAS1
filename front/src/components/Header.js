import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import logo from '../assets/My-online-course.svg';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          component="img"
          sx={{
            height: 200, // Increase the height
            position: 'absolute', // Position it absolutely
            top: '50%', // Center it vertically
            transform: 'translateY(-50%)', // Center it vertically
            marginRight: 2,
            zIndex: 0,
          }}
          alt="My Online Courses"
          src={logo}
        />
        <Box sx={{ flexGrow: 1 }} />
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/about ">About us</Button>
        <Button color="inherit" component={Link} to="/login">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
