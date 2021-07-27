import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import {HomePage} from "./HomePage/HomePage";
import GuardedRoute from "./GuardedRoute";
import {useJwt} from "./AuthHook";
import {RegisterPage} from "./RegisterPage/RegisterPage";
import {LoginPage} from "./LoginPage/LoginPage";

function App({alert} : any) {
    let [jwt, setJwt] = useJwt();

    function Loginer(email : string, password: string){

    }

    function Register(user: any){

    }

  return (
      <div className="jumbotron h-100">
        <div className="container h-75 d-flex align-items-center justify-content-center">
          <div className="col-sm-8 col-sm-offset-2">
            {/*{alert.message &&
            <div className={`alert ${alert.type}`}>{alert.message}</div>
            }*/}
            <Router>
              <Switch>
                <GuardedRoute exact path="/" component={HomePage} auth={jwt !== ''}/>
                <Route path="/login">
                    <LoginPage loginer={Loginer}/>
                </Route>
                <Route path="/register">
                    <RegisterPage register={Register}/>
                </Route>
                <Redirect from="*" to="/" />
              </Switch>
            </Router>
          </div>
        </div>
      </div>
  );
}

export {App};
