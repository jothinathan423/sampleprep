import React from 'react';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Typography variant="h2">Welcome to Mindlancer</Typography>
            <Typography variant="h5">Find the best freelancers for your projects</Typography>
            <Button variant="contained" color="primary" component={Link} to="/register" style={{ margin: '20px' }}>
                Get Started
            </Button>
        </div>
    );
};

export default Home;