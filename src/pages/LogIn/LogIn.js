import React, {useState} from "react";
import {Link} from "react-router-dom";
import {authService} from "../../firebase_config/firebaseConfig";
import "./style.css";

function LogIn(){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [newAccount, setNewAccount] = useState(true);

    const onChangeId = (e)=>{
        setEmail(e.value);
    };

    const onChangePw = (e)=>{
        setPassword(e.value);
    };

    const onSubmit = async (e)=>{
      e.preventDefault();
      console.log("submit입장");
      console.log(authService);
      try{
          let data;
          data = await authService.signInWithEmailAndPassword(email,password);
          console.log("로그인 성공");
          // if(newAccount){
          //    data = await authService.createUserWithEmailAndPassword(email,password);
          // }else{
          //     data = await authService.signInWithEmailAndPassword(email,password);
          // }
          console.log(data);
      }catch (error) {
          alert(error);
          console.log(error);
      }
    };
    const toggleAccount = () => setNewAccount((prev) => !prev);
    return(

        <div id="hello">
            <div class="section"></div>
            <div class="section">
            <form onSubmit={onSubmit}>
                <label id='ID-label'>
                    <span>ID</span>
                    <div>
                        <input type="email" id='id-login' name='id-login' value={email} onChange={onChangeId}/>
                    </div>
                </label>
                <label id='password-label'>
                    <span>PW</span>
                    <div>
                        <input type="password" id='password-login' name='password-login' value={password} onChange={onChangePw}/>
                    </div>
                </label>
                <input type="submit" value={ newAccount ? "Create Account" : "Login" } />
                {/*<button type="submit">LOGIN</button>*/}
            </form>
            <span onClick={toggleAccount}>{newAccount ? "Login" : "Craete Account"}</span>
            </div>
        </div>
    );
}

export default LogIn;