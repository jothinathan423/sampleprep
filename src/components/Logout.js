import React, { useEffect } from 'react';
import { useHistory, useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
    

    useEffect(() => {
        // Clear the authentication token from local storage
        localStorage.removeItem('token');

        // Redirect to the login page after logout
        navigate('/login');
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Logging out...</h2>
            <p>You are being redirected to the login page.</p>
        </div>
    );
};

export default Logout;