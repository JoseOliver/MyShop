import React, { useState } from 'react';
import './NavBar.css';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { List, ListItemButton, ListItemText, Fab, useMediaQuery, Avatar, IconButton, Menu, MenuItem, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import KeyboardArrowUpIcon from '@mui/icons-material/ArrowUpward'
import { Navigate, useNavigate } from 'react-router-dom';
import { AccountCircle } from '@mui/icons-material';

const NavBar = (props) => {

    const theme = useTheme();
    const is_sm = useMediaQuery(theme.breakpoints.up('sm'));
    const navigate = useNavigate();
    const [perfilMenu, setPerfilMenu] = useState(false);

    const handleOpenPerfilMenu = (event) => {
      setPerfilMenu(true);
    };

    const handleClosePerfilMenu = () => {
      setPerfilMenu(false);
    };

    function HideOnScroll(props) {
        const { children, window } = props;
        const trigger = useScrollTrigger({
          target: window ? window() : undefined,
        });
      
        return (
          <Slide appear={false} direction="down" in={perfilMenu || !trigger}>
            {children}
          </Slide>
        );
    }
    const ShowOnScroll = (props) => {
        const { children, window } = props;
        const trigger = useScrollTrigger({
            disableHysteresis: true,
            threshold: 100,
            target: window ? window() : undefined,
          });

        return (
            <Slide appear={false} direction="up" in={trigger}>
              {children}
            </Slide>
          );
    }
    
  return (
    <>
        <CssBaseline />
        <HideOnScroll {...props}>
            <AppBar>
                <Toolbar className={is_sm?"":"invisible"}>
                  <List id='nav' component="nav" className='row menu'>
                      <img id='logo' src={"logo_ico.ico"} className="logo" alt="logo" height={"70px"} onClick={()=>navigate("/")} />
                      <ListItemButton id='home' onClick={()=>navigate("/")} >
                          <ListItemText primary="Home" />
                      </ListItemButton>
                      <hr />
                      <ListItemButton id='categorias' onClick={()=>navigate("/categorias")} >
                          <ListItemText primary="Categorias" />
                      </ListItemButton>
                  </List>
                  <Box className={"float-right"}>
                    <IconButton
                      size="large"
                      aria-label="Perfil"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleOpenPerfilMenu}
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      // anchorEl={perfilContent}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={perfilMenu}
                      onClose={handleClosePerfilMenu}
                    >
                      <MenuItem onClick={handleClosePerfilMenu} >Perfil</MenuItem>
                      <MenuItem onClick={handleClosePerfilMenu} >Configuración</MenuItem>
                    </Menu>
                  </Box>
                </Toolbar>
                <Toolbar className={is_sm?"invisible":""}>
                    <ListItemText primary="pequeño" />
                </Toolbar>
            </AppBar>
        </HideOnScroll>
        <ShowOnScroll {...props}>
            
        <Fab className='boton-sticky' size="small" aria-label="scroll back to top" onClick={()=>scrollTo(0,0)}>
            <KeyboardArrowUpIcon />
        </Fab>
        </ShowOnScroll>
    </>
    
  )
}

export default NavBar