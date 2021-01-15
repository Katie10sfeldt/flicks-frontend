import React from 'react';

import palette from '../palette';

const headerBarStyle = {
	backgroundColor: palette('primary'),
	display: 'flex',
	position: 'fixed',
	width: '100vw',
};

const Header = () => {
	return (
		<div style={headerBarStyle}>
			<h1 className='header-bar-title'>flicks</h1>
		</div>
	);
};

export default Header;
