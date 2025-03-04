import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Mindlancer
                </Typography>
                <Button color="inherit" component={Link} to="/dashboard">Freelancer</Button>
                <Button color="inherit" component={Link} to="/business-dashboard">Business</Button>
                <Button component={Link} to="/logout" color="inherit">
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;