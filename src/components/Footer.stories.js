import React from 'react';
import { action } from '@storybook/addon-actions';
 
import Footer from './Footer';
import palette from '../palette';

export default {
    component: Footer,
    title: 'Footer',
    excludeStories: /.*Data$/,
};

export const actionsData = {
    footerOnMouseover: action('footerOnMouseover')
};

export const footerData = {
    footerColor: palette('footerColor'),
    textColor: palette('textColor')
};

export const Default = () => <Footer footer={{...footerData}} {...actionsData}/>