import React from "react";
import CandidateList from "./candidate_list";
import Modal from '../modal_dialog/modal';
import CandidateAdd from './candidate_add';
import {useState} from 'react';

const CandidatesContent = () => {
    const [modalCandidateAddActive, setModalCandidateAddActive] = useState(false);
    return (
        <div>
            <button class="gradient-button" onClick={() => setModalCandidateAddActive(true)}>Add Candidate</button>
            <Modal active={modalCandidateAddActive} setActive={setModalCandidateAddActive}>
                <CandidateAdd></CandidateAdd>
            </Modal> 
            <h1>Candidates</h1>
            <CandidateList></CandidateList>
        </div>
    );
}

export default CandidatesContent;
