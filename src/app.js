import React from "react";
import { Route, Switch } from "react-router-dom";

import { NavBar, Footer } from "./components";
import { Home, Profile, Vacancies, Candidates } from "./views";


import "./app.css";

    
const App = () => { 
  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/candidates" component={Candidates} />
          <Route path="/vacancies" component={Vacancies} /> 
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>  
      <Footer />
    </div>
  );
};

export default App;
