import React from 'react'
import Button from './Button'
import FadeIn from 'react-fade-in'

export default function Signup(props) {
    return (
        <FadeIn>
        <div className='signup p-3' >
            {/* <nav className='navbar navbar-light justify-content-end'>
                    <Button id='Login' onClick={this.handleClick} />
                </nav> */}
            <body className='container-lg'>
                <h2 className='font-weight-bold text-center py-2'>
                    Register
                    </h2>
                <form className='border px-3 py-4'>
                    <div className='container-fluid'>
                        <div className='container'>
                            <div className="form-group">
                                <label for="userFirstName">First Name</label>
                                <input type="text" className="form-control" id="userFirstName" />
                            </div>
                            <div className="form-group">
                                <label for="userLastName">Last Name</label>
                                <input type="text" className="form-control" id="userLastName" />
                            </div>
                            <div className="form-group">
                                <label for="userEmail">Email address</label>
                                <input type="email" className="form-control" id="userEmail" />
                            </div>
                            <div className="form-group">
                                <label for="userPassword">Password</label>
                                <input type="password" className="form-control" id="userPassword" />
                            </div>
                            <div className="form-group">
                                <label for="userPassword">Confirm Password</label>
                                <input type="password" className="form-control" id="userPasswordConfirm" />
                            </div>
                        </div>
                        <div className='container'>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="radioGroup" id="male" value="option1" checked />
                                <label class="form-check-label" for="exampleRadios1">
                                    Male
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="radioGroup" id="female" value="option2" />
                                <label class="form-check-label" for="exampleRadios2">
                                    Female
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="radioGroup" id="neither" value="option3" />
                                <label class="form-check-label" for="exampleRadios3">
                                    Prefer Not to Say
                                </label>
                            </div>
                            <div className="form-group">
                                <label for="userAddress">Address</label>
                                <input type="text" className="form-control" id="userAddress" />
                            </div>
                            <div className="form-group">
                                <label for="userCity">City</label>
                                <input type="text" className="form-control" id="userCity" />
                            </div>
                            <div className="form-group">
                                <label for="userPostalCode">Postal Code</label>
                                <input type="text" className="form-control" id="userPostalCode" />
                            </div>
                        </div>
                    </div>
                    <div className='container-fluid d-flex flex-row flex-nowrap justify-content-center'>
                        <Button id='Submit' />
                    </div>
                </form>
            </body>
        </div>
        </FadeIn>
    )
}
