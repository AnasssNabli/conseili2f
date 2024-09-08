import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    List,
    ListItem,
    Typography,
    styled,
    ListItemButton,
    ListItemText,
    Menu,
    MenuItem,
} from '@mui/material';
import { Link } from 'react-router-dom';
import DrawerItem from './DrawerItem';

// Personalization
const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
});

const ListMenu = styled(List)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up("md")]: {
        display: "flex",
    },
}));

const StyledMenu = styled(Menu)(({ theme }) => ({
    '& .MuiPaper-root': {
        marginTop: theme.spacing(1),
        backgroundColor: 'white',
    },
}));

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
        setIsMenuOpen(true); // Menu is open
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setIsMenuOpen(false); // Menu is closed
    };

    return (
        <AppBar 
            component="nav" 
            position="sticky"
            sx={{ 
                backgroundColor: 'white', 
            }}
            elevation={0}
        >
            <StyledToolbar>
                <Typography
                    variant="h6"
                    component="h2"
                >
                    <img 
                        src="/img/conseil.png" 
                        alt="Conseil"
                        style={{ height: '150px' }} 
                    />
                </Typography>
                <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                    <DrawerItem /> 
                </Box>
                <ListMenu>
                    {/* List items here */}
                    <ListItem key={"Accueil"}>
                        <ListItemButton component={Link} to={"/"}
                            sx={{
                                color: '#1e2a5a', // Darker text color
                                "&:hover": {
                                    backgroundColor: 'transparent',
                                    color: '#1e2a5a',
                                }
                            }}
                        >
                            <ListItemText primary={"Accueil"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={"Qui sommes nous"}>
                        <ListItemButton component={Link} to={"/about"}
                            sx={{
                                color: '#1e2a5a', // Darker text color
                                "&:hover": {
                                    backgroundColor: 'transparent',
                                    color: '#1e2a5a',
                                },
                                whiteSpace: 'nowrap',
                            }}
                        >
                            <ListItemText 
                                primary={"Qui sommes nous"} 
                                primaryTypographyProps={{
                                    noWrap: true,
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={"Services"}>
                        <ListItemButton
                            sx={{
                                color: '#1e2a5a', // Darker text color
                                "&:hover": {
                                    backgroundColor: 'transparent',
                                    color: '#1e2a5a',
                                }
                            }}
                            onClick={handleMenuOpen}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                Services
                                <Typography 
                                    sx={{
                                        marginLeft: 1,
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {isMenuOpen ? '>' : '˅'}
                                </Typography>
                            </Box>
                        </ListItemButton>
                        <StyledMenu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem 
                                onClick={handleMenuClose}  
                                component={Link} 
                                to={"/fiscale"}
                                sx={{ 
                                    fontSize: '0.75rem', 
                                    fontWeight: '600', 
                                    color: '#4b5563' // Tailwind `text-blue-gray-500` equivalent
                                }}
                            >
                                Comptable et fiscale
                            </MenuItem>
                            <MenuItem 
                                onClick={handleMenuClose} 
                                component={Link} 
                                to={"/paie-conseil-social"}
                                sx={{ 
                                    fontSize: '0.75rem', 
                                    fontWeight: '600', 
                                    color: '#4b5563'
                                }}
                            >
                                Paie et conseil social
                            </MenuItem>
                            <MenuItem 
                                onClick={handleMenuClose} 
                                component={Link} 
                                to={"/conseil-gestion"}
                                sx={{ 
                                    fontSize: '0.75rem', 
                                    fontWeight: '600', 
                                    color: '#4b5563'
                                }}
                            >
                                Conseil en gestion
                            </MenuItem>
                            <MenuItem 
                                onClick={handleMenuClose} 
                                component={Link} 
                                to={"/audit"}
                                sx={{ 
                                    fontSize: '0.75rem', 
                                    fontWeight: '600', 
                                    color: '#4b5563'
                                }}
                            >
                                Audit
                            </MenuItem>
                            <MenuItem 
                                onClick={handleMenuClose} 
                                component={Link} 
                                to={"/formation-comptabilite-fiscalite"}
                                sx={{ 
                                    fontSize: '0.75rem', 
                                    fontWeight: '600', 
                                    color: '#4b5563'
                                }}
                            >
                                Formation Comptabilité et Fiscalité
                            </MenuItem>
                        </StyledMenu>
                    </ListItem>
                    <ListItem key={"Contact us"}>
                        <ListItemButton component={Link} to={"/Contact"}
                            sx={{
                                color: '#1e2a5a', // Darker text color
                                "&:hover": {
                                    backgroundColor: 'transparent',
                                    color: '#1e2a5a',
                                },
                                whiteSpace: 'nowrap',
                            }}
                        >
                            <ListItemText primary={"Contact us"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={"Votre Devis"}>
                        <ListItemButton component={Link} to={"/Votre-Devis"}
                            sx={{
                                color: '#1e2a5a', // Darker text color
                                "&:hover": {
                                    backgroundColor: 'transparent',
                                    color: '#1e2a5a',
                                },
                                whiteSpace: 'nowrap',
                            }}
                        >
                            <span 
                                style={{ 
                                    backgroundColor: '#17a2b8', // Bootstrap info color
                                    color: 'white',
                                    borderRadius: '10px',
                                    padding: '2px 8px',
                                    fontSize: '1.25rem',
                                    fontWeight: 'bold',
                                }}
                            >
                                Votre Devis
                            </span>
                        </ListItemButton>
                    </ListItem>
                </ListMenu>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar;
