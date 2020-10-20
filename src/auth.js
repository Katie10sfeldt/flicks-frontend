const accessTokenKey = 'accessToken';

export function getAccessToken() {
	return localStorage.getItem(accessTokenKey);
}

export async function login(email, password) {
	const response = await fetch(
		'https://needy-cute-malamute.gigalixirapp.com/login',
		{
			method: 'POST',
			headers: {},
			body: JSON.stringify(email, password),
		}
	);
	if (response.ok) {
		const { token } = await response.json();
		localStorage.setItem(accessTokenKey, token);
	}
	return response.ok;
}

export function isLoggedIn() {
	return !!localStorage.getItem(accessTokenKey);
}

export function logout() {
	localStorage.removeItem(accessTokenKey);
}
