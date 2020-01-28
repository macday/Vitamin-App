import React from 'react'
import "./../styles/Navbar.css"

function handleClick() {
    console.log("button clicked!")
}


export default function Navbar() {
    return (
        <div>
            <nav className='Navbar'>
                <ul>
                    <button 
                        onClick={handleClick}>
                            <li>Home</li>
                    </button>
                    <button 
                        onClick={handleClick}>
                            <li>Profile</li>
                    </button>
                    <button 
                        onClick={handleClick}>
                            <li>About</li>
                    </button>
                </ul>
            </nav>
        </div>
    )
}
