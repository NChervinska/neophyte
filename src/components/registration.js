import React from "react";
import axios from "axios";

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: "", password: "", password2 : "", first_name: "", last_name: ""};

        this.onChangedEmail = this.onChangedEmail.bind(this);
        this.onChangedPassword = this.onChangedPassword.bind(this);
        this.onChangedPassword2 = this.onChangedPassword2.bind(this);
        this.onChangedFirstName = this.onChangedFirstName.bind(this);
        this.onChangedLastName = this.onChangedLastName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangedEmail = event => {
        this.setState({email: event.target.value});
    }
    onChangedPassword = event => {
        this.setState({password: event.target.value});
    }
    onChangedPassword2 = event => {
        this.setState({password2: event.target.value});
    }
    onChangedFirstName = event => {
        this.setState({first_name: event.target.value});
    }
    onChangedLastName = event => {
        this.setState({last_name: event.target.value});
    }

    onSubmit (event) {  
        console.log(this.state);
        axios.post( '/auth/register/', {
            baseurl: 'https://pacific-spire-69544.herokuapp.com/', 
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
            first_name: this.state.first_name,
            last_name: this.state.last_name,  
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
            <div className={"fieldList"}>
                <form onSubmit={this.onSubmit}>
                        <input type="email" placeholder="Email" value={this.state.email} onChange={this.onChangedEmail}/>
                        <input type="password" placeholder="Password" value={this.state.password} onChange={this.onChangedPassword}/>
                        <input type="password" placeholder="Repeat password" value={this.state.password2} onChange={this.onChangedPassword2}/>
                        <input type="text" placeholder="First name" value={this.state.first_name} onChange={this.onChangedFirstName}/>
                        <input type="text" placeholder="Last name" value={this.state.last_name} onChange={this.onChangedLastName}/>
                  <p></p>
                    <input type="submit" value="REGISTER"/>
                </form> 
            </div>
        );
    }
} 

export default Registration;