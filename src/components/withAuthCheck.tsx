import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { LOGIN, REQUEST_FOR_LOGIN } from '../constants/constants';

interface AuthCheckHOCProps {
  handleAuthCheck?: (callback: () => void) => void;
}

const withAuthCheck = <P extends AuthCheckHOCProps>(WrappedComponent: React.ComponentType<P>) => {
  return (props: any) => {
    const { isAuthenticated } = useAuth();
    const [redirect, setRedirect] = useState(false);
    const handleAuthCheck = (callback: () => void) => {
      if (isAuthenticated) {
        callback();
      } else {
        setRedirect(true);
        alert(REQUEST_FOR_LOGIN);
      }
    };
    if (redirect) {
      return <Navigate to={LOGIN} replace />;
    }
    return <WrappedComponent {...props} handleAuthCheck={handleAuthCheck} />;
  };
};

export default withAuthCheck;
