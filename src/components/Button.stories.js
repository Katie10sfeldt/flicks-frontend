import React from 'react';
import Button from './Button';
import palette from '../palette';

export default {
  component: Button,
  title: 'Button',
  excludeStories: /.*Data$/,
};
const Template = (args) => <Button button={{...args}} {...{buttonOnClick: () => alert('clicked')}}/>;

export const Default = Template.bind({});
Default.args = {buttonLabel: 'button label'};

export const ClearButton = Template.bind({});
ClearButton.args = {buttonLabel: 'button label',  buttonColor: palette('primary'), textColor: 'black'};
