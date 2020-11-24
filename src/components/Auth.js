import React, { useState, useEffect } from 'react';
import { setSessionCookie } from '../sessions';
import history from 'history';

import SignUpButton from './SignUpButton';

export default function Auth() {
	const [user, setUser] = useState('');
	const [loading, setLoading] = useState(false);

	useEffect(() => {});

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		// PLACE THE API LOGIN REQUEST HERE INSTEAD OF THE PROMISE BELOW
		await new Promise((r) => setTimeout(r(), 1000));
		setSessionCookie({ user });
		history.push('/');
		setLoading(false);
	};

	if (loading) {
		return <h4>Logging in...</h4>;
	}

	return (
		<div>
			<SignUpButton
				onRedirect={handleSubmit}
				onChange={(e) => setUser(e.target.value)}
			/>
		</div>
	);
}
