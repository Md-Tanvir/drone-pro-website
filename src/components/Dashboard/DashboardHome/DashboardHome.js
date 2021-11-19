import React from 'react';
import useAuth from '../../../hooks/useAuth';

const DashboardHome = () => {
    const {user}=useAuth()
    return (
        <div>
        {/* welcome msg */}
            <h2 className='text-center'>Welcome to Dashboard <span class='text-success'> {user.displayName}</span></h2>
        </div>
    );
};

export default DashboardHome;