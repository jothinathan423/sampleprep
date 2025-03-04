import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Card, CardContent } from '@mui/material';

const Profile = () => {
    const [profile, setProfile] = useState({
        name: '',
        email: '',
        skills: '',
        experience: '',
        portfolio: '',
        hourlyRate: '',
        certifications: '',
        location: '',
        availability: '',
    });

    useEffect(() => {
        axios.get('/api/profile', {
            headers: { 'x-auth-token': localStorage.getItem('token') },
        })
            .then(res => setProfile(res.data))
            .catch(err => console.error(err));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put('/api/profile', profile, {
                headers: { 'x-auth-token': localStorage.getItem('token') },
            });
            alert('Profile updated successfully!');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Card>
            <CardContent>
                <Typography variant="h5">Profile</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Name"
                        fullWidth
                        value={profile.name}
                        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                        required
                    />
                    <TextField
                        label="Email"
                        fullWidth
                        value={profile.email}
                        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                        required
                    />
                    <TextField
                        label="Skills"
                        fullWidth
                        value={profile.skills}
                        onChange={(e) => setProfile({ ...profile, skills: e.target.value })}
                    />
                    <TextField
                        label="Experience"
                        fullWidth
                        value={profile.experience}
                        onChange={(e) => setProfile({ ...profile, experience: e.target.value })}
                    />
                    <TextField
                        label="Portfolio"
                        fullWidth
                        value={profile.portfolio}
                        onChange={(e) => setProfile({ ...profile, portfolio: e.target.value })}
                    />
                    <TextField
                        label="Hourly Rate"
                        fullWidth
                        type="number"
                        value={profile.hourlyRate}
                        onChange={(e) => setProfile({ ...profile, hourlyRate: e.target.value })}
                    />
                    <TextField
                        label="Certifications"
                        fullWidth
                        value={profile.certifications}
                        onChange={(e) => setProfile({ ...profile, certifications: e.target.value })}
                    />
                    <TextField
                        label="Location"
                        fullWidth
                        value={profile.location}
                        onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                    />
                    <TextField
                        label="Availability"
                        fullWidth
                        value={profile.availability}
                        onChange={(e) => setProfile({ ...profile, availability: e.target.value })}
                    />
                    <Button type="submit" variant="contained" color="primary">
                        Update Profile
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default Profile;