import React, {Component} from 'react';
import classnames from 'classnames';
import axios from 'axios';
import './index.scss';

class LoginPage extends Component {
    state = {
        login: '',
        errors: {
            //invalid: 'User is',
            //login: 'Not valid login'
        }
    }
    onSubmithandler=(e)=>{
        e.preventDefault();
        const {login}=this.state;
        //let vasyl="vasyl";
        let errors={};
        // if(login==vasyl){
        //     errors.invalid='User is'
        // }
        // if(login==null){
        //     errors.invalid='Input login'
        // }
        this.setState({errors: errors});
        const model = {"email":login};
        axios.post("https://localhost:44373/api/Account/login", model).then(
            (rest)=>{
                console.log('--x--');
                
            }
        );
    }

    onChange=(e)=>{
        this.setState({[e.target.name]: e.target.value});
    }
    render() {
        const {errors, login} = this.state;
        console.log('----login----', login);
        return (
            <div className="signin">
                <form onSubmit={this.onSubmithandler} className="form-signin">
                    <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                    <h1 className="h3 mb-3 font-weight-normal text-center">Please sign in</h1>
                    
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
                            className="form-control is-invalid"
                            id="password"
                            name="password" />
                        <div className="invalid-feedback">
                            Please choose a password.
                        </div>
                    </fieldset>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">© 2017-2019</p>
                </form>
            </div>
        );
    }
}
 
export default LoginPage;