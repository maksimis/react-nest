import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import './App.css';


export function RegisterForm() {
    let [name, setName] = useState('');
    let [surname, setSurname] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let history = useHistory();

    function handleNameChange(e: any) {
        setName(e.target.value);
    }

    function handleSurnameChange(e: any) {
        setSurname(e.target.value);
    }

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

                <p>Имя</p>

                <p><input type="text" name="Имя" value={name} onChange={handleNameChange}/></p>

                <p>Фамилия</p>

                <p><input type="text" name="Фамилия" value={surname} onChange={handleSurnameChange}/>
                </p>
                <p> Email</p>

                <p><input type="text" name="Email" value={email} onChange={handleEmailChange}/></p>

                <p>Пароль</p>

                <p><input type="password" name="Пароль" onChange={handlePasswordChange}/></p>

                <p><input type="submit" value="Войти"/></p>
            </form>
        </div>
    )
}
