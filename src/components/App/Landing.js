import React from 'react'
import Button from './Button'
import Navbar from '../header/Navbar'
import Signup from './Signup'

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
            <div className='landing'>
                <div>
                    <nav className='navbar navbar-light bg-dark justify-content-end flex-nowrap py-3 mx-auto'>
                        <div className='nav-item d-flex flex-nowrap flex-row justify-content-around'>
                            <Button id='Signup' onClick={this.handleClick} />
                            <Button id='Login' onClick={this.handleClick}/>
                        </div>
                    </nav>
                    <body className='container-fluid d-flex flex-sm-col flex-md-row'>
                        <div class="jumbotron my-3 mx-auto">
                            <h1 class="display-4">App Name</h1>
                            <p class="lead">
                                Login or Signup to find out more about which vitamins you may need!
                            </p>
                            <div className='container'>
                                <Button id='Learn More!' onClick={this.handleClick}/>
                            </div>
                        </div>
                    </body>
                </div>
            </div>
        )
    }
}