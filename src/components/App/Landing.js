import React from 'react'
import Button from './Button'
import Navbar from '../header/Navbar'
import './../styles/Landing.css'

export default function App() {
    return (
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
    )
}
