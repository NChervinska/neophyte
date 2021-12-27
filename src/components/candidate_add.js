import React from "react";
import {useForm} from "react-hook-form";
import {refresh} from '../client/auth_api';
import { createCandidats } from "../client/candidat_api";
import "./login.css";
import {encode as base64_encode} from 'base-64';

function CandidateAdd () {
    const { register: register4, handleSubmit: handleSubmit4} = useForm();

    const onSubmitCan = data => {
        async function getData() {
            const response = await refresh();
            await createCandidats(data.email, 
                data.first_name, 
                data.last_name, 
                base64_encode(data.sv_file[0]),
                data.vacancy,data, 
                response.data.access,
            );
            window.location.reload(); 
        } 
        getData();
    };

    return (
        <div className="fieldList">
            <form key={4} onSubmit={handleSubmit4(onSubmitCan)}>
                <input type="email" placeholder="Email" {...register4("email", {required: true})} />
                <p></p>
                <input type="text" placeholder="First Name" {...register4("first_name", {required: true})} />
                <p></p>
                <input type="text" placeholder="Last Name" {...register4("last_name", {required: true})} />
                <p></p>
                <input type="file" placeholder="CV" accept=".docx, .doc"{...register4("sv_file", {required: true})} />
                <p></p>
                <input type="text" placeholder="Vacancy" {...register4("vacancy", {required: true})} />
                <p></p>
                <input type="submit" value="ADD"/>
            </form> 
        </div>
    );
} 

export default CandidateAdd;