import React, { Component } from 'react'
import Button from '../App/Button';

export class Login extends Component {
    render() {
        return (
            <div className = "container login-form">
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <Button id ="Log in" />
                    <a href = "">Doesn't have an account? <span className = "link-signup">Sign up here</span></a>
                </form>
            </div>

        )
    }
}

export default Login
