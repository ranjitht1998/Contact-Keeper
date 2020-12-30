import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthContext from '../../context/auth/authContext';

const PrivateRoute = ({ component: Component, ...rest }) => {  // standard way to create a private route
  const authContext = useContext(AuthContext);

  const { user, isAuthenticated, loading } = authContext;
  
  // isAuthenticated is used for line 16

  return (
    <Route 
      {...rest} render={props => 
        !user && !loading ? (
          <Redirect to='/login' />
        ) : (
          <Component {...props} />
        )
      }
      />
  );
};

export default PrivateRoute;