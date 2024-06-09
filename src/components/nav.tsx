import { AppBar, Box, ButtonBase, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import { useEffect, useState } from 'react';
import FoundationIcon from '@mui/icons-material/Foundation';
import { Link } from 'gatsby';
import { ROUTES } from '../constants/routes';
import styled from '@emotion/styled';
import { DEPRESSED_BUTTON_STYLE } from '../constants/styles';
import { css } from '@emotion/react';


interface NavBarProps {

}

const NavBar = (props: NavBarProps) => {
    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
       setCurrentPath(window.location.pathname);
       console.log(window.location.pathname);
    }, [])

    useEffect(() => {
        console.log(currentPath, " is current path");
    }, [currentPath])

    return (
        <Box
            mb={2}
        >
            <Grid container
                spacing={2}
                sx={{
                    alignItems: 'center'
                }}
            >
                <Grid item>
                    <Link to="/">
                        <IconButton
                            sx={{
                                "&:hover": DEPRESSED_BUTTON_STYLE
                            }}
                        >
                            <FoundationIcon />
                        </IconButton>
                    </Link>
                </Grid>
                <Grid item xs>
                    <Grid container>
                        {ROUTES.filter(route => route.to !== '/').map((route) => (
                            <Grid item px={2}>
                                <Link 
                                    to={route.to}
                                    style={{
                                        textDecoration: 'none',
                                        color: 'black'
                                    }}
                                >
                                    <HoverButton selected={currentPath === route.to}>
                                        {route.label}
                                    </HoverButton>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default NavBar;

interface HoverButtonProps {
    selected: boolean,
}


const HoverButton = styled(ButtonBase)<HoverButtonProps>(({selected}) => ({
    padding: 8,
    borderRadius: 20,
    '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        boxShadow: 'inset 0 3px 5px 1px rgba(0, 0, 0, 0.1)',
    },
    ...(selected && {
        borderColor: '#959695',
        borderWidth: 1,
        borderStyle: 'dashed',
    })
}))

