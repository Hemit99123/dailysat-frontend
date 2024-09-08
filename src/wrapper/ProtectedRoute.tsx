import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider.tsx'; // Import the useAuth hook

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { auth } = useAuth();

    if (auth === null) {
        return <div>Loading...</div>;
    }

    if (!auth) {
        return <Navigate to="/login" replace />;
    }
    return <>{children}</>;
};

export default ProtectedRoute;