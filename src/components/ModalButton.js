import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import palette from '../palette';
import Button from './Button';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import SignUpButton from './SignUpButton';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '"Nunito", sans-serif',
       
    },
    paper: {
        backgroundColor: palette('white'),
        border: 'none',
        borderRadius: '10px',
        outline: '0',
        boxShadow: `5px 5px 30px  ${palette('black')}`,
        padding: '2%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        color: palette('orange')
    }
}))

function ModalButton() {
    const [open, setOpen] = useState(false);
    const style = useStyles();

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div className={style.paper} >
            <h1>sign in with:</h1>
            <SignUpButton 
                button={{
                    buttonText:'Google', 
                    buttonColor: palette('google'),
                    buttonIcon: <FontAwesomeIcon icon={faGoogle} size="lg" />
                }}
            />
            <SignUpButton 
                button={{
                    buttonText:'Twitter', 
                    buttonColor: palette('twitter'),
                    buttonIcon: <FontAwesomeIcon icon={faTwitter} size="lg" />
                }}
            />
            <SignUpButton 
                button={{
                    buttonText:'Facebook', 
                    buttonColor: palette('facebook'),
                    buttonIcon: <FontAwesomeIcon icon={faFacebookF} size="lg" />
                }}
            />
        </div>
    );

    return (
        <div>
        <Button button={{buttonLabel: 'sign up now!'}} buttonOnClick={handleOpen}/>
        <Modal className={style.modal} open={open} onClose={handleClose}>
            <Fade in={open}>{body}</Fade>
        </Modal>
        </div>
    );
}

export default ModalButton;