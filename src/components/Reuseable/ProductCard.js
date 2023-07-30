import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProductCard({ product }) {

    return (
        <div className="card w-96 bg-base-100 shadow-xl rounded hover:bg-base-200 hover:-translate-y-1 transition-transform">
            <figure><Image src="https://images.pexels.com/photos/1714341/pexels-photo-1714341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Shoes" width={500} height={500} /></figure>
            <div className="card-body">
                <h2 className="card-title"> {product.title}
                </h2>
                <div className='flex justify-between items-center'>
                    <div className="badge badge-secondary">{product.category}</div>
                    <div className="rating rating-xs">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>
                <p>{product.description}</p>
                <div className='flex justify-between items-center'>
                    <p className='font-bold text-2xl'>$ {product.price}</p>
                    <div className="badge badge-sm badge-success">{product.status}</div>
                </div>
                <Link href={`/products/${product._id}`} className='btn btn-primary'>See Details</Link>
            </div>
        </div>
    )
}
