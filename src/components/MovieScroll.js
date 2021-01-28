import React from 'react';

import palette from '../palette';

const listHeader = {
	textAlign: 'left',
	paddingTop: '20px',
	paddingLeft: '20px',
	textTransform: 'lowercase',
};

const scrollingWrapper = {
	display: 'flex',
	flexWrap: 'nowrap',
	overflowX: 'auto',
};

const filmCard = {
	height: '300px',
	width: '200px',
	backgroundColor: palette('secondary'),
	flex: '0 0 auto',
	padding: '20px',
	margin: '20px',
};

export default function MovieScroll(props) {
	return (
		<div>
			<h3 style={listHeader}>{props.title}</h3>
			<div style={scrollingWrapper} className='scrolling-wrapper'>
				<div style={filmCard} className='film-card'>
					FilmCard
				</div>
				<div style={filmCard} className='film-card'>
					FilmCard
				</div>
				<div style={filmCard} className='film-card'>
					FilmCard
				</div>
				<div style={filmCard} className='film-card'>
					FilmCard
				</div>
				<div style={filmCard} className='film-card'>
					FilmCard
				</div>
				<div style={filmCard} className='film-card'>
					FilmCard
				</div>
				<div style={filmCard} className='film-card'>
					FilmCard
				</div>
				<div style={filmCard} className='film-card'>
					FilmCard
				</div>
				<div style={filmCard} className='film-card'>
					FilmCard
				</div>
				<div style={filmCard} className='film-card'>
					FilmCard
				</div>
				<div style={filmCard} className='film-card'>
					FilmCard
				</div>
				<div style={filmCard} className='film-card'>
					FilmCard
				</div>
				<div style={filmCard} className='film-card'>
					FilmCard
				</div>
			</div>
		</div>
	);
}
