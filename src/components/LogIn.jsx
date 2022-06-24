import React, { useEffect, useState } from "react";
import '../styles/auth.css';
import axios from "axios";

const LogIn = ({onLogIn}) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [badLogin, setBadLogin] = useState(false)
    const [badPassword, setBadPassword] = useState(false)
    const [loginError, setLoginError] = useState('Пустое поле Login')
    const [passwordError, setPasswordError] = useState('Пустое поле Password')
    const [formValid, setFormValid] = useState(false)

    const authorization = () =>
    {

        axios.post(`http://localhost:3000/Authorization`, {
            login: login,
            password: password, 
        }).then((response) => {
            if(!response.data.auth){
                onLogIn(false) 
            } 
            else{
                onLogIn(true)
                localStorage.setItem("token", response.data.token)
            }
        }) 
    }

    useEffect(() =>{
        if(loginError || passwordError){
            setFormValid(false)
        }
        else{
            setFormValid(true)
        }
    }, [loginError, passwordError])

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'login':
                setBadLogin(true)
                break;
            case 'password':
                setBadPassword(true)
                break;
        }
    }

    const loginHandler = (e) => {
        setLogin(e.target.value)
        if(!e.target.value){
            setLoginError('Пустое поле Login')
        }
        else{
            setLoginError('')
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if(e.target.value.length<3){
            setPasswordError('Короткий пароль')
            if(!e.target.value){
                setPasswordError('Пустое поле Password')
            }
        }
        else{
            setPasswordError('')
        }
    }


    return (
        <div className="div_auth">
            <div name="logIn" className="form_auth">

                <h1 style={{textAlign: "center"}}>Автоторизация</h1>
                {(badLogin && loginError) && <div style={{ color: 'red' }}>{loginError}</div>}
                <input value={login} onChange={e => loginHandler(e)} name="login" onBlur={e => blurHandler(e)} className="signup_input" type="text" placeholder="Enter Login" />
                {(badPassword && passwordError) && <div style={{ color: 'red' }}>{passwordError}</div>}
                <input value={password} onChange={e => passwordHandler(e)} name="password" onBlur={e => blurHandler(e)} className="signup_input" type="password" placeholder="Enter Password" />
                <button onClick={authorization} disabled={!formValid} type="submit" style={{ alignItems: "end" }} className="signup_button">Submit</button>

            </div >
        </div >
    );
}

export default LogIn;