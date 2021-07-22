import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/timur">timur</Link>
            </li>
            <li>
              <Link to="/artur">artur</Link>
            </li>
            <li>
              <Link to="/bulat">bulat</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

            {//Код ниже - это для вызова компонентов, очевидно что пока с этим кодом приложение не запустится
            }
            
        {/*
        <Switch>
          <Route path="/timur">
            <Timur />
          </Route>
          <Route path="/artur">
            <Artur />
          </Route>
          <Route path="/bulat">
            <Bulat />
          </Route>
        </Switch>
        */}

      </div>
    </Router>
  );
}

export default App;
