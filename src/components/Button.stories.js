
import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from './Button';
import palette from '../palette';

export default {
  component: Button,
  title: 'Button',
  excludeStories: /.*Data$/,
};

export const actionsData = {
  buttonOnClick: action('buttonOnClick')
};

export const buttonData = {
  buttonLabel:'button text'
};

export const Default = () => <Button button={{...buttonData}}{...actionsData}/> 

export const ClearButton = () => <Button button={{...buttonData,  buttonColor:palette('primary')}}{...actionsData}/>
