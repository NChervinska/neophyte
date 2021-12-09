import React from "react";
import {useForm} from "react-hook-form";
import "./profile-content.css"
import {updateUser} from "../client/user_api"
const ProfileContent = () => {
    const token = localStorage.getItem("token");
        const {
            register: register1,
            handleSubmit: handleSubmit1
        } = useForm({
            defaultValues: {  // Acquire these values from server
                name1: "bill",
                surname1: "luo",
                email1: "bluebill1049@hotmail.com"
            }
        });

        const onSubmitLog = (data) => {
            async function getProfileInfo() {
                const res = await updateUser(0, data.email1, data.oldPassword1, data.newPassword1, data.name1, data.surname1, token);
                console.log(res.data);
                localStorage.setItem("token", res.data.refresh);
                window.location.reload();
            }
            getProfileInfo();
        };
    const isAuth = token != null;
    return (
        (isAuth &&<div>
            <h1>Profile</h1>
            <div className={"centered-content"}>
                            <div className="row mt-2">
                                <form key={6} onSubmit={handleSubmit1(onSubmitLog)}>
                                <div className="col-md-12"><label className="labels">Name</label><input type="text" className="form-control" placeholder="first name" {...register1("name1", {required: true})} defaultValue=""/></div>
                                <div className="col-md-12"><label className="labels">Surname</label><input type="text" className="form-control" defaultValue="" placeholder="surname" {...register1("surname1", {required: true})} /></div>
                                <div className="col-md-12"><label className="labels">Email</label><input type="text" className="form-control" placeholder="Email" {...register1("email1", {required: true})} readOnly={true} defaultValue=""/></div>
                                    <div className="col-md-12"><label className="labels">Old password</label><input type="password" className="form-control" placeholder="old password" {...register1("oldPassword1", {required: true})}  defaultValue=""/></div>
                                    <div className="col-md-12"><label className="labels">New password</label><input type="password" className="form-control" placeholder="new password" {...register1("newPassword1", {required: true})}  defaultValue=""/></div>
                               <p></p>
                                    <input type="submit" value="Save info"/>
                                </form>
        </div>
            </div>
        </div>)
    );
}

export default ProfileContent;
