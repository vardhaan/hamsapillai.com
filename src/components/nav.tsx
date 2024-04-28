import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import { useEffect, useState } from 'react';
import FoundationIcon from '@mui/icons-material/Foundation';
import { Link } from 'gatsby';
import { ROUTES } from '../constants/routes';

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
            }}
        >
           <Toolbar>
                <Grid container>
                    <Grid item>
                        <Link to="/">
                            <IconButton>
                                <FoundationIcon />
                            </IconButton>
                        </Link>
                    </Grid>
                    <Grid item xs>
                        <Grid container justifyContent="flex-end">
                            {ROUTES.filter(route => route.to !== '/').map((route) => (
                                <Grid item px={2}>
                                    <Link to={route.to}>
                                        <Typography>
                                            {route.label}
                                        </Typography>
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

