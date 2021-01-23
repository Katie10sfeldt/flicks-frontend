import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={() =>
        Cookies.get('isSignedIn') === 'true' ? (
          <Component />
        ) : (
          <Redirect to='/' />
        )
      }
    />
  );
}
