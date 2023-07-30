import React from 'react'
import ProductCard from '../Reuseable/ProductCard'

export default function FeaturedProduct({ products }) {

    return (
        <div className='section_main'>
            <h1 className='section_title'>Featured Product</h1>
            <div className='flex flex-wrap justify-center gap-10'>
                {products.map(product => <ProductCard key={product._id} product={product} />)}
            </div>
        </div>
    )
}
