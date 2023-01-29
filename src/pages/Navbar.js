import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import CoffeeIcon from '@mui/icons-material/Coffee';
import {NavLink} from 'react-router-dom'

const Navbar = () => {

  return (
    <AppBar position="sticky" sx={{backgroundColor: '#222831'}} >
      <Container maxWidth="xl">
        <Toolbar>
          <CoronavirusIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CO
            <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'red',
              textDecoration: 'none',
            }}>VAC
            </Typography>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
            </Menu>
          </Box>
          <CoronavirusIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CO
            <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'red',
              textDecoration: 'none',
            }}
            >VAC
            </Typography>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button sx={{ my: 2, display: 'block',color:'white' }} className="navButton">
                  <NavLink to={'/'} style={({ isActive }) => ({ backgroundColor: isActive ? '#0099C3' : 'transparent', padding:'0.5rem 0.8rem', color:'white',borderRadius:'5px'})}>
                  COVID-19
                  </NavLink>
                </Button>
                <Button sx={{ my: 2, display: 'block',color:'white' }} className="navButton">
                  <NavLink to={'/News'} style={({ isActive }) => ({ backgroundColor: isActive ? '#0099C3' : 'transparent', padding:'0.5rem 0.8rem', color:'white',borderRadius:'5px'})}>
                    News
                  </NavLink>
                </Button>
                <Button sx={{ my: 2, display: 'block',color:'white' }} className="navButton">
                  <NavLink to={'/About'} style={({ isActive }) => ({ backgroundColor: isActive ? '#0099C3' : 'transparent', padding:'0.5rem 0.8rem', color:'white',borderRadius:'5px'})}>
                    About
                  </NavLink>
                </Button>
              
          </Box>
          <Button
            sx={{
              ':hover':{
                backgroundColor: '#0099C3'
              },
            my: 2, color: 'white', 
            textTransform: 'capitalize', 
            display: { xs: 'none', md: 'flex' }, 
            alignItems:'center', 
            backgroundColor: '#0099C3' }}
            className="buyCoffee"
            >
            <CoffeeIcon sx={{mr: 1 }}/>
            Buy us a coffee
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar