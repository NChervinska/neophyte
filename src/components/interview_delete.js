import React from "react";
import axios from "axios";
import {useForm} from "react-hook-form";
import "./login.css"

function InterviewDelete () {
    const { register: register3, handleSubmit: handleSubmit3} = useForm();
    const onSubmitVac = data => {
        console.log(data);
        axios.post('https://pacific-spire-69544.herokuapp.com/auth/login/refresh/', {
            refresh: localStorage.getItem("token"),
            headers: { "Content-Type": "multipart/form-data",},
        }).then((response) => {
            const config = {
                headers: {
                    Authorization: "Bearer " + response.data.access,
                }
            };
            console.log(response.data);
            axios.post( 'https://pacific-spire-69544.herokuapp.com/vacancies/',
                {
                    name: data.name,
                    description: data.description,
                    key_words: data.keywords,
                },
                config,
            )
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
        <div className="fieldList">
            <form key={3} onSubmit={handleSubmit3(onSubmitVac)}>
                <input type="text" placeholder="Name" {...register3("name", {required: true})} />
                <p></p>
                <input type="text" placeholder="Description" {...register3("description", {required: true})} />
                <p></p>
                <input type="text" placeholder="Key words" {...register3("keywords", {required: true})} />
                <p></p>
                <input type="submit" value="Update"/>
            </form>
        </div>
    );
}

export default InterviewDelete;