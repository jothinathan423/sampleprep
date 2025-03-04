import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Card, CardContent } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

const ApplyJob = () => {
    const { jobId } = useParams();
    const navigate = useNavigate();
    const [coverLetter, setCoverLetter] = useState('');
    const [bidAmount, setBidAmount] = useState('');
    const [timeline, setTimeline] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/proposals', {
                jobId,
                coverLetter,
                bidAmount,
                timeline,
            });
            navigate('/dashboard');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Card>
            <CardContent>
                <Typography variant="h5">Apply for Job</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Cover Letter"
                        fullWidth
                        multiline
                        rows={4}
                        value={coverLetter}
                        onChange={(e) => setCoverLetter(e.target.value)}
                        required
                    />
                    <TextField
                        label="Bid Amount"
                        fullWidth
                        type="number"
                        value={bidAmount}
                        onChange={(e) => setBidAmount(e.target.value)}
                        required
                    />
                    <TextField
                        label="Estimated Timeline"
                        fullWidth
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        required
                    />
                    <Button type="submit" variant="contained" color="primary" style={{ marginTop: '16px' }}>
                        Submit Proposal
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default ApplyJob;