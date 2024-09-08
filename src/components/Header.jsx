import React from 'react';
import { Box, Button, styled, Typography, useTheme } from "@mui/material";
import { Link } from 'react-router-dom';

// Background images
const backgroundImage = '/img/Business.jpg';
const checkImg = '/img/check.png';
const logoImg = '/img/conseil.png';

const Header = () => {
    // Access the theme using useTheme
    const theme = useTheme();

    const CustomBox = styled(Box)(({ theme }) => ({
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: theme.spacing(2),
        paddingTop: theme.spacing(10),
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for clarity
        },
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            textAlign: 'center',
            paddingTop: theme.spacing(8),
        }
    }));

    const BoxText = styled(Box)(({ theme }) => ({
        flex: 1,
        paddingLeft: theme.spacing(8),
        zIndex: 1, // Ensure the text is above the overlay
        color: '#fff',
        [theme.breakpoints.down('md')]: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            textAlign: 'center', // Center align text on small screens
        },
    }));

    const PackSection = styled(Box)(({ theme }) => ({
        flex: 1,
        zIndex: 1, // Ensure the content is above the overlay
        padding: theme.spacing(6),
        paddingBottom: theme.spacing(12), 
        marginBottom: theme.spacing(12),// Adjusted bottom padding for InfoBox
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent background for contrast
        border: '7px solid #fff', // White border for contrast
        borderRadius: theme.shape.borderRadius,
        color: '#fff',
        display: 'flex',
        flexDirection: 'column', // Flow the items vertically
        position: 'relative', // Set relative positioning to anchor the InfoBox
        width: '50%', // Increase the width to make the section bigger
        [theme.breakpoints.down('md')]: {
            paddingTop: theme.spacing(4),
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            paddingBottom: theme.spacing(6), // Adjusted bottom padding for smaller screens
            textAlign: 'center', // Center align text on small screens
            width: '100%', // Full width on small screens
        },
    }));

    const InfoBox = styled(Box)(({ theme }) => ({
        position: 'absolute',
        bottom: theme.spacing(0), // Ensure it's at the bottom
        left: 0,
        right: 0,
        padding: theme.spacing(1), // Reduced padding for smaller height
        backgroundColor: '#fff', // White background
        color: '#000', // Black text for contrast
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '2px solid #000', // Border to distinguish
        borderRadius: 0, // Remove border radius
        height: '100px', // Ensure height adjusts to content
        [theme.breakpoints.down('md')]: {
            flexDirection: 'row', // Ensure horizontal alignment on small screens
            justifyContent: 'center', // Center align items horizontally
            height: '60px', // Adjust height to fit content
            padding: theme.spacing(1, 2),
        },
    }));

    const InfoBoxContent = styled(Box)(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(2),
        paddingTop: theme.spacing(1), // Add padding to separate content from other elements
        [theme.breakpoints.down('md')]: {
            gap: theme.spacing(1), // Reduce gap on smaller screens
            paddingTop: theme.spacing(0.5), // Adjust padding on smaller screens
        },
    }));

    return (
        <CustomBox component='header'>
            {/* Box text */}
            <BoxText component='section'>
                <Typography
                    variant='h2'
                    component='h1'
                    sx={{
                        fontWeight: 700,
                        color: '#fff',
                        [theme.breakpoints.down('md')]: {
                            fontSize: '2rem', // Adjust font size for small screens
                        },
                    }}
                >
                    I2F CONSEIL
                </Typography>

                <Typography
                    variant='body1'
                    component='p'
                    sx={{
                        py: 3,
                        lineHeight: 1.6,
                        color: '#fff',
                        [theme.breakpoints.down('md')]: {
                            fontSize: '0.875rem', // Adjust font size for small screens
                        },
                    }}
                >
                    I2F CONSEIL est un cabinet d’ingénierie financière, comptable, fiscale, d’expertise Comptable et de Commissariat aux Comptes qui fournit des prestations pluridisciplinaires de conseil en gestion, d’organisation de structures, d’audit institutionnel et financier, de mise en place de système informatisé de gestion, dans divers secteurs d’activités économiques.
                </Typography>

                <Box>
                    <Button
                        variant='contained'
                        sx={{
                            mr: 2,
                            px: 4,
                            py: 1,
                            fontSize: '0.9rem',
                            textTransform: 'capitalize',
                            borderRadius: 0,
                            borderColor: '#14192d',
                            color: '#fff',
                            backgroundColor: '#14192d',
                            '&:hover': {
                                backgroundColor: "#343a55"
                            },
                            [theme.breakpoints.down('md')]: {
                                px: 2, // Adjust padding for smaller screens
                                py: 0.5,
                                fontSize: '0.8rem', // Adjust font size for smaller screens
                            }
                        }}
                    >
                        Buy now
                    </Button>
                    <Button
                        component={Link}
                        to={'/about'}
                        variant='outlined'
                        sx={{
                            px: 4,
                            py: 1,
                            fontSize: '0.9rem',
                            textTransform: 'capitalize',
                            borderRadius: 0,
                            color: '#fff',
                            borderColor: '#fff',
                            '&:hover': {
                                color: '#343a55',
                                borderColor: '#343a55',
                            },
                            [theme.breakpoints.down('md')]: {
                                px: 2, // Adjust padding for smaller screens
                                py: 0.5,
                                fontSize: '0.8rem', // Adjust font size for smaller screens
                            }
                        }}
                    >
                        Explore
                    </Button>
                </Box>
            </BoxText>

            {/* Pack Section */}
            <PackSection>
                <Typography
                    variant='h4'
                    component='h2'
                    sx={{ fontWeight: 700, color: '#fff', marginBottom: 2, [theme.breakpoints.down('md')]: { fontSize: '1.5rem' } }}
                >
                    Pack de création d'entreprise
                </Typography>
                <Typography
                    variant='h6'
                    component='h6'
                    sx={{ fontWeight: 300, color: '#fff', marginBottom: 2, [theme.breakpoints.down('md')]: { fontSize: '0.9rem' } }}
                >
                    Un pack promotionnel, offre gracieusement des prestations complémentaires
                </Typography>
                <Typography variant='body1' component='div'>
                    {[
                       
                        "Honoraires",
                        "Frais de constitution",
                        "18 mois de domiciliation",
                        "3 mois de comptabilité offerts",
                        "Conception du logo de votre société",
                        "Conception de papier entête de votre société",
                        "Bon de réduction -700 dh pour la création de votre site web chez notre partenaire",
                        "Bon de réduction -700 dh pour la création de votre application de gestion chez notre partenaire",
                        "Pour 240 dh TTC de plus le nom de domaine de votre société et messagene limitée"
                    ].map((item, index) => (
                        <Box
                            key={index}
                            sx={{ display: 'flex', alignItems: 'center', mb: 1 }}
                        >
                            <img
                                src={checkImg}
                                alt="check"
                                style={{ marginRight: '10px', width: '20px' }} // Adjust check image size
                            />
                            {item}
                        </Box>
                    ))}
                </Typography>
                <InfoBox>
                    <InfoBoxContent>
                        <img
                            src={logoImg}
                            alt="logo"
                            style={{ width: '15%', height: 'auto' }} // Adjust logo size for smaller screens
                        />
                        <Typography
                            variant='h5'
                            component='div'
                            sx={{ color: '#000', fontWeight: 700, [theme.breakpoints.down('md')]: { fontSize: '1rem' } }} // Adjust text size
                        >
                            A seulement 5000 DH
                        </Typography>
                    </InfoBoxContent>
                </InfoBox>
            </PackSection>
        </CustomBox>
    );
}

export default Header;
