import React from "react";
import VacancyList from './vacancy_list';
import Modal from '../modal_dialog/modal';
import {useState} from 'react';
import VacancyAdd from "./vacancy_add";

const VacanciesContent = () => {
    const [modalVacancyAddActive, setModalVacancyAddActive] = useState(false);
    return (
    <div>
        <button className='open' onClick={() => setModalVacancyAddActive(true)}>Add Vacancy</button>
                <Modal active={modalVacancyAddActive} setActive={setModalVacancyAddActive}>
                    <VacancyAdd></VacancyAdd>
                </Modal> 
        <p>Vacancies</p>
        <VacancyList/>
    </div>   
);
}

export default VacanciesContent;
