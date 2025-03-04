import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('freelancer');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', { name, email, password, role });
            localStorage.setItem('token', res.data.token);
            navigate(res.data.user.role === 'admin' ? '/admin-dashboard' : '/dashboard');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Typography variant="h4">Register</Typography>
            <TextField
                label="Name"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
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
            <TextField
                label="Role"
                fullWidth
                select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
                margin="normal"
            >
                <MenuItem value="freelancer">Freelancer</MenuItem>
                <MenuItem value="business">Business</MenuItem>
            </TextField>
            <Button type="submit" variant="contained" color="primary">
                Register
            </Button>
        </form>
    );
};

export default Register;