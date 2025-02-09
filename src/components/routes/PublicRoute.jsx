import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const PublicRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsAuthenticated(!!token);
    }, []);

    if (isAuthenticated) {
        // Redirect authenticated users to the dashboard or home
        navigate("/dashhome");
        return null;
    }

    return children; // Allow access to the public route if not authenticated
};

export default PublicRoute;
