import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FreelancerDashboard = () => {
    const [jobs, setJobs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/api/jobs')
            .then(res => setJobs(res.data))
            .catch(err => console.error(err));
    }, []);

    const handleApply = (jobId) => {
        navigate(`/apply/${jobId}`);
    };

    return (
        <div>
            <Typography variant="h4" gutterBottom>Available Jobs</Typography>
            {jobs.map(job => (
                <Card key={job._id} style={{ marginBottom: '16px' }}>
                    <CardContent>
                        <Typography variant="h5">{job.title}</Typography>
                        <Typography>{job.description}</Typography>
                        <Typography>Budget: ${job.budget}</Typography>
                        <Button variant="contained" color="primary" onClick={() => handleApply(job._id)}>
                            Apply
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default FreelancerDashboard;