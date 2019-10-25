import React from 'react';
//import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";

import HomePage from './components/Home';
import LoginPage from './components/Auth/Login';
import SigninPage from './components/Auth/Signin';
import Header from './components/header';

function App() {
  return (
    <Router>
      <div className="container">
        <Header/>

        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route exact path="/login">
            <LoginPage/>
          </Route>
          <Route exact path="/signIn">
            <SigninPage/>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
