import React, { useContext } from 'react';
import SignUpButton from './SignUpButton';
import palette from '../palette';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import AuthContext from '../context/AuthContext';

//Button will use AuthContext to dynamically render what is shown to the user

const GoogleAuth = () => {
  const authContext = useContext(AuthContext);

  if (authContext.isSignedIn === null) {
    console.log('No sign in info');
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
    console.log('Signed in');
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
    console.log('Not signed in');
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

//Issues: The state does not seem to be correctly updating, as well as the Auth buttons don't work after the user is signed in.
