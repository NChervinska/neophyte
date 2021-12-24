import React from "react";
import "./vacancy_list.css"
import "./vacancies-content.css"
import {refresh} from '../client/auth_api';
import { getInterviews } from "../client/interview_api";

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
                <button className="gradient-button" onClick={() => {}}>Update</button>
            </div>
            <div className={"deleteButton"}>
                <button className="gradient-button-delete" onClick={() => {}}>Delete</button>
            </div>
        </div>
    );
    return (
        <div>
            {content}
        </div>
    );
}