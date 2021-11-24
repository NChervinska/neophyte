import React from "react";
import axios from "axios";

export default class VacancyList extends React.Component {
    state = {
        vacancies: []
    };
    
    onSubmitDel = data => {
    };

    onSubmitEdit = data => {
    };

    componentDidMount(){ 
        axios.post('https://pacific-spire-69544.herokuapp.com/auth/login/refresh/', {
            refresh: localStorage.getItem("token"), 
            headers: { "Content-Type": "multipart/form-data",},
        }).then((response) => {
            axios.get( 'https://pacific-spire-69544.herokuapp.com/vacancies/', {
                headers: { "Content-Type": "multipart/form-data", 
                    Authorization: "Bearer " + response.data.access,
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
            <h3>{vacancy.name}</h3>
            <p>{vacancy.description}</p>  
            <p>{vacancy.keywords}</p>
        </div>
    );
    return (
        <div>
            {content}
        </div>
    );
}