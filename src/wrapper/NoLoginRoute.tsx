import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider.tsx'; // Import the useAuth hook
import Spinner from '../features/common/Spinner';

// For login route as it does the opposite function of the ProtectedRoute ReactJS wrapper!

const NoLoginRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { auth } = useAuth();

    if (auth === null) {
        return <Spinner />;
    }

    if (auth) {
        return <Navigate to="/" replace />;
    }
    return <>{children}</>;
};

export default NoLoginRoute;