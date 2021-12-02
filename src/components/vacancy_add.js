import React from "react";
import {useForm} from "react-hook-form";
import "./login.css"
import {refresh} from "../client/auth_api"; 
import {createVacancy} from "../client/vacancy_api";

function VacancyAdd () {
    const { register: register3, handleSubmit: handleSubmit3} = useForm();
    
    const onSubmitVac = data => {
        async function getData() {
            const response = await refresh();
            await createVacancy(
                data.name,
                data.description,
                data.keywords,
                response.data.access,
            );
            window.location.reload(); 
        }
        getData();
    };

    return (
        <div className="fieldList">
            <form key={3} onSubmit={handleSubmit3(onSubmitVac)}>
                <input type="text" placeholder="Name" {...register3("name", {required: true})} />
                <p></p>
                <input type="text" placeholder="Description" {...register3("description", {required: true})} />
                <p></p>
                <input type="text" placeholder="Key words" {...register3("keywords", {required: true})} />
                <p></p>
                <input type="submit" value="ADD"/>
            </form> 
        </div>
    );
} 

export default VacancyAdd;