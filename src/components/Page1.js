import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

export default function Page1() {
    return(
        <div>
            <h1>Page 1</h1>
            <Link to='/'>
            <Button button={{
                buttonLabel: 'home'
                }} 
                buttonOnClick = { () => {}} 
            />
            </Link>
        </div>
    );
}