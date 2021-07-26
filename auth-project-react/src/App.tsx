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
    if(false){
        return(
            <div className="App">
                <nav>
                    <div>
                        <Link to="/Home" className="App-link"> Home </Link>
                    </div>
                    <div>
                        <Link to="/logout" className="App-link">Выйти</Link>
                    </div>
                </nav>
            </div>
        )
    }
    else{
        return(
            <div className="App">
                <nav>
                    <div>
                        <Link to="/Home" className="App-link"> Home </Link>
                    </div>
                    <div>
                        <Link to="/login" className="App-link">Войти</Link>
                    </div>
                    <div>
                    <Link to="/register" className="App-link">Зарегестрироваться</Link>
                    </div>
                </nav>
            </div>
        )
    }
}


function App() {
    return (
        <div>
                <div>
                    <Router>

                        <Switch>
                                <Route path="/login">
                                    <LoginForm/>
                                </Route>
                                <Route path="/register">
                                    <RegisterForm/>
                                </Route>
                                <div className="App">
                                    <nav>
                                        {isAuthorized()}
                                    </nav>
                                </div>
                            <Redirect to='/home' from='/'/>
                        </Switch>
                    </Router>
                </div>
            <div>
            </div>
        </div>
    );
}

export default App;
