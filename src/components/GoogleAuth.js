import React from 'react';
import SignUpButton from './SignUpButton';
import palette from '../palette';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

class GoogleAuth extends React.Component {
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
					// window.gapi.auth2.get.BasicProfile();
					this.onAuthChange();
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	onAuthChange = () => {
		this.setState({ isSignedIn: this.auth.isSignedIn.get() });
	};

	onSignIn = () => {
		const info = this.auth.signIn();
		console.log(info);
	};

	onSignOut = () => {
		this.auth.signOut();
	};

	renderAuthButton() {
		if (this.state.isSignedIn === null) {
			return (
				<SignUpButton
					button={{
						buttonText: 'Loading',
						buttonColor: palette('google'),
					}}
				/>
			);
		} else if (this.state.isSignedIn) {
			const profile = this.auth.currentUser.get().getBasicProfile();
			alert('ID: ' + profile.getId());
			alert('Full Name: ' + profile.getName());
			alert('Given Name: ' + profile.getGivenName());
			alert('Family Name: ' + profile.getFamilyName());
			alert('Email: ' + profile.getEmail());
			alert('ImageURL: ' + profile.getImageUrl());

			return (
				<SignUpButton
					button={{
						buttonText: 'Sign Out',
						buttonColor: palette('google'),
						buttonIcon: <FontAwesomeIcon icon={faGoogle} size='lg' />,
					}}
					onRedirect={this.onSignOut}
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
					onRedirect={this.onSignIn}
				/>
			);
		}
	}

	render() {
		return <div>{this.renderAuthButton()}</div>;
	}
}

export default GoogleAuth;
