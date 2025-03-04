import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Button } from '@mui/material';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('/api/admin/users', {
            headers: { 'x-auth-token': localStorage.getItem('token') },
        })
            .then(res => setUsers(res.data))
            .catch(err => console.error(err));
    }, []);

    const handleApprove = (userId) => {
        axios.put(`/api/admin/approve-user/${userId}`)
            .then(() => {
                setUsers(users.map(user => user._id === userId ? { ...user, isVerified: true } : user));
            })
            .catch(err => console.error(err));
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom>User Management</Typography>
            {users.map(user => (
                <Card key={user._id} style={{ marginBottom: '16px' }}>
                    <CardContent>
                        <Typography variant="h5">{user.name}</Typography>
                        <Typography>{user.email}</Typography>
                        <Typography>Role: {user.role}</Typography>
                        <Typography>Status: {user.isVerified ? 'Verified' : 'Pending'}</Typography>
                        {!user.isVerified && (
                            <Button variant="contained" color="primary" onClick={() => handleApprove(user._id)}>
                                Approve
                            </Button>
                        )}
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default AdminDashboard;