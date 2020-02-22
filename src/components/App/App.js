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
import AboutUs from './AboutUs'
import Dashboard from './Dashboard'
export default class App extends React.Component {
     constructor(props) {
         super(props)
         this.state = {

         }
     }

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
                                <AboutUs />
                            </Route>
                            <Route path='/Dashboard'>
                                <Dashboard />
                            </Route>
                            <Route path='/AboutUs'>
                                <AboutUs />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}