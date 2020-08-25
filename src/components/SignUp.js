import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import palette from '../palette';
import Button from './Button';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paper: {
        backgroundColor: palette('white'),
        border: 'none',
        outline: '0',
        boxShadow: `5px 5px 30px  ${palette('black')}`,
        padding: '2%'
    }
}))

function SignUp() {
    const [open, setOpen] = useState(false);
    const style = useStyles();

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div className={style.paper}>
            <h1>This is the test Modal</h1>
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

export default SignUp;