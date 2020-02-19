import React, { Component } from 'react'
import Button from './Button'
import NavBar from '../header/Navbar'
export default class Signup extends Component {
    render() {
        return (
            <div className='signup p-3' >
                {/* <nav className='navbar navbar-light justify-content-end'>
                    <Button id='Login' onClick={this.handleClick} />
                </nav> */}
                <body className='container-lg'>

                    <NavBar />

                    <h2 className='font-weight-bold text-center py-2'>
                        Register
                    </h2>
                    <form className='border px-3 py-4'>
                        <div className='container-fluid'>
                            <div className='container'>
                                <div className="form-group">
                                    <label htmlFor="userFirstName">First Name</label>
                                    <input type="text" className="form-control" id="userFirstName" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userLastName">Last Name</label>
                                    <input type="text" className="form-control" id="userLastName" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userEmail">Email address</label>
                                    <input type="email" className="form-control" id="userEmail" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userPassword">Password</label>
                                    <input type="password" className="form-control" id="userPassword" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userPassword">Confirm Password</label>
                                    <input type="password" className="form-control" id="userPasswordConfirm" />
                                </div>
                            </div>
                            <div className='container'>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="radioGroup" id="male" value="option1" checked />
                                    <label className="form-check-label" htmlFor="exampleRadios1">
                                        Male
                                </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="radioGroup" id="female" value="option2" />
                                    <label className="form-check-label" htmlFor="exampleRadios2">
                                        Female
                                </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="radioGroup" id="neither" value="option3" />
                                    <label className="form-check-label" htmlFor="exampleRadios3">
                                        Prefer Not to Say
                                </label>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userAddress">Address</label>
                                    <input type="text" className="form-control" id="userAddress" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userCity">City</label>
                                    <input type="text" className="form-control" id="userCity" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userPostalCode">Postal Code</label>
                                    <input type="text" className="form-control" id="userPostalCode" />
                                </div>
                            </div>
                        </div>
                        <div className="form-row text-center">
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </body>
            </div>
        )
    }
}
