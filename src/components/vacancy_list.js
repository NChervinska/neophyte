import React from "react";
import {refresh} from '../client/auth_api';
import { getVacancies, deleteVacancy, getVacancy } from "../client/vacancy_api";
import "./vacancy_list.css"
import Modal from '../modal_dialog/modal';
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
            <button className="gradient-button" onClick={() => {}}>Update</button>
            </div>
            <div className={"deleteButton"}>
                <button className="gradient-button-delete" onClick={() => {     
                    refresh().then((response) => {
                        deleteVacancy(response.data.access, vacancy.id);
                    })
                }}>Delete</button>
            </div>
        </div>
    );
    return (
        <div>
            {content}
        </div>
    );
}