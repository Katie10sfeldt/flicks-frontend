import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isSignedIn, ...rest }) => {
	return (
		<Route
			{...rest}
			render={() => (isSignedIn ? <Component /> : <Redirect to='/' />)}
		/>
	);
};

export default ProtectedRoute;
