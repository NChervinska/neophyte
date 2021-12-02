import React from "react";
import {refresh} from '../client/auth_api';
import { getCandidats } from "../client/candidat_api";

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
            </div>
        );
    }
}

function CandidateForech(props) { 
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
        </div>
    );
    return (
        <div>
            {content}
        </div>
    );
}