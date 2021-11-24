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
        axios.post( '/vacancy/', {
            baseurl: 'https://pacific-spire-69544.herokuapp.com/', 
            name: data.name,
            description: data.description,
            key_words: data.keywords,
            headers: { "Content-Type": "multipart/form-data", 
            Authorization: "Bearer " + response.data.access, 
            },
            mode: 'no-cors',
            })
            .then(res => {
                console.log(res); 
                console.log(res.data);
            })
        }).catch(err => {
                console.log(err.message);
        
        }); 
    };

    return (
        <div className="fieldList" key={3}>
            <form onSubmit={handleSubmit2(onSubmitVac)}>
                <input type="name" placeholder="Name" {...register2("name")} />
                <input type="name" placeholder="Description" {...register2("description")} />
                <input type="name" placeholder="Description" {...register2("keywords")} />
                <input type="submit" value="LOGIN"/>
            </form> 
        </div>
    );
} 

export default VacancyAdd;