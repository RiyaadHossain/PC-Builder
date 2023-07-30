import Link from 'next/link'
import React from 'react'
import { signOut, useSession } from "next-auth/react"

const categories = [
    { name: "CPU", value: "CPU" },
    { name: "Motherboard", value: "Motherboard" },
    { name: "RAM", value: "RAM" },
    { name: "Power Supply", value: "Power-Supply-Unit" },
    { name: "Storage", value: "Storage-Device" },
    { name: "Monitor", value: "Monitor" },
    { name: "Ohters", value: "Others" },
]

export default function Navbar() {

    return (
        <div className="navbar bg-base-200">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost font-mono normal-case text-xl">PC Builder</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <details>
                            <summary>
                                Category
                            </summary>
                            <ul className="p-2 bg-base-200 z-50">

                                {
                                    categories.map(category => <li key={category.name}>
                                        <Link href={`/categories/${category.value}`}>{category.name}</Link>
                                    </li>)
                                }

                            </ul>
                        </details>
                    </li>
                </ul>
                <Link href="/pc-build" className='btn btn-primary'>PC Build</Link>
                {/* <div className='ml-2'>
                    <button className='btn btn-warning'>Sign Out</button>
                </div> */}
            </div>
        </div>
    )
}
