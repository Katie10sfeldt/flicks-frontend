import React from 'react';
import Cookies from 'js-cookie';
import { Redirect } from 'react-router-dom';

import AuthContext from '../context/AuthContext';

export class GoogleAuthStore extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '468373991800-8m7kjs4or7icm4ubobkc9i2bommmerdt.apps.googleusercontent.com',
          scope:
            'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  // Handles an instance of authorization changing, sets state equal to whatever Google tells us it is
  onAuthChange = () => {
    console.log('auth changed');
    if (this.auth.isSignedIn.get()) {
      Cookies.set('isSignedIn', 'true');
    } else {
      Cookies.set('isSignedIn', 'false');
    }
  };

  // Handles signing a user in with Google
  onSignInClick = () => {
    this.auth.signIn();
  };

  // Handles signing a user out with Google
  onSignOutClick = () => {
    this.auth.signOut();
  };

  render() {
    if (Cookies.get('isSignedIn') === 'true') {
      return <Redirect to='/Dashboard' />;
    }
    return (
      // Sets Auth Context equal to the value
      <AuthContext.Provider
        value={{
          onAuthChange: this.onAuthChange,
          //Sign in and Sign out functions are now availabe to children components
          onSignInClick: this.onSignInClick,
          onSignOutClick: this.onSignOutClick,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

GoogleAuthStore.contextType = AuthContext;
