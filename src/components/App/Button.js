import React from 'react'
import './../styles/Button.css'

export default function Button(props) {
    return (
        <div className='Button mx-3 my-1 rounded-pill'>
            <button type='button' className='btn btn-lg text-nowrap px-5 mx-3' onClick={props.handleClick(props.id)}>
                {props.id}
            </button>
        </div>
    )
}
