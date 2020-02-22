import React from 'react'
import Bear from '../../images/bear.jpg'
export default function AboutUs() {
    return (
        
        <div className="container">
            <div className = "container">
                
                <h1>Meet the crew!</h1>
                <br/>
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
            <div className="card-deck p-5">
                <div className="card">
                    <img className="card-img-top" src={Bear} alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={Bear} alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src={Bear} alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
