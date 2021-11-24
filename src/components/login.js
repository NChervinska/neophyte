import React from "react";
import axios from "axios"; 
import {useForm} from "react-hook-form";
import "./login.css"

const URL = 'https://pacific-spire-69544.herokuapp.com/auth/login/';
function Login () {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        axios.post( URL, { 
            withCredentials: false,
            mode: 'no-cors',
            email: data.email,
            password: data.password,
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
        <div className="fieldList" key={1}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" placeholder="Email" {...register("email")} />
                <input type="password" placeholder="Password" {...register("password")} />
                <input type="submit" value="LOGIN"/>
            </form> 
        </div>
    );
} 

export default Login;