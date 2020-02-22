import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    // changePosStatic = y => {
    //     for (var i = 0; i < y.length; i++) {
    //         y[i].style.position = "static";
    //     }
    // }

    // changePosAbsolute = y => {
    //     for (var i = 0; i < y.length; i++) {
    //         y[i].style.position = "absolute";
    //     }
    // }
    // expand() {
    //     var x = document.getElementById("navbar-slide");
    //     var y = document.getElementsByClassName("item");
    //     if (x.getAttribute("value") === "closed") {
    //         x.style.width = "400px";
    //         x.setAttribute("value", "opened")

    //         setTimeout(this.changePosStatic(y), 39);
    //     }
    //     else if (x.getAttribute("value") === "opened") {
    //         x.style.width = "60px";
    //         x.setAttribute("value", "closed");

    //         setTimeout(this.changePosAbsolute(y), 450);
    //     }
    // }

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <Link to='/'>
                                    <a class="nav-link">Home <span class="sr-only">(current)</span></a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/Signup'>
                                    <a class='nav-link'>Signup</a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/Login'>
                                    <a class='nav-link'>Login</a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/Dashboard'>
                                    <a class='nav-link'>Dashboard</a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/AboutUs'>
                                    <a class='nav-link'>About Us</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
