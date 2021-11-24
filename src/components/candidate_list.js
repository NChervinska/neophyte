import React from "react";
import axios from "axios";

export default class CandidateList extends React.Component {
    state = {
        candidates: []
    };

    componentDidMount(){ 
        axios.post('https://pacific-spire-69544.herokuapp.com/auth/login/refresh/', {
            refresh: localStorage.getItem("token"), 
            headers: { "Content-Type": "multipart/form-data",},
        }).then((response) => {
            axios.get( 'https://pacific-spire-69544.herokuapp.com/candidates/', {
                headers: { 
                    Authorization: 'Bearer ' + response.data.access,
                    "Content-Type": "multipart/form-data", 
                },
            })
            .then(res => {
                this.setState({candidates: res.data})
                console.log(res.data);
            }); 
        }).catch(err => {
                console.log(err.message);
        }); 
    }
    
    render(){
        return(
            <div>
                <CandidateForech candidates={this.state.candidates} />
            </div>
        );
    }
}

function CandidateForech(props) { 
    const content = props.candidates.map((candidate) =>
        <div key={candidate.id}>
            <h3>{candidate.first_name}</h3>
            <p>{candidate.last_name}</p>  
            <p>{candidate.email}</p>
            <p>{candidate.sv_file}</p>
            <p>{candidate.vacancy}</p>
        </div>
    );
    return (
        <div>
            {content}
        </div>
    );
}