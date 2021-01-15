import React from 'react';
import AuthContext from '../context/AuthContext';

export class GoogleAuthStore extends React.Component {
	state = { isSignedIn: null };

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

	onAuthChange = () => {
		this.setState({ isSignedIn: this.auth.isSignedIn.get() });
	};

	onSignInClick = () => {
		this.auth.signIn();
		this.setState({ isSignedIn: this.auth.isSignedIn.get() });
	};

	onSignOutClick = () => {
		this.auth.signOut();
		this.setState({ isSignedIn: this.auth.isSignedIn.get() });
	};

	render() {
		return (
			<AuthContext.Provider
				value={{
					isLoggedIn: this.state.isSignedIn,
					onAuthChange: this.onAuthChange,
					onSignInClick: this.onSignInClick,
					onSignOutClick: this.onSignOutClick,
				}}
			>
				{this.props.children}
			</AuthContext.Provider>
		);
	}
}
