import React from "react";
import { Route, Switch } from "react-router-dom";

import { NavBar, Footer } from "./components";
import { Home, Profile, ExternalApi } from "./views";
import VacancyList from "./components/vacancy_list";


import "./app.css";

    
const App = () => { 
  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <Switch>
          <fragment><Route path="/" exact component={Home} /></fragment>
          <fragment><Route path="/profile" component={Profile} /></fragment>
          <fragment><Route path="/external-api" component={ExternalApi} /></fragment>
        </Switch>
      </div>  
        <VacancyList/>
      <Footer />
    </div>
  );
};

export default App;
