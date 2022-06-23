import React, { useEffect, useState } from "react";
import '../styles/auth.css';
import axios from "axios";

const LogIn = ({onLogIn}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [badEmail, setBadEmail] = useState(false)
    const [badPassword, setBadPassword] = useState(false)
    const [emailError, setEmailError] = useState('Пустое поле Email')
    const [passwordError, setPasswordError] = useState('Пустое поле Password')
    const [formValid, setFormValid] = useState(false)

    const authorization = () =>
    {
        axios.post('http://localhost:3000/Authorization', {
            email: email,
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
        if(emailError || passwordError){
            setFormValid(false)
        }
        else{
            setFormValid(true)
        }
    }, [emailError, passwordError])

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setBadEmail(true)
                break;
            case 'password':
                setBadPassword(true)
                break;
        }
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(!re.test(String(e.target.value).toLowerCase())){
            setEmailError('Некорректный email')
        }
        else{
            setEmailError('')
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
            <form name="logIn" className="form_auth">

                <h1 style={{textAlign: "center"}}>Регистрация</h1>
                {(badEmail && emailError) && <div style={{ color: 'red' }}>{emailError}</div>}
                <input value={email} onChange={e => emailHandler(e)} name="email" onBlur={e => blurHandler(e)} className="signup_input" type="text" placeholder="Enter Email" />
                {(badPassword && passwordError) && <div style={{ color: 'red' }}>{passwordError}</div>}
                <input value={password} onChange={e => passwordHandler(e)} name="password" onBlur={e => blurHandler(e)} className="signup_input" type="password" placeholder="Enter Password" />
                <button onClick={authorization} disabled={!formValid} type="submit" style={{ alignItems: "end" }} className="signup_button">Зарегистрироваться</button>

            </form >
        </div >
    );
}

export default LogIn;