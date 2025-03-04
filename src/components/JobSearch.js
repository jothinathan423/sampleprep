import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';

const JobSearch = () => {
    const [jobs, setJobs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get('/api/jobs')
            .then(res => setJobs(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <TextField
                label="Search Jobs"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {jobs.filter(job => job.title.toLowerCase().includes(searchTerm.toLowerCase())).map(job => (
                <Card key={job._id}>
                    <CardContent>
                        <Typography variant="h5">{job.title}</Typography>
                        <Typography>{job.description}</Typography>
                        <Typography>Budget: ${job.budget}</Typography>
                        <Button variant="contained" color="primary">Apply</Button>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default JobSearch;