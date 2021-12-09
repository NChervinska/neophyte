import React from "react";
import {useForm} from "react-hook-form";
import "./profile-content.css"
import {updateUser, getUser} from "../client/user_api"; 
import {refresh} from "../client/auth_api";
import {getVacancies} from '../client/vacancy_api';
import {getInterviews} from '../client/interview_api';

const ProfileContent = () => {
    const token = localStorage.getItem("token"); 
    
        const {
            register: register6,
            handleSubmit: handleSubmit6
        } = useForm({
            defaultValues: {  // Acquire these values from server
                name1: '',
                surname1: '',
                email1: ''
            }
        });

        const onSubmitLog = (data) => { 
            console.log(data);
            async function getData() {
                const response = await refresh();
                return updateUser(data.email1, data.name1, data.surname1, response.data.access);
            }
            getData().then(res => {
                console.log(res.data);
            });
        };
    const isAuth = token != null;
    return (
        (isAuth &&<div>
            <h1>Profile</h1>
            <div className={"centered-content"}>
                            <div className="row mt-2">
                                <form key={6} onSubmit={handleSubmit6(onSubmitLog)}>
                                <div className="col-md-12"><label className="labels">Name</label><input type="text" className="form-control" placeholder="first name" {...register6("name1", {required: true})} defaultValue=""/></div>
                                <div className="col-md-12"><label className="labels">Surname</label><input type="text" className="form-control" defaultValue="" placeholder="surname" {...register6("surname1", {required: true})} /></div>
                                <div className="col-md-12"><label className="labels">Email</label><input type="text" className="form-control" placeholder="Email" {...register6("email1", {required: true})} defaultValue=""/></div>
                                    <div className="col-md-12"><label className="labels">Old password</label><input type="password" className="form-control" placeholder="old password" {...register6("oldPassword1", {required: true})}  defaultValue=""/></div>
                                    <div className="col-md-12"><label className="labels">New password</label><input type="password" className="form-control" placeholder="new password" {...register6("newPassword1", {required: true})}  defaultValue=""/></div>
                                <p></p>
                                    <input type="submit" value="Save info"/>
                                </form>
        </div>
            </div>
        </div>)
    );
}

export default ProfileContent;
