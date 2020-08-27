import React from 'react';
import ModalButton from './ModalButton';

export default {
    component: ModalButton,
    title: 'ModalButton',
    excludeStories: /.*Data$/
};


export const Default = () => <ModalButton><h1>Hello</h1></ModalButton>