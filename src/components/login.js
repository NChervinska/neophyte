import React from "react";
import axios from "axios";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: "", password: ""};

        this.onChangedEmail = this.onChangedEmail.bind(this);
        this.onChangedPassword = this.onChangedPassword.bind(this);
        this.onSubmitLog = this.onSubmitLog.bind(this);
    }

    onChangedEmail = event => {
        this.setState({email: event.target.value});
    }
    onChangedPassword = event => {
        this.setState({password: event.target.value});
    }

    onSubmitLog (event) {  
        console.log(this.state);
        axios.post( '/auth/login/', {
            baseurl: 'https://pacific-spire-69544.herokuapp.com/', 
            email: this.state.email,
            password: this.state.password,
            headers: { "Content-Type": "multipart/form-data" },})
            .then(res => {
                console.log(res); 
                console.log(res.data);
                localStorage.setItem("token", res.data.access);
            }).catch(err => {
                console.log(err.message);
                alert("Incorrect data");
        });
        event.preventDefault();
    } 

    render(){
        return (
            <div className="Login">
                <form onSubmit={this.onSubmitLog} id='logForm'>
                    <label>Email:
                        <input type="email" value={this.state.email} onChange={this.onChangedEmail}/>
                    </label>
                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.onChangedPassword}/>
                    </label>
                    <input id='logs' type="submit" value="LOGIN"/>
                </form> 
            </div>
        );
    }
} 

export default Login;