import React from 'react';

import palette from '../palette';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const headerBarStyle = {
	backgroundColor: palette('primary'),
	display: 'flex',
	position: 'fixed',
	width: '100vw',
	justifyContent: 'space-between',
	alignItems: 'center',
};

const siteSearch = {
	height: '90%',
	borderRadius: '50px',
	width: '300px',
	marginLeft: '15px',
	paddingLeft: '10px',
};

const title = {
	display: 'flex',
};

const navLogo = {
	height: '50px',
};

const dashNav = {
	display: 'flex',
	listStyle: 'none',
	wrap: 'nowrap',
	marginRight: '15px',
};

const dashNavItem = {
	padding: '5px',
	marginRight: '5px',
	color: palette('black'),
	cursor: 'pointer',
};

const dashNavLink = {
	color: palette('black'),
	textDecoration: 'none',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
};

const dashIcon = {
	color: palette('black'),
	marginRight: '10px',
};

const Header = () => {
	return (
		<div style={headerBarStyle}>
			<input
				style={siteSearch}
				type='search'
				id='site-search'
				name='site-search'
				placeholder='search'
			/>
			<div style={title}>
				<img style={navLogo} src='./images/logo.png' alt='logo' />
				<h1 className='header-bar-title'>flicks</h1>
			</div>

			<ul style={dashNav} className='dash-nav'>
				<li style={dashNavItem}>
					<Link style={dashNavLink} to='/Dashboard'>
						<FontAwesomeIcon style={dashIcon} icon={faHome} size='lg' />
						Dashboard
					</Link>
				</li>
				<li style={dashNavItem}>
					<Link style={dashNavLink} to='/'>
						<FontAwesomeIcon style={dashIcon} icon={faCog} size='lg' />
						Settings
					</Link>
				</li>
				{/* To change to dynamic rendering based off context of sign in state: */}
				<li style={dashNavItem}>
					<a style={dashNavLink} href>
						<FontAwesomeIcon style={dashIcon} icon={faSignOutAlt} size='lg' />
						Sign Out
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Header;
