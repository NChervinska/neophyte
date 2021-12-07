import React from "react";
import "./profile-content.css"
const ProfileContent = () => {
    const token = localStorage.getItem("token");
    const isAuth = token != null;
    return (
        (isAuth &&<div>
            <h1>Profile</h1>
            <div className={"centered-content"}>
            <div class="container rounded bg-white mt-5 mb-5">
                <div class="row">
                    <div class="col-md-5 border-right">
                        <div class="p-3 py-5">
                            <div class="row mt-2">
                                <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" placeholder="first name" defaultValue=""/></div>
                                <div class="col-md-6"><label class="labels">Surname</label><input type="text" class="form-control" defaultValue="" placeholder="surname"/></div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-6"><label class="labels">Email</label><input type="text" class="form-control" placeholder="Email" defaultValue=""/></div>
                                <div class="col-md-6"><label class="labels">Gender</label><input type="text" class="form-control" placeholder="Gender" defaultValue=""/></div>
                            </div>
                            <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Info</button></div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="p-3 py-5">
                            <div class="col-md-9"><label class="labels">Old password</label><input type="text" class="form-control" placeholder="old password" defaultValue=""/></div> <br/>
                            <div class="col-md-9"><label class="labels">New password</label><input type="text" class="form-control" placeholder="new password" defaultValue=""/></div>
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
