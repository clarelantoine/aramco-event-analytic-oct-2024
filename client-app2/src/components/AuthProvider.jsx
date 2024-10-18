import { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

export default function AuthProvider({ children }) {

    const navigate = useNavigate()
    const location = useLocation()

    const [token, setToken] = useState(null)

    const fakeAuth = () =>
        new Promise((resolve) => {
            setTimeout(() => resolve('2342f2f1d131rf12'), 250);
        });

    const handleLogin = async () => {
        console.log('test login');
        const token = await fakeAuth()
        setToken(token)

        const origin = '/dashboard'

        // const origin = '/dashboard'
        navigate(origin)

    }

    const handleLogout = () => {
        setToken(null)
    }

    const value = {
        token,
        onLogin: handleLogin,
        onLogout: handleLogout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}