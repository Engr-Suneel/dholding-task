import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { doLogout } from '../../stores/slices/auth.slice';

const Logout: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(doLogout());
  }, [dispatch]);

  return <Navigate to="/auth/login" replace />;
};

export default Logout;
