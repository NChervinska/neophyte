import React from "react";
import axios from "axios"; 
import {useForm} from "react-hook-form";
import "./login.css"

function VacancyAdd () {
    const { register: register2, handleSubmit: handleSubmit2,} = useForm();
    const onSubmitVac = data => {
        console.log(data); 
        axios.post('https://pacific-spire-69544.herokuapp.com/auth/login/refresh/', {
            refresh: localStorage.getItem("token"), 
            headers: { "Content-Type": "multipart/form-data",},
        }).then((response) => { 
            console.log(response.data);
        axios.post( 'https://pacific-spire-69544.herokuapp.com/vacancies/', {
            headers: { "Content-Type": "multipart/form-data", 
                    Authorization: "Bearer " + response.data.access,
                },
            name: data.name,
            description: data.description,
            key_words: data.keywords,
            mode: 'no-cors',
            })
            .then(res => {
                console.log(res); 
                console.log(res.data);
                window.location.reload(); 
            })
        }).catch(err => {
                console.log(err.message);
        
        }); 
    };

    return (
        <div className="fieldList" key={3}>
            <form onSubmit={handleSubmit2(onSubmitVac)}>
                <input type="name" placeholder="Name" {...register2("name")} />
                <p></p>
                <input type="name" placeholder="Description" {...register2("description")} />
                <p></p>
                <input type="name" placeholder="Key words" {...register2("keywords")} />
                <p></p>
                <input type="submit" value="ADD"/>
            </form> 
        </div>
    );
} 

export default VacancyAdd;