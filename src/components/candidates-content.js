import React from "react";
import CandidateList from "./candidate_list";
import Modal from '../modal_dialog/modal';
import CandidateAdd from './candidate_add';
import {useState} from 'react';

const CandidatesContent = () => {
    const token = localStorage.getItem("token"); 
    const isAuth = token != null; 
    const [modalCandidateAddActive, setModalCandidateAddActive] = useState(false);
    return (
        (isAuth &&<div>
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
