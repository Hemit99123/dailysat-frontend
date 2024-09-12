import React, { createContext, useContext, useEffect, useState } from 'react';
import httpService from '../utils/httpService';

// Define the context type
interface AuthContextType {
    auth: boolean | null;
    checkSession: () => void;
}

// Create a Context with a default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [auth, setAuth] = useState<boolean | null>(null);

    const checkSession = async () => {
        try {
            const response = await httpService.get("/auth/check-session");
            setAuth(response.data.success);
        } catch (error) {
            setAuth(false);
        }
    };

    useEffect(() => {
        checkSession();
    }, []);

    return (
        <AuthContext.Provider value={{ auth, checkSession }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
