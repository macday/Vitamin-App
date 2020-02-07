import React from 'react'
import Button from './Button'
import Navbar from '../header/Navbar'
import Signup from './Signup'
import './../styles/Landing.css'

export default class Landing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    handleClick(elemID) {
        alert(`${elemID} clicked`)
        // ReactDOM.render(< `${elemID}` />, document.getElementById('root'));
    }

    render() {
        return (
            <div className="Landing vw-100">
                <div className='navbar sticky-top bg-dark d-flex flex-row flex-nowrap'>
                    <div className='nav-item float-lg-left'>
                        <Navbar />
                    </div>
                    <div
                        className="nav-item display-block float-lg-right d-flex flex-nowrap justify-content-center align-content-end">
                        <Button id='Sign up' onClick={() => this.handleClick('signup')} />
                        <Button id='Login' onClick={() => this.handleClick('login')} />
                    </div>
                </div>
                <div className='container p-5 vh-100 d-flex flex-lg-row flex-column-reverse' style={{ paddingTop: 30 }}>

                    <div className='container-sm h-75 p-3'>
                        <h3 className='text-uppercase text-center'>Welcome! Enter your login below.</h3>
                        <div className='container w-100 h-75 m-auto p-3 border border-darken-1 rounded-lg'>
                            <span class="input-group-text" id="basic-addon1">@user</span>
                            <div className='container p-3'>
                                <label className='p-0'>Password</label><br />
                                <input type='text' placeholder='jdoe' />
                            </div>
                        </div>
                    </div>

                    <div className='container-sm'>
                        <div className='row'>
                            <div className='col d-flex justify-content-center'>
                                <div className='circle responsive-circle-lg'>
                                    <p className='align-bottom'>
                                        Bubble 1
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='row p-0'>
                            <div className='col p-0 d-flex justify-content-end align-top'>
                                <div className='circle responsive-circle-sm'>
                                    <p className='align-bottom'>
                                        Bubble 2
                                    </p>
                                </div>
                            </div>
                            <div className='col p-0 float-left'>
                                <div className='circle responsive-circle-md'>
                                    <p className='align-bottom'>
                                        Bubble 3
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}