import React, {Component} from 'react';
import classnames from 'classnames';
import axios from 'axios';
import './index.scss';

import UserCabinet from '../Cabinet/index';

class LoginPage extends Component {
    state = {
        show: false,
        login: '',
        password: '',
        errors: {
            //invalid: 'User is',
            //login: 'Not valid login'
        }
    }
    onSubmithandler=(e)=>{
        e.preventDefault();
        const {login, password}=this.state;
        let errors={};
        this.setState({errors: errors});
        const model = {"email":login, "password":password};
        axios.post("https://localhost:44373/api/Account/login", model).then(
            (rest)=>{
                const tokenJwt =  rest.data;
                console.log(tokenJwt);

                this.onClick();
            }
        );
        this.setState({show:false});
    }

    onChange=(e)=>{
        this.setState({[e.target.name]: e.target.value});
    }

    // confirmToken=(e)=>{
    //     console.log("---confirm---");
    //     //axios.post("")
    // }

    onClick=(e)=>{
        console.log("---clickLogin---");
        //this.confirmToken();
        this.setState({show:true});
        // return(
        //     <Cabinet/>
        // );
    }

    render() {
        const {errors, login, password, show} = this.state;
        //console.log('----login----', login);
        return (
            <React.Fragment>
                <div className="login">
                    <form onSubmit={this.onSubmithandler} className="form-login">
                        <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                        <h1 className="h3 mb-3 font-weight-normal text-center">Please login</h1>
                        
                        {
                            !!errors.invalid &&
                            <div className="alert alert-danger" role="alert">
                                {errors.invalid}
                            </div>
                        }

                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <fieldset className="form-group text-center">
                            <label htmlFor="login">Пошта/Телефон</label>
                            <input type="text"
                                className={classnames('form-control', { 'is-invalid': !!errors.login })}
                                id="login"
                                name="login"
                                value={login}
                                onChange={this.onChange} />
                            <div className="invalid-feedback">
                                Please choose a username.
                            </div>
                        </fieldset>
                        <fieldset className="form-group text-center">
                            <label htmlFor="password">Пароль</label>
                            <input type="password"
                                className={classnames('form-control', { 'is-invalid': !!errors.password })}
                                id="password"
                                name="password"
                                value={password}
                                onChange={this.onChange} />
                            <div className="invalid-feedback">
                                Please choose a password.
                            </div>
                        </fieldset>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
                    </form>
                </div>
                {show && <UserCabinet name={login}/>}
            </React.Fragment>
        );
    }
}
 
export default LoginPage;