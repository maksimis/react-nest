import React from 'react';
import './App.css';
import {LoginForm} from "./Login";
import {RegisterForm} from "./Register";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Redirect
} from "react-router-dom";

function isAuthorized() {
    if (false) {
        return (
            <div>
                NotImplemented
            </div>
        )
    } else {
        return (
            <div>
                Hello, stranger!
            </div>
        )
    }
}

function App() {
    return (
        <div>
            <header>
                <div className="App">
                    <Router>

                        <Switch>
                            <Route path="/login">
                                <LoginForm/>
                            </Route>
                            <Route path="/register">
                                <RegisterForm/>
                            </Route>
                            <Route path="/home">
                                <div>
                                    <nav>
                                        <div>
                                            <Link to="/Home"> Home </Link>
                                        </div>
                                        <div>
                                            <Link to="/login">Войти</Link>
                                        </div>
                                        <div>
                                            <Link to="/register">Зарегестрироваться</Link>
                                        </div>
                                    </nav>
                                </div>
                            </Route>
                            <Redirect to='/home' from='/'/>
                        </Switch>
                    </Router>
                </div>
            </header>
            <div>
                {isAuthorized()}
            </div>
        </div>
    );
}

export default App;
