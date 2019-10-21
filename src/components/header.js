import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";

class Header extends Component {
    state = {  }
    render() { 
        return (
            <header>
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/signIn">SignIn</Link>
                    </li>
                </ul>
            </header>
        );
    }
}
 
export default Header;