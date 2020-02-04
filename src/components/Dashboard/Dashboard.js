import React, { Component } from 'react';
import Button from '../App/Button';

export class Dashboard extends Component {
    render() {
        return (
            <div className = "container">
                <h1>Personal dashboard</h1>
                <Button id = "See more"/>
            </div>
        )
    }
}

export default Dashboard
