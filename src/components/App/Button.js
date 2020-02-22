import React from 'react'
import { Link } from "react-router-dom";

export default function Button(props) {
    return (
        <div className='rounded-pill bg-primary mx-3'>
            <Link to={`/${props.id}`}>
                <button
                    type='button'
                    className='btn btn-lg text-nowrap px-5 text-center' >
                    {props.id}
                </button>
            </Link>
        </div >
    )
}