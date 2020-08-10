import React from 'react';
import PropTypes from 'prop-types';
import palette from '../palette';

export default function Button({button: {buttonLabel, buttonColor='secondary', textColor='white', border=false}, buttonOnClick}) {
  const style = {
      color: palette(textColor),
      backgroundColor: palette(buttonColor),
      border: border ? `2px solid ${palette(textColor)}`: 'none',
      borderRadius: '50px',
      padding: '10px 40px',
      margin: '10px 20px',
      boxShadow: `2px 2px 10px ${palette('black')}`


  };
    return (
    <button class="btn" style={style} onClick={buttonOnClick}>{buttonLabel}</button>
  );
}

Button.propTypes = {
    button: {
        buttonLabel: PropTypes.string.isRequired,
        buttonColor: PropTypes.string,
        textColor: PropTypes.string,
        border: PropTypes.bool
    },
    buttonOnClick: PropTypes.func.isRequired
};


// #FFD31D, #D63447, #F57B51, #F6EEDF 