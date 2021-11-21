import React, {useState} from "react";
import Login from "./login";
import Registration from "./registration";
import Modal from '../modal_dialog/modal';


const AuthNav = () => {
    const [modalLoginActive, setModalLoginActive] = useState(true);
    const [modalRegistrationActive, setModalRegistrationActive] = useState(false);
    return (
        <div className="navbar-nav ml-auto">
            <button className='openm' onClick={() => setModalLoginActive(true)}>Login</button>
            <Modal active={modalLoginActive} setActive={setModalLoginActive}>
                <Login/>
            </Modal>
            <button className='openm' onClick={() => setModalRegistrationActive(true)}>Registration</button>
            <Modal active={modalRegistrationActive} setActive={setModalRegistrationActive}>
                <Registration/>
            </Modal>
        </div>
    );
};

export default AuthNav;
