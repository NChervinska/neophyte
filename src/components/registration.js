import React from "react";
import axios from "axios"; 
import {useForm} from "react-hook-form";

function Registration () {
    const {
        register: register2,
        handleSubmit: handleSubmit2,
      } = useForm();

      const onSubmitReg = (data) => {
        console.log(data);
        axios.post( '/auth/register/', {
            baseurl: 'https://pacific-spire-69544.herokuapp.com/', 
            email: data.email,
            password: data.password,
            password2: data.password2,
            first_name: data.first_name,
            last_name: data.last_name,  
            mode: 'no-cors',
            headers: { "Content-Type": "multipart/form-data" },})
            .then(res => {
                console.log(res); 
                console.log(res.data);
                window.location.reload(); 
            }).catch(err => {
                console.log(err.message);
                alert("Incorrect data");
        });
      };

        return (
            <div className={"fieldList"}>
                <form key={2} onSubmit={handleSubmit2(onSubmitReg)}>
                    <input type="email" placeholder="Email" {...register2("email")}/>
                    <input type="password" placeholder="Password" {...register2("password")}/>
                    <input type="password" placeholder="Repeat password" {...register2("password2")}/>
                    <input type="text" placeholder="First name" {...register2("first_name")}/>
                    <input type="text" placeholder="Last name" {...register2("last_name")}/>
                    <p></p>
                    <input type="submit" value="REGISTER"/>
                </form> 
            </div>
        );
} 

export default Registration;