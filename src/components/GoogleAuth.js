import React from 'react';
import SignUpButton from './SignUpButton';
import palette from '../palette';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
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

	onAuthChange = (isSignedIn) => {
		if (isSignedIn) {
			this.props.signIn();
		} else {
			this.props.signOut();
		}
	};

	onSignInClick = () => {
		this.auth.signIn();
	};

	onSignOutClick = () => {
		this.auth.signOut();
	};

	authStatus() {
		if (this.props.isSignedIn === null) {
			return (
				<SignUpButton
					button={{
						buttonText: 'Loading',
						buttonColor: palette('google'),
					}}
				/>
			);
		} else if (this.props.isSignedIn) {
			const profile = this.auth.currentUser.get().getBasicProfile();
			console.log('ID: ' + profile.getId());
			console.log('Full Name: ' + profile.getName());
			console.log('Given Name: ' + profile.getGivenName());
			console.log('Family Name: ' + profile.getFamilyName());
			console.log('Email: ' + profile.getEmail());
			console.log('ImageURL: ' + profile.getImageUrl());

			return (
				<SignUpButton
					button={{
						buttonText: 'Sign out',
						buttonColor: palette('google'),
						buttonIcon: <FontAwesomeIcon icon={faGoogle} size='lg' />,
					}}
					onRedirect={this.onSignOutClick}
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
					onRedirect={this.onSignInClick}
				/>
			);
		}
	}

	render() {
		return <div>{this.authStatus()}</div>;
	}
}

const mapStateToProps = (state) => {
	return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
