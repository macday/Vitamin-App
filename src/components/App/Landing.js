import React from 'react'
import Button from './Button'
import Navbar from '../header/Navbar'
import './../styles/Landing.css'

export default function App() {
    return (
        <div className="Landing">
            <div className='navbar sticky-top bg-dark d-flex flex-row flex-nowrap justify-content-between'>
                <div className='nav-item d-flex flex-row justify-content-start align-content-center'>
                    <Navbar />
                </div>
                <div class="nav-item d-flex flex-row justify-content-end align-content-center py-1">
                    <Button id='Sign up' />
                    <Button id='Login' />
                </div>
            </div>
            <div className='container-fluid about-content p-5'>
                <div className='row d-flex flex-row flex-wrap'>
                    <div className='col border border-light'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, quo consectetur provident molestiae soluta nisi sit illo id, eius nesciunt inventore. Ullam voluptatem nostrum culpa eius neque facilis, dicta esse officiis pariatur asperiores distinctio deserunt modi recusandae eligendi. Quasi temporibus molestias natus rem consectetur eius nobis, dolorem nemo ad incidunt cum veritatis odio reprehenderit illum. Suscipit temporibus mollitia libero ea praesentium minus quam doloremque possimus est ipsa fugiat laboriosam nesciunt explicabo nihil ducimus corporis, doloribus eum voluptates sapiente neque sunt at soluta adipisci? Modi qui possimus pariatur dignissimos animi quos ipsam explicabo sint ut? Corrupti cumque aperiam ad culpa eveniet.
                    </div>
                    <div className='col border border-dark'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, quo consectetur provident molestiae soluta nisi sit illo id, eius nesciunt inventore. Ullam voluptatem nostrum culpa eius neque facilis, dicta esse officiis pariatur asperiores distinctio deserunt modi recusandae eligendi. Quasi temporibus molestias natus rem consectetur eius nobis, dolorem nemo ad incidunt cum veritatis odio reprehenderit illum. Suscipit temporibus mollitia libero ea praesentium minus quam doloremque possimus est ipsa fugiat laboriosam nesciunt explicabo nihil ducimus corporis, doloribus eum voluptates sapiente neque sunt at soluta adipisci? Modi qui possimus pariatur dignissimos animi quos ipsam explicabo sint ut? Corrupti cumque aperiam ad culpa eveniet.
                    </div>
                    <div className='col border border-light'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, quo consectetur provident molestiae soluta nisi sit illo id, eius nesciunt inventore. Ullam voluptatem nostrum culpa eius neque facilis, dicta esse officiis pariatur asperiores distinctio deserunt modi recusandae eligendi. Quasi temporibus molestias natus rem consectetur eius nobis, dolorem nemo ad incidunt cum veritatis odio reprehenderit illum. Suscipit temporibus mollitia libero ea praesentium minus quam doloremque possimus est ipsa fugiat laboriosam nesciunt explicabo nihil ducimus corporis, doloribus eum voluptates sapiente neque sunt at soluta adipisci? Modi qui possimus pariatur dignissimos animi quos ipsam explicabo sint ut? Corrupti cumque aperiam ad culpa eveniet.
                    </div>
                </div>
            </div>
        </div>
    )
}
