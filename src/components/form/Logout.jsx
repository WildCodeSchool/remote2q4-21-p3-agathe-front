import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserProvider';

const Logout = () => {
  const user = useUser();

  useEffect(() => {
    user.set(null);
  }, []);

  return <Navigate to="/" />;
};

export default Logout;