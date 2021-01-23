import React from 'react';
import palette from '../palette';

export default function SignUpButton({
	button: { buttonIcon, buttonText, buttonColor = 'google' },
	onRedirect,
}) {
	const style = {
		backgroundColor: palette(buttonColor),
		color: palette('white'),
		width: '250px',
		height: '45px',
		border: 'none',
		boxShadow: `2px 2px 10px ${palette('black')}`,
		outline: 'none',
		borderRadius: '50px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: '110%',
		marginTop: '10%',
	};
	const icon = {
		marginRight: '10px',
	};
	return (
		<button style={style} onClick={onRedirect}>
			<div style={icon}>{buttonIcon}</div>
			{buttonText}
		</button>
	);
}
