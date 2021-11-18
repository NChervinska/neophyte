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
    const json = JSON.stringify({
        email: 'Finn@gmail.com',
        password: '121212qQ_',
        password2: '121212qQ_',
        first_name: 'Steve',
        last_name: 'Jobs'
    });
    const res =axios.post('https://pacific-spire-69544.herokuapp.com/register',json,{
        withCredentials: false})
    try {
        console.log(res);
    }finally{}
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
