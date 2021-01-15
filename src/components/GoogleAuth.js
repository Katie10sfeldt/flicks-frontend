import React, { useContext } from 'react';
import SignUpButton from './SignUpButton';
import palette from '../palette';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import AuthContext from '../context/AuthContext';

const GoogleAuth = () => {
	const authContext = useContext(AuthContext);

	if (authContext.isSignedIn === null) {
		return (
			<SignUpButton
				button={{
					buttonText: 'Loading',
					buttonColor: palette('google'),
				}}
				onRedirect={authContext.onSignInClick}
			/>
		);
	} else if (authContext.isSignedIn) {
		return (
			<SignUpButton
				button={{
					buttonText: 'Sign out',
					buttonColor: palette('google'),
					buttonIcon: <FontAwesomeIcon icon={faGoogle} size='lg' />,
				}}
				onRedirect={authContext.onSignOutClick}
			/>
		);
	} else {
		return (
			<SignUpButton
				button={{
					buttonText: 'Google',
					buttonColor: palette('google'),
					buttonIcon: <FontAwesomeIcon icon={faGoogle} size='lg' />,
				}}
				onRedirect={authContext.onSignInClick}
			/>
		);
	}
};

export default GoogleAuth;
