import React, {useState} from "react";
import { Route, Switch } from "react-router-dom";

import { NavBar, Footer, Loading } from "./components";
import { Home, Profile, ExternalApi } from "./views";
import ProtectedRoute from "./auth/protected-route"; 
import Login from "./components/login";
import Registration from "./components/registration";
import Modal from './modal_dialog/modal';

import "./app.css";

const App = () => {
  const token = localStorage.getItem("token"); 
  const isAuth = token != null;
  console.log(isAuth);

  const [modalLoginActive, setModalLoginActive] = useState(!isAuth);
  const [modalRegistrationActive, setModalRegistrationActive] = useState(false);
  

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <div className="container flex-grow-1">
        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/external-api" component={ExternalApi} />
        </Switch>
      </div> 
      { !isAuth &&
        <div>
          <button className='open-log' onClick={() => setModalLoginActive(true)}>Login</button>
          <Modal active={modalLoginActive} setActive={setModalLoginActive}>
            <Login></Login>
          </Modal> 
          <button className='open' onClick={() => setModalRegistrationActive(true)}>Registration</button>
          <Modal active={modalRegistrationActive} setActive={setModalRegistrationActive}>
            <Registration></Registration>
          </Modal> 
        </div>
      } 
      { isAuth && 
        <button onClick={() => localStorage.removeItem("token")}>Logout</button> 
      }
      <Footer />
    </div>
  );
};

export default App;
