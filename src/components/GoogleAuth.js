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
					scope: 'email',
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					this.onAuthChange();
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	onAuthChange = () => {
		this.setState({ isSignedIn: this.auth.isSignedIn.get() });
	};

	onSignIn = () => {
		this.auth.signIn();
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

// access_token: "ya29.A0AfH6SMAEnXQc4NFola0AZIgrLc1oS5IGkadnzRyI1IgJydrLGlrBhPbIBXjZaUFSnuTJylA30rAvKb7QRTLoHr_UX9JmTEJnCrC7bs6RRp8o8-mjYInHp--P0FOXYkRhTbMpIgZjKfw2K7GvtAKh9IY1BNxtmDSDdfhgsIF1MtaZ"
// expires_in: 3599
// id_token: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImYwOTJiNjEyZTliNjQ0N2RlYjEwNjg1YmI4ZmZhOGFlNjJmNmFhOTEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNDY4MzczOTkxODAwLThtN2tqczRvcjdpY200dWJvYmtjOWkyYm9tbW1lcmR0LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNDY4MzczOTkxODAwLThtN2tqczRvcjdpY200dWJvYmtjOWkyYm9tbW1lcmR0LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA0NzE0NjAwMTg5NzM1NDY2MTg1IiwiZW1haWwiOiJrbXRlbnNmZWxkdEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6ImpDN1A5X3NOclZSc1RDUnk0ang2SkEiLCJuYW1lIjoiS2F0aGxlZW4gVGVuc2ZlbGR0IiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS8tRlpfQmc4RTVFX3MvQUFBQUFBQUFBQUkvQUFBQUFBQUFBQUEvQU1adXVja2Y2dEdIeS0ydkdWRUhZTWgtVWFyWmk2Q21JQS9zOTYtYy9waG90by5qcGciLCJnaXZlbl9uYW1lIjoiS2F0aGxlZW4iLCJmYW1pbHlfbmFtZSI6IlRlbnNmZWxkdCIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNjA0Njg3MTM3LCJleHAiOjE2MDQ2OTA3MzcsImp0aSI6IjU4YTk3MWYwMDVkZmExM2Y5ODZjOGI2MTYwZjYyZTMwMDI2NWZiMjEifQ.rWExRQx2kvFSZK357j9Ibv_a6Zq4gaom5hNFjhOXbFR3twW4tJrGrRbE6LpPnuXFZTlFkCu2HyilpgPnQXYQZWGUNKI7hcNhT1gsgnr2LtFJNr2x_8Yi3-H1X3IRaujt1dt-cFQY7frTTlSxXBcbz90yMYROJUWzgTojuwh9pui2Dao8XoY1wfwocyMenxp4ItyBWwpWDIwwAy_lAP9SfU4BynrearF_E88TTsdV9M9ByL0ui89h8aR7zJPQIcpIxXrzzzuuKQibHBN2pOdUqzbCVjPKICYpPVV2YXs72k6JJHr86ajiotFYB-LWxSgXhhpE4U85IWHu1T5RuQqgaw"
// login_hint: "AJDLj6JUa8yxXrhHdWRHIV0S13cAPBdmzZOI-_0zN78rYM8TtXpgW4Tm4d8lauA287giwhcf6659bJ75gTa6oGHsH-vjNLBMiw"
// scope: "email profile https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email openid"
