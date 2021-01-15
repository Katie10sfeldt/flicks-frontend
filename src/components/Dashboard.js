import React from 'react';

import Header from './Header';
import MovieScroll from './MovieScroll';

const list = {
	paddingTop: '80px',
};

const Dashboard = () => {
	return (
		<div>
			<Header />

			<div style={list} className='list'>
				<MovieScroll title='my watch list' />
				<MovieScroll title='recommendations' />
				<MovieScroll title='date night' />
			</div>
		</div>
	);
};

export default Dashboard;
