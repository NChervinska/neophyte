import React from "react";
import axios from "axios";
import "./vacancy_list.css"
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