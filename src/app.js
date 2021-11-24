import React, {useState} from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { NavBar, Footer, Loading } from "./components";
import { Home, Profile, Vacancies, Candidates } from "./views";


import "./app.css";

const App = () => {
  const { isLoading } = useAuth0();

 // if (isLoading) {
 //   return <Loading />;
  //}

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/candidates" component={Candidates} />
          <Route path="/vacancies" component={Vacancies} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
