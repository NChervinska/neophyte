import React from "react";
import {useForm} from "react-hook-form";
import "./profile-content.css"
import {updateUser} from "../client/user_api";
import {refresh} from "../client/auth_api";

const AIAnalysisContent = () => {
    const token = localStorage.getItem("token");

    const {
        register: register6,
        handleSubmit: handleSubmit6
    } = useForm({
        defaultValues: {  // Acquire these values from server
            interviewId1: '',
            param1: '',
            param2: '',
            param3: '',
            param4: ''
        }
    });

    const onSubmitLog = (data) => {
        console.log(data);
        async function getData() {
            const response = await refresh();
            return updateUser(data.interviewId1, response.data.access);
        }
        getData().then(res => {
            console.log(res.data);
        });
    };
    const isAuth = token != null;
    return (
        (isAuth &&<div>
            <h1>Get AI analysis records</h1>
            <div className={"centered-content"}>
                <div className="row mt-2">
                    <form key={6} onSubmit={handleSubmit6(onSubmitLog)}>
                        <div className="col-md-12"><label className="labels">Name</label><input type="text" className="form-control" placeholder="interview ID" {...register6("interviewId1")} required={true} defaultValue=""/></div>
                        <div className="col-md-12"><label className="labels">Surname</label><input type="text" className="form-control" defaultValue="" placeholder="1st param" readOnly={true} {...register6("param1")} /></div>
                        <div className="col-md-12"><label className="labels">Email</label><input type="text" className="form-control" placeholder="2nd param" {...register6("param2")} readOnly={true} defaultValue=""/></div>
                        <div className="col-md-12"><label className="labels">Old password</label><input type="text" className="form-control" placeholder="3rd param" {...register6("param3")} readOnly={true}  defaultValue=""/></div>
                        <div className="col-md-12"><label className="labels">New password</label><input type="text" className="form-control" placeholder="4th param" {...register6("param4")} readOnly={true} defaultValue=""/></div>
                        <p></p>
                        <input type="submit" value="Obtain info"/>
                    </form>
                </div>
            </div>
        </div>)
    );
}

export default AIAnalysisContent;
