import React from 'react';
import SignUpButton from './SignUpButton';
import palette from '../palette';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';

export default {
    component: SignUpButton,
    title: 'SignUpButton',
    excludeStories: /.*Data$/,
};

const Template = (args) => <SignUpButton button={{...args}} {...{onRedirect: () => alert('clicked')}}/>;

export const Default = Template.bind({});
Default.args = {
    buttonIcon : <FontAwesomeIcon icon={faGoogle} size="lg"/>,
    buttonText : 'Google'
};

export const FacebookButton = Template.bind({});
FacebookButton.args = {
    buttonIcon: <FontAwesomeIcon icon={faFacebookF} size="lg" />,
    buttonText: 'Facebook',
    buttonColor: palette('facebook') 
}

export const TwitterButton = Template.bind({});
TwitterButton.args = {
    buttonIcon : <FontAwesomeIcon icon={faTwitter} size="lg"/>,
    buttonText : 'Twitter',
    buttonColor: palette('twitter')
}

