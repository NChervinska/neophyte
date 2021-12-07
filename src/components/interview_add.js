import React from "react";
import {useForm} from "react-hook-form";
import "./login.css"
import {refresh} from "../client/auth_api";
import {createInterview} from "../client/interview_api";

function InterviewAdd () {
    const { register: register5, handleSubmit: handleSubmit5} = useForm();

    const onSubmitInt = data => {
        async function getData() {
            const response = await refresh();
            await createInterview(
                data.candidate,
                data.datetime,
                data.link,
                response.data.access,
            );
            window.location.reload();
        }
        getData();
    };

    return (
        <div className="fieldList">
            <form key={5} onSubmit={handleSubmit5(onSubmitInt)}>
                <input type="text" placeholder="Candidate" {...register5("candidate", {required: true})} />
                <p></p>
                <input type="datetime-local" placeholder="Datetime" {...register5("datetime", {required: true})} />
                <p></p>
                <input type="text" placeholder="Link" {...register5("link", {required: true})} />
                <p></p>
                <input type="submit" value="ADD"/>
            </form>
        </div>
    );
}

export default InterviewAdd;