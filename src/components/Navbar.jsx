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

// personalizacao
const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
});

const ListMenu = styled(List)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.up("sm")]: {
        display: "flex",
    },
}));

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar 
        component="nav" 
        position="sticky"
        sx={{ 
            backgroundColor: 'orange', 
        }}
        elevation={0}
        >
            <StyledToolbar>
                <Typography
                variant="h6"
                component="h2"
                >
                    I2F CONSEIL
                </Typography>
                
                <ListMenu>
                    <ListItem key={"Accueil"}>
                        <ListItemButton component={Link} to={"/"}
                            sx={{
                                color: '#fff',
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
                                color: '#fff',
                                "&:hover": {
                                    backgroundColor: 'transparent',
                                    color: '#1e2a5a',
                                }
                            }}
                        >
                            <ListItemText primary={"Qui sommes nous"} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem key={"Services"}>
                        <ListItemButton
                            sx={{
                                color: '#fff',
                                "&:hover": {
                                    backgroundColor: 'transparent',
                                    color: '#1e2a5a',
                                }
                            }}
                            onClick={handleMenuOpen}
                        >
                            <ListItemText primary={"Services"} />
                        </ListItemButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleMenuClose} component={Link} to={"/fiscale"}>Fiscale</MenuItem>
                            <MenuItem onClick={handleMenuClose} component={Link} to={"/commercial"}>Commercial</MenuItem>
                            <MenuItem onClick={handleMenuClose} component={Link} to={"/verbales"}>Verbales</MenuItem>
                        </Menu>
                    </ListItem>
                </ListMenu>
            </StyledToolbar>
        </AppBar>
    )
}

export default Navbar;
