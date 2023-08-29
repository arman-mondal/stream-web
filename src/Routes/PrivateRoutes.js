// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

export default function PrivateRoute({ children, ...rest }) {
  const { token } = useAuth();

  return (
    <Route {...rest}>
      {token ? children : <Navigate to="/user/login" />}
    </Route>
  );
}
