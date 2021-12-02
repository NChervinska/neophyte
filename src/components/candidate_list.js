import React from "react";
import axios from "axios";
import "./vacancy_list.css"
import CandidateUpdate from "./candidate_update";
import CandidateDelete from "./candidate_delete";
import Modal from '../modal_dialog/modal';
import {useState} from 'react';
import "./vacancies-content.css"
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
    const [modalCandidateUpdateActive, setModalCandidateUpdateActive] = useState(false);
    const [modalCandidateDeleteActive, setModalCandidateDeleteActive] = useState(false);
    const content = props.candidates.map((candidate) =>
        <div key={candidate.id}>
            <table className="styled-table">
                <tbody>
                    <tr>
                        <td>{candidate.first_name}</td>
                        <td>{candidate.last_name}</td>  
                        <td>{candidate.email}</td>
                        <td><output type="file">{candidate.sv_file}</output></td>
                        <td>{candidate.vacancy}</td>
                    </tr>
                </tbody>
            </table>
            <div className={"updateButton"}>
                <button className="gradient-button" onClick={() => setModalCandidateUpdateActive(true)}>Update</button>
                <Modal active={modalCandidateUpdateActive} setActive={setModalCandidateUpdateActive}>
                    <CandidateUpdate></CandidateUpdate>
                </Modal>
            </div>
            <div className={"deleteButton"}>
                <button className="gradient-button-delete" onClick={() => setModalCandidateDeleteActive(true)}>Delete</button>
                <Modal active={modalCandidateDeleteActive} setActive={setModalCandidateDeleteActive}>
                    <CandidateDelete></CandidateDelete>
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