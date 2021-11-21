import React, {useState} from "react";
import Login from "./login";
import Registration from "./registration";
import Modal from '../modal_dialog/modal';


const AuthNav = () => {
    const [modalLoginActive, setModalLoginActive] = useState(true);
    const [modalRegistrationActive, setModalRegistrationActive] = useState(false);
    const token = localStorage.getItem("token"); 
    const isAuth = token != null; 
    if(!isAuth) {
        return (
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
        ); 
    }
    else{
        return (<button onClick={() => localStorage.removeItem("token")}>Logout</button> );
    }
};

export default AuthNav;
