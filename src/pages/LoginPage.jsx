import React, { useEffect, useState } from "react";
import * as API from '../Api';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [badLogin, setBadLogin] = useState(false)
    const [badPassword, setBadPassword] = useState(false)
    const [loginError, setLoginError] = useState('Пустое поле Login')
    const [passwordError, setPasswordError] = useState('Пустое поле Password')
    const [formValid, setFormValid] = useState(false)

    const navigate = useNavigate();

    const authorization = async () => {
        const result = await API.login(login, password);

        if (result.status === 200) {

            localStorage.setItem('token', result.data.token);
            localStorage.setItem('role', result.data.role);
            localStorage.setItem('login', result.data.login);
            navigate('/');
        }
        else {

            badLogin(true);
            setPasswordError('Неверный пароль');
            badPassword(true);
        }
    }

    useEffect(() => {
        if (loginError || passwordError) {
            setFormValid(false)
        }
        else {
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
        if (!e.target.value) {
            setLoginError('Пустое поле Login')
        }
        else {
            setLoginError('')
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)

        if (!e.target.value) {
            setPasswordError('Пустое поле Password')
        }
        else {
            setPasswordError('')
        }
    }


    return (
        <div className="Login">
            <h1 style={{ textAlign: "center" }}>Авторизация</h1>
            <div style={{ width: "300px", margin: "auto" }}>
                <div className="m-2">
                    {(badLogin && loginError) && <div style={{ color: 'red' }}>{loginError}</div>}
                    <input value={login} onChange={e => loginHandler(e)} name="login" onBlur={e => blurHandler(e)} type="text" placeholder="Enter Login" className="w-100" />
                </div>
                <div className="m-2">
                    {(badPassword && passwordError) && <div style={{ color: 'red' }}>{passwordError}</div>}
                    <input value={password} onChange={e => passwordHandler(e)} name="password" onBlur={e => blurHandler(e)} type="password" placeholder="Enter Password" className="w-100" />
                </div>
                <button onClick={authorization} disabled={!formValid} type="submit" style={{ alignItems: "end" }} className="m-2">Submit</button>
            </div >
        </div >
    );
}

export default LoginPage;