import React, { Component } from 'react'

export default class Profile extends Component {
    constructor() {
        super()
        this.state = {
            name: "Person",
            age: "Age",
            email: "Email"
        }
    }
    render() {
        return (
            <div className="Profile">
                <h1>Name: {this.state.name}</h1>
                <h2>Age: {this.state.age}</h2>
                <h2>Email: {this.state.email}</h2>
            </div>
        )
    }
}
