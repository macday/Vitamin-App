import React from 'react'
import Button from './Button'
import Navbar from '../header/Navbar'
import Signup from './Signup'
import './../styles/Landing.css'

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
            <div className="Landing">
                <div className='navbar sticky-top bg-dark d-flex flex-row flex-nowrap'>
                    <div className='nav-item float-lg-left'>
                        <Navbar />
                    </div>
                    <div
                        className="nav-item display-block float-lg-right d-flex flex-wrap justify-content-center align-content-end">
                        <Button id='Sign up' onClick={() => this.handleClick('signup')} />
                        <Button id='Login' onClick={() => this.handleClick('login')} />
                    </div>
                </div>
                <div className='container-fluid about-content p-5 min-vh-100'>
                    <div className='container-lg m-auto'>
                        <div className='row h-100'>
                            <div className='col bg-success h-75 my-auto p-5'>
                                <h1>Tile 1</h1>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, quo consectetur provident molestiae soluta nisi sit illo id, eius nesciunt inventore. Ullam voluptatem nostrum culpa eius neque facilis, dicta esse officiis pariatur asperiores distinctio deserunt modi recusandae eligendi. Quasi temporibus molestias natus rem consectetur eius nobis, dolorem nemo ad incidunt cum veritatis odio reprehenderit illum. Suscipit temporibus mollitia libero ea praesentium minus quam doloremque possimus est ipsa fugiat laboriosam nesciunt explicabo nihil ducimus corporis, doloribus eum voluptates sapiente neque sunt at soluta adipisci? Modi qui possimus pariatur dignissimos animi quos ipsam explicabo sint ut? Corrupti cumque aperiam ad culpa eveniet.
                            </div>
                            <div className='col-9 bg-info d-flex flex-row'>
                                <div className='row'>
                                    <div className='col-6 bg-danger h-75 my-auto p-4 h-auto'>
                                        <h1>Tile 2</h1>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, quo consectetur provident molestiae soluta nisi sit illo id, eius nesciunt inventore. Ullam voluptatem nostrum culpa eius neque facilis, dicta esse officiis pariatur asperiores distinctio deserunt modi recusandae eligendi. Quasi temporibus molestias natus rem consectetur eius nobis, dolorem nemo ad incidunt cum veritatis odio reprehenderit illum. Suscipit temporibus mollitia libero ea praesentium minus quam doloremque possimus est ipsa fugiat laboriosam nesciunt explicabo nihil ducimus corporis, doloribus eum voluptates sapiente neque sunt at soluta adipisci? Modi qui possimus pariatur dignissimos animi quos ipsam explicabo sint ut? Corrupti cumque aperiam ad culpa eveniet.
                                    </div>
                                    <div className='col p-3 mx-3'>
                                        <div className='row p-3'>
                                            <h1>Tile 3</h1>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, quo consectetur provident molestiae soluta nisi sit illo id, eius nesciunt inventore. Ullam voluptatem nostrum culpa eius neque facilis, dicta esse officiis pariatur asperiores distinctio deserunt modi recusandae eligendi. Quasi temporibus molestias natus rem consectetur eius nobis, dolorem nemo ad incidunt cum veritatis odio reprehenderit illum. Suscipit temporibus mollitia libero ea praesentium minus quam doloremque possimus est ipsa fugiat laboriosam nesciunt explicabo nihil ducimus corporis, doloribus eum voluptates sapiente neque sunt at soluta adipisci? Modi qui possimus pariatur dignissimos animi quos ipsam explicabo sint ut? Corrupti cumque aperiam ad culpa eveniet.
                                        </div>
                                        <div className='row bg-success p-3'>
                                            <h1>Tile 4</h1>
                                            <p>
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, quo consectetur provident molestiae soluta nisi sit illo id, eius nesciunt inventore. Ullam voluptatem nostrum culpa eius neque facilis, dicta esse officiis pariatur asperiores distinctio deserunt modi recusandae eligendi. Quasi temporibus molestias natus rem consectetur eius nobis, dolorem nemo ad incidunt cum veritatis odio reprehenderit illum. Suscipit temporibus mollitia libero ea praesentium minus quam doloremque possimus est ipsa fugiat laboriosam nesciunt explicabo nihil ducimus corporis, doloribus eum voluptates sapiente neque sunt at soluta adipisci? Modi qui possimus pariatur dignissimos animi quos ipsam explicabo sint ut? Corrupti cumque aperiam ad culpa eveniet.
                                        </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}