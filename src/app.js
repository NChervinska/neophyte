import React from "react";
import { Route, Switch } from "react-router-dom";

import { NavBar, Footer } from "./components";
import { Home, Profile, Vacancies, Candidates, AIAnalysis, ScreenCapture, Interviews } from "./views";

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
            <Route path="/interviews" component={Interviews} />
            <Route path="/screenCapture" component={ScreenCapture} />
            <Route path="/ai-analysis" component={AIAnalysis} />
        </Switch>
      </div>  
      <Footer />
    </div>
  );
};

export default App;
