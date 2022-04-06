import {Navigate} from 'react-router-dom';
import { useUser } from '../contexts/UserProvider';
  
  const ProtectedRoute = ({ children }) => {
    const user = useUser();
  
    if (!user.isAdmin)
        return <Navigate to="/" replace />
  
    return children;
  };
  export default ProtectedRoute;