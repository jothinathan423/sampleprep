import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BusinessDashboard = () => {
    const [jobs, setJobs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/api/jobs/my-jobs', {
            headers: { 'x-auth-token': localStorage.getItem('token') },
        })
            .then(res => setJobs(res.data))
            .catch(err => console.error(err));
    }, []);

    const handleViewProposals = (jobId) => {
        navigate(`/proposals/${jobId}`);
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom>My Job Postings</Typography>
            {jobs.map(job => (
                <Card key={job._id} style={{ marginBottom: '16px' }}>
                    <CardContent>
                        <Typography variant="h5">{job.title}</Typography>
                        <Typography>{job.description}</Typography>
                        <Typography>Budget: ${job.budget}</Typography>
                        <Button variant="contained" color="primary" onClick={() => handleViewProposals(job._id)}>
                            View Proposals
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default BusinessDashboard;