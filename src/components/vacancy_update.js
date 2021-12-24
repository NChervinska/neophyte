import React from "react";
import {useForm} from "react-hook-form";
import "./login.css"
import {refresh} from "../client/auth_api"; 
import {updateVacancy} from "../client/vacancy_api";

function VacancyUpdate (vacancy) {
    const { register: register7, 
        handleSubmit: handleSubmit7} = useForm({
            defaultValues: {
                name: vacancy.name,
                description: vacancy.description,
                keywords: vacancy.keywords,
            }
        });
    
    const onSubmitVac = data => {
        async function getData() {
            const response = await refresh();
            await updateVacancy(
                vacancy.id,
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
            <form key={7} onSubmit={handleSubmit7(onSubmitVac)}>
                <input type="text" placeholder="Name" {...register7("name", {required: true})} />
                <p></p>
                <input type="text" placeholder="Description" {...register7("description", {required: true})} />
                <p></p>
                <input type="text" placeholder="Key words" {...register7("keywords", {required: true})} />
                <p></p>
                <input type="submit" value="ADD"/>
            </form> 
        </div>
    );
} 

export default VacancyUpdate;