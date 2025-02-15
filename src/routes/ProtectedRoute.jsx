import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsAuthenticated(!!token);
    }, []);

    if (!isAuthenticated) {
        // Redirect unauthenticated users to the login page
        navigate("/login");
        return null;
    }

    return children; // Allow access to protected route if authenticated
};

export default ProtectedRoute;
