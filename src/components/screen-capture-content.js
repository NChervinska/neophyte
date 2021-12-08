import React from "react";

const ScreenCaptureContent = () => {
    const token = localStorage.getItem("token");
    const isAuth = token != null;
    return (
        (isAuth &&<div>
            <h1>Interview screen capturing</h1>
        </div>)
    );
}

export default ScreenCaptureContent;
