import React from "react";
import axios from "axios";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: "", password: ""};

        this.onChangedEmail = this.onChangedEmail.bind(this);
        this.onChangedPassword = this.onChangedPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangedEmail = event => {
        this.setState({email: event.target.value});
    }
    onChangedPassword = event => {
        this.setState({password: event.target.value});
    }

    onSubmit (event) {  
        console.log(this.state);
        axios.post( '/auth/login/', {
            baseurl: 'https://pacific-spire-69544.herokuapp.com/', 
            email: this.state.email,
            password: this.state.password,
            headers: { "Content-Type": "multipart/form-data" },})
            .then(res => {
                console.log(res); 
                console.log(res.data);
            }).catch(err => {
                console.log(err.message);
                alert("Incorrect data");
        });
        event.preventDefault();
    } 

    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <label>Email:
                        <input type="email" value={this.state.email} onChange={this.onChangedEmail}/>
                    </label>
                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.onChangedPassword}/>
                    </label>
                    <input type="submit" value="LOGIN"/>
                </form> 
            </div>
        );
    }
} 

export default Login;