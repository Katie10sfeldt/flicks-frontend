import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

export default function ProtectedRoute({ component: Component, ...rest }) {
	const authContext = useContext(AuthContext);
	console.log(authContext.isLoggedIn);
	return (
		<Route
			{...rest}
			render={() =>
				authContext.isLoggedIn ? <Component /> : <Redirect to='/' />
			}
		/>
	);
}
