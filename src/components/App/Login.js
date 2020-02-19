import React from 'react'
import Button from './Button'

export default function Login(props) {
    return (
        <div className='login p-3'>
            <div className='container-fluid d-flex justify-content-center flex-column flex-nowrap'>
                <form className='container-sm mx-auto border px-3 py-4'>
                    <div className="form-group">
                        <label for="userEmail">Email Address</label>
                        <input type="email" className="form-control" id="userEmail" />
                    </div>
                    <div className="form-group">
                        <label for="userPassword">Password</label>
                        <input type="password" className="form-control" id="userPassword" />
                    </div>
                    <div className='d-flex flex-nowrap flex-row justify-content-around'>
                        <Button id='Login' />
                    </div>
                </form>
            </div>
        </div>
    )
}
