import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

//drawer用import
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

//routing
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import "./BarStyle.css";

export default function ButtonAppBar() {

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
       
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            <ListItem>
            <ListItemText><Link className="DrawLink" to="/profile">profile</Link></ListItemText>
            </ListItem>
            <ListItem>
            <ListItemText><Link className="DrawLink" to="/schedule">schedule</Link></ListItemText>
            
            </ListItem>
            <ListItem>
            <ListItemText><Link className="DrawLink" to="/news">news</Link></ListItemText>
            </ListItem>
            <ListItem>
            <ListItemText>goods</ListItemText>
            </ListItem>
            <ListItem>
            <ListItemText>discography</ListItemText>
            </ListItem>
            
          </List>
          <Divider />
          <List>
            <ListItem>
                <ListItemText>test</ListItemText>
            </ListItem>
          </List>
        </Box>

      );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#ffffff"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color= "#eea0c2"
            aria-label="menu"
            sx={{ mr: 2 ,color:"#eea0c2"}}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,color:"#eea0c2"}}>
            <Link className="logo" to="/home">
            aurora
            </Link>
          </Typography>
          <Button color="inherit" sx={{ color: '#eea0c2' }}>Login</Button>
          <a className="headB" href="#"color="inherit" >about</a>
    
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </Toolbar>
      </AppBar>

    </Box>
    
  );
}

/*
{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
*/