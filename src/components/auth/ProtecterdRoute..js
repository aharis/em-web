import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth.js';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
    const { auth } = useAuth();
    const navigate = useNavigate();
  
    useEffect(() => {
      if (!auth.token) {
        navigate('/login');
      }
    }, [auth.token, navigate]);
  
    return children;
  };

  export default ProtectedRoute;