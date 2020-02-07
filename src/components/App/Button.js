import React from 'react'
import './../styles/Button.css'

export default class Button extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='Button mx-3 my-1 rounded-pill'>
                <button 
                    type='button' 
                    className='btn btn-lg text-nowrap px-4'
                    onClick={() => this.props.onClick()} >
                        {this.props.id}
                </button>
            </div>
        )
    }
}
