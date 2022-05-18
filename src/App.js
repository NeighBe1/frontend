import React from 'react';
import {Route} from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import Main from "./pages/Main/Main";
import LogIn from "./pages/LogIn/LogIn";

const App = () => {
    return (
        <div>
            <Route path="/" component={Main} exact/>
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={LogIn} />
        </div>
    )
}

export default App;