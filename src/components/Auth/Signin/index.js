import React, {Component} from 'react';
import classnames from 'classnames';
import axios from 'axios';
import './index.scss';

class SigninPage extends Component {
    state = {
        login: '',
        password: ''
    }

    onSubmit=(e)=>{
        e.preventDefault();
        console.log("---signin---");
        const {login, password}=this.state;
        const model={"email":login,"password":password};
        axios.post("https://localhost:44373/api/Account/signin",model).then(
            (rest)=>{
                console.log("--signin--");
            }
        );
    }

    onChange=(e)=>{
        this.setState({[e.target.name]: e.target.value});
    }

    render() { 
        const{login, password}=this.state;
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
                                <form onSubmit={this.onSubmit} className="form-signin">
                                    <div className="form-group">
                                        <label>Пошта</label>
                                        <input type="email"
                                            className="form-control"
                                            placeholder=""
                                            value={login}
                                            id="login"
                                            name="login"
                                            onChange={this.onChange}></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Пароль</label>
                                        <input className="form-control"
                                            type="password"
                                            value={password}
                                            onChange={this.onChange}
                                            id="password"
                                            name="password"></input>
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