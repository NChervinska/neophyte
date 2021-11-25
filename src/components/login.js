import React from "react";
import axios from "axios"; 
import {useForm} from "react-hook-form";

const URL = 'https://pacific-spire-69544.herokuapp.com/auth/login/';
function Login () {
    const {
        register: register1,
        handleSubmit: handleSubmit1
    } = useForm();

    const onSubmitLog = (data) => {
        axios.post( URL, { 
            withCredentials: false,
            mode: 'no-cors',
            email: data.email1,
            password: data.password3,
            headers: { 
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "multipart/form-data" },
            })
            .then(res => {
                console.log(res); 
                console.log(res.data);
                localStorage.setItem("token", res.data.refresh);
                window.location.reload(); 
            }).catch(err => {
                console.log(err.message);
                alert("Incorrect data");
        });
    };

    return (
        <div className={"fieldList"}>
                <form key={6} onSubmit={handleSubmit1(onSubmitLog)}>
                    <input type="email" placeholder="Email" {...register1("email1", {required: true})}/>
                    <input type="password" placeholder="Password" {...register1("password3", {required: true})}/>
                    <p></p>
                    <input type="submit" value="LOGIN"/>
                </form> 
            </div>
    );
} 

export default Login;