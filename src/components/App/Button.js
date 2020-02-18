import React from 'react'

export default class Button extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='rounded-pill bg-primary mx-3'>
                <button 
                    type='button' 
                    className='btn btn-lg text-nowrap px-5 text-center'
                    onClick={() => this.props.onClick(this.props.id)} >
                        {this.props.id}
                </button>
            </div>
        )
    }
}
