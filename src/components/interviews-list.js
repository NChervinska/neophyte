import React from "react";
import "./vacancy_list.css"
import "./vacancies-content.css"
import {refresh} from '../client/auth_api';
import { getInterviews, deleteInterview } from "../client/interview_api";
import {useState} from 'react';
import Modal from '../modal_dialog/modal';
import InterviewAdd from './interview_add';

export default class InterviewsList extends React.Component {
    state = {
        interviews: []
    };

    componentDidMount(){
        async function getData() {
            const response = await refresh();
            return getInterviews(response.data.access);
        }
        getData().then(res => {
            this.setState({interviews: res.data})
        });
    }

    render(){
        return(
            <div>
                <CandidateForech interviews={this.state.interviews} />
            </div>
        );
    }
}

function CandidateForech(props) {
    const [modalInterviewAddActive, setModalInterviewAddActive] = useState(false);

    const content = props.interviews.map((interview) =>
        <div key={interview.id}>
            <table className="styled-table">
                <tbody>
                <tr>
                    <td>{interview.candidate}</td>
                    <td>{interview.datetime}</td>
                    <td>{interview.link}</td>
                </tr>
                </tbody>
            </table>
            <div className={"updateButton"}>
                <button className="gradient-button" onClick={() => setModalInterviewAddActive(true)}>Update</button>
            </div><Modal active={modalInterviewAddActive} setActive={setModalInterviewAddActive}>
                <InterviewAdd></InterviewAdd>
            </Modal>
            <div className={"deleteButton"}>
                <button className="gradient-button-delete" onClick={() => {     
                    refresh().then((response) => {
                        deleteInterview(response.data.access, interview.id)
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