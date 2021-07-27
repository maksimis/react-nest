import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect, useHistory} from "react-router-dom";
import {HomePage} from "./HomePage/HomePage";
import GuardedRoute from "./GuardedRoute";
import {useJwt} from "./AuthHook";
import {RegisterPage} from "./RegisterPage/RegisterPage";
import {LoginPage} from "./LoginPage/LoginPage";
import {useAlert} from "./AlertHook";
import {useGqlMutation, useGqlQuery} from "./ClientHook";
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
        <div className="jumbotron h-100">
            <div className="container h-75 d-flex align-items-center justify-content-center">
                <div className="col-sm-8 col-sm-offset-2">
                    {alert && alert.message &&
                    <div className={`alert alert-${alert.type}`}>{alert.message}</div>
                    }
                    <Switch>
                        <GuardedRoute exact path="/" component={HomePage} auth={jwt !== ''}/>
                        <Route path="/login">
                            <LoginPage loginer={Loginer}/>
                        </Route>
                        <Route path="/register">
                            <RegisterPage register={Register}/>
                        </Route>
                        <Redirect from="*" to="/"/>
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export {App};
