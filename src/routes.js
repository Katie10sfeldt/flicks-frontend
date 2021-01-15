import React from 'react';
import HomePage from './components/HomePage';
import Page1 from './components/Page1';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

import { Route, Switch, Redirect } from 'react-router-dom';

function Routes() {
	return (
		<Switch>
			<Route exact path='/Home' component={HomePage} />
			<Route exact path='/'>
				<Redirect to='/Home' />
			</Route>
			<ProtectedRoute exact path='/Dashboard' component={Dashboard} />
			<Route exact path='/page1' component={Page1} />
		</Switch>
	);
}

export default Routes;
