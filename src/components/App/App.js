import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Navbar from './../header/Navbar'
import Landing from './Landing'
import Signup from './Signup'
import Login from './Login'
import About-Us from './About-Us'

export default class App extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {

    //     }
    // }

    handleClick(elemID) {
        alert(`${elemID} clicked`)
    }

    render() {
        return (
            <div className='App'>
                <Router>
                    <Navbar />
                    <div className='home'>
                        <Switch>
                            <Route exact path='/'>
                                <Landing />
                            </Route>
                            <Route path="/Signup">
                                <Signup />
                            </Route>
                            <Route path="/Login">
                                <Login />
                            </Route>
                            <Route path='/Learn More!'>
                                <About-Us />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}