import React from "react";
import CandidateList from "./candidate_list";
import Modal from '../modal_dialog/modal';
import CandidateAdd from './candidate_add';
import {useState} from 'react';

const CandidatesContent = () => {
    const [modalCandidateAddActive, setModalCandidateAddActive] = useState(false);
    return (
        <div>
            <button className='open-can' onClick={() => setModalCandidateAddActive(true)}>Add Candidate</button>
            <Modal active={modalCandidateAddActive} setActive={setModalCandidateAddActive}>
                <CandidateAdd></CandidateAdd>
            </Modal> 
            <p>Candidates</p>
            <CandidateList></CandidateList>
        </div>
    );
}

export default CandidatesContent;
