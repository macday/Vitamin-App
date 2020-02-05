import React, { Fragment } from 'react';
import Button from './Button'
import Navbar from '../header/Navbar'
import './../styles/Landing.css'
import { Route } from 'react-router'

//Need to install React-router-dom react router --> easier control
export default function App() {
    return (
        <Fragment>
            <div className="Landing">
                <Navbar />
                <div className='container'>
                    <div className='top'>
                        <Button id='Sign up' />
                        <Button id='Login' />
                    </div>
                    <div className='about-content'>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}
