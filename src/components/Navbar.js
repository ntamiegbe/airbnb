import Image from 'next/image'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center p-5 md:px-10 sticky top-0 z-50 shadow'>
            <div className="relative h-10 w-14">
                <Image src="https://links.papareact.com/qd3" fill style={{ objectFit: "contain", objectPosition: "left" }} />
            </div>

            <div className="flex items-center justify-center border p-3 rounded-full shadow-sm">
                <input type="text" placeholder='Start your search' className='outline-none bg-transparent'/>
                <AiOutlineSearch className='hidden md:inline-flex text-white bg-red-400 rounded-full h-8 w-8 p-1 cursor-pointer' />
            </div>

            <div className="">Right</div>
        </nav>
    )
}

export default Navbar