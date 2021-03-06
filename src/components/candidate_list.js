import React from "react";
import "./vacancy_list.css"
import "./vacancies-content.css"
import {refresh} from '../client/auth_api';
import {getCandidats, deleteCandidate} from '../client/candidat_api';
import {decode as base64_decode} from 'base-64';
import Modal from '../modal_dialog/modal';
import CandidateAdd from './candidate_add';
import {useState} from 'react';
import { getResult } from "../client/ii_api";
    
export default class CandidateList extends React.Component {
    state = {
        candidates: []
    };

    componentDidMount(){ 
        async function getData() {
            const response = await refresh();
            return getCandidats(response.data.access);
        }
        getData().then(res => {
            this.setState({candidates: res.data})
        });
    }

    render(){
        return(
            <div>
                <CandidateForech candidates={this.state.candidates} />
                <div className={"updateButton"}>
                    <button className="gradient-button" onClick={() => {
                        var res = this.state.candidates;
                        res.sort(function(a,b){
                            if (a.first_name > b.first_name) {
                                return 1;
                            }
                            if (a.first_name < b.first_name) {
                                return -1;
                            }
                        return 0;
                    }); 
                    this.setState({candidates: res})
                }}>First Name</button>

                <button className="gradient-button" onClick={() => {
                        var res = this.state.candidates;
                        res.sort(function(a,b){
                            if (a.last_name > b.last_name) {
                                return 1;
                            }
                            if (a.last_name < b.last_name) {
                                return -1;
                            }
                        return 0;
                    }); 
                    this.setState({candidates: res})
                }}>Last Name</button>

                <button className="gradient-button" onClick={() => {
                        var res = this.state.candidates;
                        res.sort(function(a,b){
                            if (a.vacancy > b.vacancy) {
                                return 1;
                            }
                            if (a.vacancy < b.vacancy) {
                                return -1;
                            }
                        return 0;
                    }); 
                    this.setState({candidates: res})
                }}>Vacancy</button>
                </div>
            </div>
        );
    }
}

function CandidateForech(props) {
    const [modalCandidateAddActive, setModalCandidateAddActive] = useState(false);

    const content = props.candidates.map((candidate) =>
        <div key={candidate.id}>
            <table className="styled-table">
                <tbody>
                    <tr>
                        <td>{candidate.first_name}</td>
                        <td>{candidate.last_name}</td>  
                        <td>{candidate.email}</td>
                        <a href='cv.doc' download={base64_decode(candidate.sv_file)} download>Download</a>
                        <td>{candidate.vacancy}</td>
                    </tr>
                </tbody>
            </table>
            <div className={"updateButton"}>
                <button className="gradient-button" onClick={() => setModalCandidateAddActive(true)}>Update</button>
            </div>
            <Modal active={modalCandidateAddActive} setActive={setModalCandidateAddActive}>
                <CandidateAdd></CandidateAdd>
            </Modal> 
            <div className={"deleteButton"}>
                <button className="gradient-button-delete" onClick={() => {     
                    refresh().then((response) => {
                        deleteCandidate(response.data.access, candidate.id)
                        .then(()=> {window.location.reload();});
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