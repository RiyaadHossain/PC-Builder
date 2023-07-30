import Link from 'next/link';
import React from 'react'

export default function CategoryCard({ category }) {
    return (
        <Link href={`/categories/${category.value}`}>
            <div className="card w-44 bg-base-200 shadow-xl cursor-pointer hover:bg-base-300 hover:translate-y-1 transition-transform">
                <div className="card-body">
                    <div className='flex flex-col items-center gap-3'>
                        <div className='text-3xl'>{category.icon}</div>
                        <h2 className="text-lg font-semibold">{category.name}</h2>
                    </div>
                </div>
            </div>
        </Link>
    )
}
