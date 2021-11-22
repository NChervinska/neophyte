import React from "react";
import axios from "axios"; 
import {useForm} from "react-hook-form";
import "./login.css"
function Login () {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data); 
        axios.post( '/auth/login/', {
            baseurl: 'https://pacific-spire-69544.herokuapp.com/', 
            email: data.email,
            password: data.password,
            headers: { "Content-Type": "multipart/form-data" },})
            .then(res => {
                console.log(res); 
                console.log(res.data);
                localStorage.setItem("token", res.data.access);
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