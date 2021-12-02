import React from "react";
import {refresh} from '../client/auth_api';
import { getVacancies } from "../client/vacancy_api";
import "./vacancy_list.css"
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
                <tbody>
                <tr>
                    <td>{vacancy.name}</td>
                    <td>{vacancy.description}</td>
                    <td>{vacancy.key_words}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
    return (
        <div>
            {content}
        </div>
    );
}