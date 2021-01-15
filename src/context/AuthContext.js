import { createContext } from 'react';

const AuthContext = createContext({
	isLoggedIn: null,
	onAuthChange: () => {},
	onSignInClick: () => {},
	onSignOutClick: () => {},
});

export default AuthContext;
