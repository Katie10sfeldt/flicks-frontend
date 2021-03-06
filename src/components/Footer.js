import React from 'react';

import palette from '../palette';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faSnapchatSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';


function Footer() {

    const year = new Date().getFullYear()

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
        <div style={footerBody}>
            <div style={links}>
                <a style={nav} href="google.com">sign up</a>
                <a style={nav} href="google.com">contact</a>
                <a style={nav} href="google.com">about</a>
            </div>

            <div style={logoSection}>
                <img style={logo} src="./images/logo.png" alt="Main logo"/>
                <p>copyright flicks&copy; {year}</p>
            </div>

            <div style={socialLinks}>
                <a style={social} href="facebook.com"><FontAwesomeIcon icon={faFacebookSquare} size="lg"/></a>
                <a style={social} href="snapchat.com"><FontAwesomeIcon icon={faSnapchatSquare} size="lg"/></a>
                <a style={social} href="twitter.com"><FontAwesomeIcon icon={faTwitterSquare} size="lg"/></a>
            </div>

        </div>

    );

};

export default Footer;