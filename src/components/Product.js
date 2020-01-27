import React from 'react'

export default function Product(props) {

    return (
        <div className='product'>
            <img src={props.url} />
            <p>{props.info}</p>
        </div>
    )
}


