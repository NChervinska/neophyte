import React from "react";
import {useForm} from "react-hook-form";
import "./profile-content.css"
import { getResult } from "../client/ii_api";
import {refresh} from "../client/auth_api";
import {useState} from 'react';

const AIAnalysisContent = () => {
    const [values, setValues] = useState([]);
    const token = localStorage.getItem("token");

    const {
        register: register6,
        handleSubmit: handleSubmit6
    } = useForm({});

    const onSubmitLog = (data) => {
        async function getData() {
            const response = await refresh();
            return getResult(data.id, response.data.access);
        }
        getData().then(res => {
            setValues(Object.entries(res.data));
        });
    };
    const isAuth = token != null;
    return (
        (isAuth &&<div>
            <h1>Get AI analysis records</h1>
            <div className={"centered-content"}>
                <div className="row mt-2">
                    <form key={6} onSubmit={handleSubmit6(onSubmitLog)}>
                        <div className="col-md-12"><label className="labels">ID</label><input type="number" className="form-control" placeholder="interview ID" {...register6("id")} required={true}/></div>
                        <p></p>
                        <input type="submit" value="OK"/>
                    </form>
                </div>
            </div>
                <ResForech values={values}/>
        </div>)
    );
}

export default AIAnalysisContent;

function ResForech(props) {

    const content = props.values.map((key, value) => 
        <div key={key}>
            <table className="styled-table">
                <tbody>
                    <tr>
                        <td>{key}</td>  
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

