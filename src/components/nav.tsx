import { AppBar, ButtonBase, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import { useEffect, useState } from 'react';
import FoundationIcon from '@mui/icons-material/Foundation';
import { Link } from 'gatsby';
import { ROUTES } from '../constants/routes';
import styled from '@emotion/styled';

interface NavBarProps {

}

const NavBar = (props: NavBarProps) => {
    const [currentPath, setCurrentPath] = useState('');

    useEffect(() => {
       setCurrentPath(window.location.pathname);
    }, [])

    return (
        <AppBar
            position='sticky'
            sx={{
                backgroundColor: 'white',
                boxShadow: 'none',
                border: '1px solid red'
            }}
        >
        <Toolbar>
                <Grid container
                    spacing={2}
                    sx={{
                        alignItems: 'center'
                    }}
                >
                    <Grid item>
                        <Link to="/">
                            <IconButton>
                                <FoundationIcon />
                            </IconButton>
                        </Link>
                    </Grid>
                    <Grid item xs>
                        <Grid container >
                            {ROUTES.filter(route => route.to !== '/').map((route) => (
                                <Grid item px={2}>
                                    <Link 
                                        to={route.to}
                                        style={{
                                            textDecoration: 'none',
                                            color: 'black'
                                        }}
                                    >
                                        <HoverText>
                                            {route.label}
                                        </HoverText>
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar> 
        </AppBar>
    )
}

export default NavBar;

const HoverText = styled(ButtonBase)({
    padding: 8,
    borderRadius: 20,
    '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        boxShadow: 'inset 0 3px 5px 1px rgba(0, 0, 0, 0.1)',
    }
})

