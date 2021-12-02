import React from "react";
import axios from "axios";

import {useForm} from "react-hook-form";
import "./login.css"

function CandidateDelete () {
    const { register: register4, handleSubmit: handleSubmit4} = useForm();
    const onSubmitCan = data => {
        console.log(data);
        axios.post('https://pacific-spire-69544.herokuapp.com/auth/login/refresh/', {
            refresh: localStorage.getItem("token"),
            headers: { "Content-Type": "multipart/form-data",},
        }).then((response) => {
            const config = {headers: {
                    Authorization: "Bearer " + response.data.access,
                }};
            console.log(data.sv_file[0]);
            axios.post( 'https://pacific-spire-69544.herokuapp.com/candidates/', {
                    email: data.email,
                    first_name: data.first_name,
                    last_name: data.last_name,
                    sv_file: data.sv_file[0],
                    vacancy: data.vacancy,
                },
                config,
            )
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    window.location.reload();
                })
        });
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

export default CandidateDelete;