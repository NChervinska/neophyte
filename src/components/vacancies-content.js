import React from "react";
import VacancyList from "./vacancy_list";
import Modal from '../modal_dialog/modal';
import {useState} from 'react';
import VacancyAdd from "./vacancy_add";
import "./button_style.css"
import "./vacancies-content.css"

const VacanciesContent = () => {
    const token = localStorage.getItem("token"); 
    const isAuth = token != null; 
    const [modalVacancyAddActive, setModalVacancyAddActive] = useState(false);
    
    
    return (
    (isAuth && <div>
        <div className={"addButton"}>
        <button class="gradient-button" onClick={() => setModalVacancyAddActive(true)}>Add Vacancy</button>
        </div>
            <Modal active={modalVacancyAddActive} setActive={setModalVacancyAddActive}>
                <VacancyAdd></VacancyAdd>
            </Modal> 
        <h1>Vacancies</h1>
        <VacancyList/>
    </div>) 
);
}

export default VacanciesContent;
