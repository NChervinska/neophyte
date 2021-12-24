import React from "react";
import CandidateList from "./candidate_list";
import Modal from '../modal_dialog/modal';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import CandidateAdd from './candidate_add';
import emailjs from "emailjs-com";
import{ init } from 'emailjs-com';
import {useState} from 'react';

const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_cx8hln1', e.target, 'user_U97Ye98t2XRkKSkBEKBoK')
        .then((result) => {
            alert("Link was sent via Email successfully");
        }, (error) => {
            alert("An error occured while sending an Email ");
        });
    e.target.reset()
}
const CandidatesContent = () => {
    const token = localStorage.getItem("token"); 
    const isAuth = token != null; 
    const [modalCandidateAddActive, setModalCandidateAddActive] = useState(false);

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    init("user_U97Ye98t2XRkKSkBEKBoK");
    return (
        (isAuth &&<div>
            <div>
                <Button variant="outlined"
                        color="primary" onClick={handleClickOpen}>
                    Send link via email
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>
                        Send Email with link to:
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            <form onSubmit={sendEmail}>
                                <div className="row pt-5 mx-auto">
                                    <div className="col-8 form-group pt-2 mx-auto">
                                        <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                                    </div>
                                    <div className="col-8 form-group pt-2 mx-auto">
                                        <textarea className="form-control" id="" cols="30" rows="8" placeholder="Paste link here" name="message"></textarea>
                                    </div>
                                    <div className="col-8 pt-3 mx-auto">
                                        <input type="submit" className="btn btn-info" value="Send link"></input>
                                    </div>
                                </div>
                            </form>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>

            <div className={"addButton"}>
            <button className="gradient-button" onClick={() => setModalCandidateAddActive(true)}>Add Candidate</button>
        </div>
            <Modal active={modalCandidateAddActive} setActive={setModalCandidateAddActive}>
                <CandidateAdd></CandidateAdd>
            </Modal> 
            <h1>Candidates</h1>
            <CandidateList></CandidateList>
        </div>)
    );
}

export default CandidatesContent;
