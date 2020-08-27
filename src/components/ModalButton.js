import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Button from './Button';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import palette from '../palette';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '"Nunito", sans-serif',
        backgroundImage: `linear-gradient(to bottom right, ${palette('primaryfade')}, ${palette('orangefade')}, ${palette('secondaryfade')})`
    },

}))

function ModalButton(props) {
    const [open, setOpen] = useState(false);
    const style = useStyles();

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    
    return (
        <div>
        <Button button={{buttonLabel: 'sign up now!'}} buttonOnClick={handleOpen}/>
        <Modal className={style.modal} open={open} onClose={handleClose}>
            <Fade in={open}>{props.children}</Fade>
        </Modal>
        </div>
    );
}

export default ModalButton;