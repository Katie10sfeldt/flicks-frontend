import { createContext } from 'react';

const AuthContext = createContext({
  isSignedIn: null,
  onAuthChange: () => {},
  onSignInClick: () => {},
  onSignOutClick: () => {},
});

export default AuthContext;
