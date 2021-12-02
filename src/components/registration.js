import React from "react";
import {useForm} from "react-hook-form";
import {register} from "../client/auth_api";

function Registration () {
    const {
        register: register2,
        handleSubmit: handleSubmit2,
    } = useForm();

    const onSubmitReg = (data) => {
        async function getRegistration() {
            const res = await register(data.email, 
                data.password, 
                data.password2,
                data.first_name,
                data.last_name,
            );
            console.log(res.data);
            window.location.reload(); 
        } 
        getRegistration();
    };

        return (
            <div className={"fieldList"}>
                <form key={2} onSubmit={handleSubmit2(onSubmitReg)}>
                    <input type="email" placeholder="Email" {...register2("email", {required: true})}/>
                    <input type="password" placeholder="Password" {...register2("password", {required: true})}/>
                    <input type="password" placeholder="Repeat password" {...register2("password2", {required: true})}/>
                    <input type="text" placeholder="First name" {...register2("first_name", {required: true})}/>
                    <input type="text" placeholder="Last name" {...register2("last_name", {required: true})}/>
                    <p></p>
                    <input type="submit" value="REGISTER"/>
                </form> 
            </div>
        );
} 

export default Registration;