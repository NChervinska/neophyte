import React from "react";
import {refresh} from '../client/auth_api';
import { getVacancies } from "../client/vacancy_api";
import "./vacancy_list.css"
import VacancyUpdate from "./vacancy_update";
import VacancyDelete from "./vacancy_delete";
import Modal from '../modal_dialog/modal';
import {useState} from 'react';
import "./vacancies-content.css"
export default class VacancyList extends React.Component {
    state = {
        vacancies: []
    };

    componentDidMount(){ 
        async function getData() {
            const response = await refresh();
            return getVacancies(response.data.access);
        }
        getData().then(res => {
            this.setState({vacancies: res.data})
        });
    }
    
    render(){
        return(
            <div>
                <VacancyForech vacancies={this.state.vacancies} />
            </div>
        );
    }
}

function VacancyForech(props) {
    const [modalVacancyUpdateActive, setModalVacancyUpdateActive] = useState(false);
    const [modalVacancyDeleteActive, setModalVacancyDeleteActive] = useState(false);
    const content = props.vacancies.map((vacancy) =>
        <div key={vacancy.id}>
            <table className="styled-table">
                <tbody align="center">
                <tr>
                    <td>{vacancy.name}</td>
                    <td>{vacancy.description}</td>
                    <td>{vacancy.key_words}</td>
                </tr>
                </tbody>
            </table>
            <div className={"updateButton"}>
            <button className="gradient-button" onClick={() => setModalVacancyUpdateActive(true)}>Update</button>
            <Modal active={modalVacancyUpdateActive} setActive={setModalVacancyUpdateActive}>
                <VacancyUpdate></VacancyUpdate>
            </Modal>
            </div>
            <div className={"deleteButton"}>
                <button className="gradient-button-delete" onClick={() => setModalVacancyDeleteActive(true)}>Delete</button>
                <Modal active={modalVacancyDeleteActive} setActive={setModalVacancyDeleteActive}>
                    <VacancyDelete></VacancyDelete>
                </Modal>
            </div>
        </div>
    );
    return (
        <div>
            {content}
        </div>
    );
}