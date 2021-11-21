import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import { NavBar, Footer, Loading } from "./components";
import { Home, Profile, ExternalApi } from "./views";
import ProtectedRoute from "./auth/protected-route";

import "./app.css";

const App = () => {
    const {isLoading} = useAuth0();

    if (isLoading) {
        return <Loading/>;
    }
   /* axios.post( '/auth/register/', 
    {
        baseurl: 'https://pacific-spire-69544.herokuapp.com/', 
        email: 'rgbdf@gmail.com',
        password: 'Qwsf2f_',
        password2: 'Qwsf2f_',
        first_name: 'Name',
        last_name: 'Jake',  
        headers: { "Content-Type": "multipart/form-data" },}).then(res => {
            console.log(res); 
            console.log(res.data);
        }).catch(err => {console.log(err.message);});*/

        axios.post( '/auth/login/', 
    {
        baseurl: 'https://pacific-spire-69544.herokuapp.com/', 
        email: 'anastasiia.chervinska@nure.ua',
        password: 'Qazzz12!',
        headers: { "Content-Type": "multipart/form-data" },}).then(res => {
            console.log(res); 
            console.log(res.data);
        }).catch(err => {console.log(err.message);});

    return (
        <div id="app" className="d-flex flex-column h-100">
            <NavBar/>
            <div className="container flex-grow-1">
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <ProtectedRoute path="/profile" component={Profile}/>
                    <ProtectedRoute path="/external-api" component={ExternalApi}/>
                </Switch>
            </div>
            <Footer/>
        </div>
    );
};

export default App;
