import React, { Component } from 'react'
import Button from './Button'
export class Dashboard extends Component {
    render() {
        return (
            <div className="container-fluid">
                <br/>
                <div className = "container border p-5">
                    <h1>Lorem ipsum</h1>
                    <br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis ut est sed dictum.
                    Donec interdum viverra auctor. Praesent sagittis ligula quis dignissim congue. 
                    Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                    Pellentesque varius, orci nec maximus molestie, quam augue placerat ipsum, sit amet malesuada 
                    mauris urna vitae ipsum. Etiam ac leo felis. Maecenas consectetur eu eros id porttitor.
                    Duis vitae blandit ipsum. Phasellus faucibus mollis dictum. Suspendisse luctus pretium 
                    purus ac imperdiet. Duis id mattis enim, in auctor dolor. Sed suscipit ex eget erat maximus 
                    tristique sed id tellus.</p>
                    <br/>
                    <div className = "container row">
                        <div className = "container border col p-4">
                            <h3>Last record</h3>
                            <br/>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Health 1</li>
                                <li class="list-group-item">Health 2</li>
                                <li class="list-group-item">Health 3</li>
                                <li class="list-group-item">Health 4</li>
                                <li class="list-group-item">Health 5</li>
                            </ul>
                            <br/>
                            <Button id= "More details" />
                        </div>
                        <div className = "container border col p-4">
                            <h3>New record</h3>
                            <br/>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Health 1</li>
                                <li class="list-group-item">Health 2</li>
                                <li class="list-group-item">Health 3</li>
                                <li class="list-group-item">Health 4</li>
                                <li class="list-group-item">Health 5</li>
                            </ul>
                            <br/>
                            <Button id= "Create new record" />
                        </div>
                    </div> 
                    <br/>
                    <div className = "container">
                        <h3>Recommendation</h3>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis ut est sed dictum.
                        Donec interdum viverra auctor. Praesent sagittis ligula quis dignissim congue. 
                        Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                        Pellentesque varius, orci nec maximus molestie, quam augue placerat ipsum, sit amet malesuada 
                        mauris urna vitae ipsum. Etiam ac leo felis. Maecenas consectetur eu eros id porttitor.
                        Duis vitae blandit ipsum. Phasellus faucibus mollis dictum. Suspendisse luctus pretium 
                        purus ac imperdiet. Duis id mattis enim, in auctor dolor. Sed suscipit ex eget erat maximus 
                        tristique sed id tellus.
                        </p>
                    </div>


                </div>
                
            </div>
        )
    }
}

export default Dashboard
