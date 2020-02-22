import React from 'react'
import Button from './Button'
import FadeIn from 'react-fade-in'

export default function Landing() {
    return (
        <FadeIn>
            <div className='landing'>
                <div>
                    <body className='container-fluid d-flex flex-sm-col flex-md-row'>
                        <div class="jumbotron my-3 mx-auto">
                            <h1 class="display-4">App Name</h1>
                            <p class="lead">
                                Login or Signup to find out more about which vitamins you may need!
                            </p>
                            <div className='container-fluid d-flex justify-content-start p-0 m-0'>
                                <Button id='Learn More!' />
                            </div>
                        </div>
                    </body>
                </div>
            </div>
        </FadeIn>
    )
}