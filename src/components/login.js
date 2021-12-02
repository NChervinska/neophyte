import React from "react";
import {useForm} from "react-hook-form";
import {login} from "../client/auth_api"

function Login () {
    const {
        register: register1,
        handleSubmit: handleSubmit1
    } = useForm();

    const onSubmitLog = (data) => { 
        async function getLogin() {
            const res = await login(data.email1, data.password3);
            console.log(res.data);
            localStorage.setItem("token", res.data.refresh);
            window.location.reload();  
        } 
        getLogin();
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