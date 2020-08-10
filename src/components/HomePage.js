import React from 'react';
import palette from '../palette';
import Button from './Button';

const headerMainTextStyle = {
    fontFamily: 'sans-serif',
    color: palette('black')
};

const headerDivStyle = {
  backgroundColor: palette('yellow'),
  padding: '10px 0'
};

const box = {
  width: '100%',
  height: '50px',
  margin: '10px 0',
  backgroundImage:`linear-gradient(to right, ${palette('white')} 50px, transparent 1px), linear-gradient(${palette('primary')} 100px, transparent 1px)`,
  backgroundSize: '100px 100px'
}

export default function HomePage() {
  
    return (
      
      <div style={headerDivStyle}>
        <div style={box}/>
        <h1 style={headerMainTextStyle}>flicks</h1>
        <h6 style={headerMainTextStyle}>what someone means when they say "add it to my list"</h6>
        <Button button={{buttonLabel: 'sign up now!'}} buttonOnClick = {() => {alert('signed up')}}/>
        <Button button={{
          buttonLabel: 'learn more', 
          buttonColor: palette('primary'), 
          textColor: palette('secondary'),
          border: true
        }} 
        buttonOnClick = {() => {alert('signed up')}}/>

        <div style={box}/>
      </div>
      
      );
}



