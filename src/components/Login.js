import { Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import styled from "styled-components";
import { auth } from '../firebase';


function Login() {

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                console.log(auth)
                history.push("/");
            })
            .catch(
                error => alert(error.message)
            )
    }

    const handleRegister = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //the authenticarion object came back: success in creating a user

                if (auth) {
                    history.push("/");
                }
            }).catch(
                error => alert(error.message)
            )

    }


    return (
        <LoginWrapper>
            <div className="login">
                <Link to="/">
                    <img
                        className="login__logo"
                        src="https://purepng.com/public/uploads/large/amazon-logo-s3f.png"
                        alt="amazon logo" />
                </Link>
                <div className="login__container">
                    <h1>Sign in</h1>
                    <form>
                        <h5>E-mail</h5>
                        <input type="text" value={email} onChange={
                            e => setEmail(e.target.value)
                        } />
                        <h5>Password</h5>
                        <input type="password" value={password} onChange={
                            e => setPassword(e.target.value)
                        } />
                        <button
                            className="login_signin_btn"
                            onClick={handleSignIn}
                            type="submit">
                            Sign In
                         </button>
                    </form>

                    <p>By signing in you agree to the
                    AMAZON CLONE Conditions of Use and sale.
                    Please see our Privacy Notice,
                    our CookiesNotice and our Internet-based ADS Notice
                    </p>
                    <button
                        className="login__registrationBtn"
                        onClick={handleRegister}
                    >
                        Create your Amazon Account
                        </button>
                </div>
            </div>
        </LoginWrapper>
    )
}

export default Login

const LoginWrapper = styled.div`

.login{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    height: 100vh;
}
.login__container{
   width : 300px;
   height: fit-content;
   display: flex;
   flex-direction: column;
   border-radius: 2px;
   border: 1px solid gray;
   padding: 20px;
}
.login__logo{
   margin-top : 20px;
   margin-bottom: 20px;
   object-fit: contain;
   width: 100px;
   margin-right: auto;
   margin-left: auto;
}
.login__container > h1{
    font-weight: 500;
    margin-bottom: 20px;
}
.login__container> form > h5{
    margin-bottom: 5px;
}
.login__container> form > input{
    height: 30px;
    width: 98%;
    margin-bottom: 10px;
    background-color: white;
}
.login__container> p {
    margin-top: 15px;
    font-size: 12px;
}

.login_signin_btn{
   background: var(--amazonYellow);
   border-radius: 2px;
   width: 100%;
   height: 30px;
   border:  1px solid;
   margin-top: 10px;
   border-color: #a88734  #9c7e31 #846a29;
   
}

.login__registrationBtn{
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border:  1px solid;
    margin-top: 10px;
    border-color: #a88734  #9c7e31 #846a29;
}


`