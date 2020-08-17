import React from 'react';
import PropTypes from 'prop-types';

import palette from '../palette';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faSnapchatSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';


export default function Footer({footer: {footerColor='primary', textColor="black"}, footerOnMouseover}) {

    const footerBody = {
        fontFamily: "'Nunito', 'sans-serif'",
        backgroundColor: palette('primary'),
        color: palette('black'),
        display: 'flex',
        justifyContent: 'space-around',
        padding: '2% 5%'
    };

    const logo = {
        width: '70px',
        height: 'auto'
    };

    const links = {
        display: 'flex',
        flexDirection: 'column',
    };

    const nav = {
        textDecoration: 'none',
        color: 'black'
    };

    const logoSection = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    };

    const socialLinks = {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
    };

    const social = {
        textDecoration: 'none',
        color: palette('black'),
        fontSize: '120%'
    };

    return (
        <div style={footerBody} onMouseOver={footerOnMouseover}>
            <div style={links}>
                <a style={nav} href="google.com">sign up</a>
                <a style={nav} href="google.com">contact</a>
                <a style={nav} href="google.com">about</a>
            </div>

            <div style={logoSection}>
                <img style={logo} src="./images/logo.png" alt="Main logo"/>
                <p>copyright flicks&copy; 2020</p>
            </div>

            <div style={socialLinks}>
                <a style={social} href="instagram.com"><FontAwesomeIcon icon={faFacebookSquare} size="lg"/></a>
                <a style={social} href="snapchat.com"><FontAwesomeIcon icon={faSnapchatSquare} size="lg"/></a>
                <a style={social} href="twitter.com"><FontAwesomeIcon icon={faTwitterSquare} size="lg"/></a>
            </div>

        </div>

    );

};


Footer.propTypes = {
    footer: {
        footerColor: PropTypes.string.isRequired,
        textColor: PropTypes.string
    },
    footerOnMouseover: PropTypes.func
};
