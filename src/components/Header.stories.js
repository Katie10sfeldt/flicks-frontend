import React from 'react';
import Header from './Header';

export default {
	component: Header,
	title: 'Header',
	excludeStories: /.*Data$/,
};

export const Default = () => <Header />;
