import React from "react";
import "./vacancy_list.css"
import "./vacancies-content.css"
import {refresh} from '../client/auth_api';
import {getCandidats, deleteCandidate} from '../client/candidat_api';
import {decode as base64_decode, encode as base64_encode} from 'base-64';

    async function getData(id) {
        const response = await refresh(); 
        console.log(id);
        await deleteCandidate(response.data.access, id);
        window.location.reload(); 
    };
    
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
                        <a href='cv.doc' download={base64_decode(candidate.sv_file)} download>Download</a>
                        <td>{candidate.vacancy}</td>
                    </tr>
                </tbody>
            </table>
            <div className={"updateButton"}>
                <button className="gradient-button" onClick={getData()}>Update</button>
            </div>
            <div className={"deleteButton"}>
                <button className="gradient-button-delete" onClick={
                getData(candidate.id)
                } >Delete</button>
            </div>
        </div>
        
    );
    return (
        <div>
            {content}
        </div>
    );
}