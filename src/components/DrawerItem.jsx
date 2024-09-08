import React, { useState } from 'react';
import {  
  styled, 
  useTheme,
  Drawer,
  Divider,
  List,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@mui/material';
// rotas
import { Link } from 'react-router-dom';
// icons
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ServicesIcon from '@mui/icons-material/Build'; // Example icon for services
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 5),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

// Routes
const itemList = [
  {
    text: "Home",
    icon: <HomeIcon />,
    to: "/"
  },
  {
    text: "About",
    icon: <InfoIcon />,
    to: "/about"
  },
  {
    text: "Services",
    icon: <ServicesIcon />,
    subItems: [
      { text: "Comptable et fiscale", to: "/fiscale" },
      { text: "Paie et conseil social", to: "/paie-conseil-social" },
      { text: "Conseil en gestion", to: "/conseil-gestion" },
      { text: "Audit", to: "/audit" },
      { text: "Formation Comptabilité et Fiscalité", to: "/formation-comptabilite-fiscalite" },
    ],
  },
  {
    text: "Contact",
    icon: <EmailIcon />,
    to: "/contact"
  }
];

const DrawerItem = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [openServices, setOpenServices] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleServicesClick = () => {
    setOpenServices(!openServices);
  };

  return (
    <>
      <IconButton
        color="dark"
        aria-label="open drawer"
        edge="end"
        onClick={handleDrawerOpen}
        sx={{ ...(open && { display: 'none' }) }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        sx={{
          flexGrow: 1,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {itemList.map((item) => {
            const { text, icon, to, subItems } = item;
            return (
              <React.Fragment key={text}>
                {subItems ? (
                  <>
                    <ListItem 
                      button 
                      onClick={handleServicesClick}
                      sx={{
                        color: '#414141',
                        "&:hover": {
                          backgroundColor: '#e9e5e5',
                          color: '#1c2859',
                        }
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          "&:hover": {
                            backgroundColor: 'transparent',
                            color: '#1c2859',
                          }
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {openServices ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={openServices} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {subItems.map((subItem) => (
                          <ListItem
                            key={subItem.text}
                            component={Link}
                            to={subItem.to}
                            sx={{
                              pl: 4,
                              color: '#414141',
                              "&:hover": {
                                backgroundColor: '#e9e5e5',
                                color: '#1c2859',
                              }
                            }}
                          >
                            <ListItemText primary={subItem.text} />
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  </>
                ) : (
                  <ListItem 
                    key={text} 
                    component={Link} 
                    to={to}
                    sx={{
                      color: '#414141',
                      "&:hover": {
                        backgroundColor: '#e9e5e5',
                        color: '#1c2859',
                      }
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        "&:hover": {
                          backgroundColor: 'transparent',
                          color: '#1c2859',
                        }
                      }}
                    >
                      {icon}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                )}
              </React.Fragment>
            );
          })}
        </List>
      </Drawer>
    </>
  );
}

export default DrawerItem;
