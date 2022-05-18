import React, {useState} from "react";
import Modal from "../../Components/Modal";
import SignUp from "../SignUp/SignUp";
import LogIn from "../LogIn/LogIn";

function Main(){
    const [modalOpen, setModalOpen] = useState(false);
    const [loginComponent,setLoginComponent]=useState(true);

    const openLoginModal = () => {
        setModalOpen(true);
    };
    const openJoinModal = () => {
        setModalOpen(true);
        setLoginComponent(false);

    };
    const closeModal = () => {
        setModalOpen(false);
        setLoginComponent(true);
    };

    return(
        <div>
            main_page
            <button onClick={openLoginModal}>Login</button>
            <button onClick={openJoinModal}>Join</button>
            {loginComponent?<Modal open={modalOpen} close={closeModal} header="Modal" component={<LogIn />} />
                :<Modal open={modalOpen} close={closeModal} header="Modal" component={<SignUp />} />}
        </div>

    );
};

export default Main;