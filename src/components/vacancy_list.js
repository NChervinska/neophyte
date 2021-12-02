import React from "react";
import axios from "axios";
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
        axios.post('https://pacific-spire-69544.herokuapp.com/auth/login/refresh/', {
            refresh: localStorage.getItem("token"), 
            headers: { "Content-Type": "multipart/form-data",},
        }).then((response) => {
            axios.get( 'https://pacific-spire-69544.herokuapp.com/vacancies/', {
                headers: { 
                    Authorization: 'Bearer ' + response.data.access,
                    "Content-Type": "multipart/form-data", 
                },
            })
            .then(res => {
                this.setState({vacancies: res.data})
                console.log(res); 
                console.log(res.data);
            })
        }).catch(err => {
                console.log(err.message);
        
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