import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// import Input from './Input'
import './../styles/Form.css'

export default class Form extends Component {
    render() {
        return (
            <div className='Form'>
                <h1>Welcome!</h1>
                <p>To find out which vitamins you require, please fill out the form below!</p>
                <div className='wrapper'>
                    <div className='content-box'>
                        {/* <Input /> */}
                    </div>
                    <div className='content-box'>
                        {/* <Input /> */}
                    </div>
                    <div className='content-box'>
                        {/* <Input /> */}
                    </div>
                </div>
            </div>
        )
    }
}
