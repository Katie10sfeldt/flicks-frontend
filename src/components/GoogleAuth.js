import React from 'react';

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
			return <div>Loading...</div>;
		} else if (this.state.isSignedIn) {
			return <button onClick={this.onSignOut}>Sign Out</button>;
		} else {
			return (
				<button onClick={this.onSignIn}>Sign In with Google Account</button>
			);
		}
	}

	render() {
		return (
			<div>
				{this.renderAuthButton()}
				<button></button>
			</div>
		);
	}
}

export default GoogleAuth;
