import React from "react";
import InterviewsList from "./interviews-list";
import Modal from '../modal_dialog/modal';
import InterviewAdd from './interview_add';
import {useState} from 'react';
import {Link} from 'react-router-dom';

const InterviewsContent = () => {
    const token = localStorage.getItem("token");
    const isAuth = token != null;
    const [modalInterviewAddActive, setModalInterviewAddActive] = useState(false);
    return (
        (isAuth &&<div>
            <Link to="/screenCapture" className="btn btn-primary colored-button">To screen capturement</Link>
            <div className={"addButton"}>
                <button className="gradient-button" onClick={() => setModalInterviewAddActive(true)}>Add Interview</button>
            </div>
            <Modal active={modalInterviewAddActive} setActive={setModalInterviewAddActive}>
                <InterviewAdd></InterviewAdd>
            </Modal>
            <h1>Interviews</h1>
            <InterviewsList></InterviewsList>
        </div>)
    );
}

export default InterviewsContent;
