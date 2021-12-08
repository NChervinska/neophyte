import React from "react";
import "./profile-content.css"
const ProfileContent = () => {
    const token = localStorage.getItem("token");
    const isAuth = token != null;
    return (
        (isAuth &&<div>
            <h1>Profile</h1>
            <div className={"centered-content"}>
            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-5 border-right">
                        <div className="p-3 py-5">
                            <div className="row mt-2">
                                <div className="col-md-6"><label className="labels">Name</label><input type="text" className="form-control" placeholder="first name" defaultValue=""/></div>
                                <div className="col-md-6"><label className="labels">Surname</label><input type="text" className="form-control" defaultValue="" placeholder="surname"/></div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-6"><label className="labels">Email</label><input type="text" className="form-control" placeholder="Email" defaultValue=""/></div>
                                <div className="col-md-6"><label className="labels">Gender</label><input type="text" className="form-control" placeholder="Gender" defaultValue=""/></div>
                            </div>
                            <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Save Info</button></div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="p-3 py-5">
                            <div className="col-md-9"><label className="labels">Old password</label><input type="text" className="form-control" placeholder="old password" defaultValue=""/></div> <br/>
                            <div className="col-md-9"><label className="labels">New password</label><input type="text" className="form-control" placeholder="new password" defaultValue=""/></div>
                            <div className="mt-4 text-center">
                                <button className="btn btn-primary password-button" type="button">Change password</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </div>)
    );
}

export default ProfileContent;
