import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider.tsx'; // Import the useAuth hook
import Spinner from '../features/common/Spinner';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { auth } = useAuth();

    if (auth === null) {
        return <Spinner />;
    }

    if (!auth) {
        return <Navigate to="/login" replace />;
    }
    return <>{children}</>;
};

export default ProtectedRoute;
