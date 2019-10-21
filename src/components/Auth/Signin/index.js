import React, {Component} from 'react';
import classnames from 'classnames';
import axios from 'axios';
import './index.scss';

class SigninPage extends Component {
    state = {  }
    render() { 
        return (
            <div className="container signin">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <header className="card-header">
                                <a href="" className="float-right btn btn-outline-primary mt-1">Log in</a>
                                <h4 className="card-title mt-2">Sign up</h4>
                            </header>
                            <article className="card-body">
                                <form className="form-signin">
                                    <div className="form-group">
                                        <label>Пошта</label>
                                        <input type="email" className="form-control" placeholder=""></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Пароль</label>
                                        <input className="form-control" type="password"></input>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary btn-lg btn-block">Register</button>
                                    </div>
                                </form>
                            </article>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}
 
export default SigninPage;