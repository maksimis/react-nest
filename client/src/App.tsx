import React from 'react';
import './App.css';
import {Switch, Route, Redirect, useHistory} from "react-router-dom";
import {HomePage} from "./HomePage/HomePage";
import GuardedRoute from "./Auth/GuardedRoute";
import {useJwt} from "./Auth/AuthHook";
import {RegisterPage} from "./Auth/RegisterPage/RegisterPage";
import {LoginPage} from "./Auth/LoginPage/LoginPage";
import {useAlert} from "./Shared/AlertHook";
import {useGqlMutation} from "./Shared/ClientHook";
import {gql} from "@apollo/client";

function App() {
    let [jwt, setJwt] = useJwt();
    let [alert, setAlert] = useAlert();
    let makeMutation = useGqlMutation();
    let history = useHistory();

    function Loginer(email: string, password: string) {
        makeMutation({
            mutation: gql`
                mutation Login($data: UserLoginInput!) {
                    login(loginData: $data)
                }`,
            variables: {
                "data": {
                    "email": email,
                    "password": password
                }
            }
            , onSuccess: (data: any) => {
                setJwt(data.login);
                history.push('/');
            }
        });
    }

    function Register(user: any) {
        makeMutation({
            mutation: gql`
                mutation Register($data: UserRegisterInput!) {
                    register(registerData: $data){
                        firstName
                    }
                }`,
            variables: {
                "data": {
                    "email": user.email,
                    "firstName": user.firstName,
                    "surname": user.lastName,
                    "age": Number(user.age),
                    "phoneNumber": user.phoneNumber,
                    "password": user.password
                }
            },
            onSuccess: () => {
                setAlert({type: 'success', message: 'Registration complete.'})
                history.push('/login');
            }
        });
    }

    return (
        <Switch>
            <GuardedRoute exact path="/" component={HomePage} auth={jwt !== ''}/>
            <Route path="/login">
                <LoginPage loginer={Loginer} alert={alert}/>
            </Route>
            <Route path="/register">
                <RegisterPage register={Register} alert={alert}/>
            </Route>
            <Redirect from="*" to="/"/>
        </Switch>
    );
}

export {App};
