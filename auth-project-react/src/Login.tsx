import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import './App.css';

export function LoginForm() {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let history = useHistory();


    function handleEmailChange(e: any) {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e: any) {
        setPassword(e.target.value);
    }

    function handleSubmit(e: any) {
        e.preventDefault();
        history.push('/')
    }

    function handleHomeRedirect(e:any) {
        e.preventDefault();
        history.push('/')
    }

    return (
        <div className="forms">
            <div>
                <p>
                    <form onSubmit={handleHomeRedirect}>
                        <input type="submit" value="Home"/>
                    </form>
                </p>
            </div>
            <form onSubmit={handleSubmit}>
                <p><input type="text" name="Email" value={email} onChange={handleEmailChange}/></p>
                <p><input type="password" name="Пароль" onChange={handlePasswordChange}/></p>
                <p><input type="submit" value="Войти"/></p>
            </form>
        </div>
    )
}