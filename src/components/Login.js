import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Notification from './Notification';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [notification, setNotification] = useState({ open: false, message: '', severity: 'info' });

    const handleSubmits = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth/login', { email, password });
            localStorage.setItem('token', res.data.token);
            navigate(res.data.user.role === 'admin' ? '/admin-dashboard' : '/dashboard');
        } catch (err) {
            setNotification({ open: true, message: 'Invalid credentials', severity: 'error' });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth/login', { email, password });
            localStorage.setItem('token', res.data.token);
            navigate(res.data.user.role === 'admin' ? '/admin-dashboard' : '/dashboard');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
        <Notification
      open={notification.open}
      message={notification.message}
      severity={notification.severity}
      onClose={() => setNotification({ ...notification, open: false })}
    />
        <form onSubmit={handleSubmit}>
            <Typography variant="h4">Login</Typography>
            <TextField
                label="Email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <TextField
                label="Password"
                fullWidth
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <Button type="submit" variant="contained" color="primary">
                Login
            </Button>
            </form>
        </>
    );
};

export default Login;