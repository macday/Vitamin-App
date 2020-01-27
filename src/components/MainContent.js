import React from 'react'
import Product from './Product'
import items from './Items'

export default function MainContent() {
    const data = items.map(item => <Product key={item.upc} url={item.url} info={item.info} />)

    return (
        <div className='product-list'>
            {data}
        </div>
    )
}
