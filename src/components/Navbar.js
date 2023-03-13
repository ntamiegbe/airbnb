import Image from 'next/image'
import React from 'react'
import { AiOutlineSearch, AiOutlineGlobal, AiOutlineUser, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center p-5 md:px-10 sticky top-0 z-50 shadow'>
            <div className="relative h-10 w-14">
                <Image src="https://links.papareact.com/qd3" fill style={{ objectFit: "contain", objectPosition: "left" }} />
            </div>

            <div className="flex items-center border p-3 rounded-full shadow-sm">
                <input type="text" placeholder='Start your search' className='outline-none bg-transparent text-sm text-gray-400' />
                <AiOutlineSearch className='hidden md:inline-flex text-white bg-red-400 rounded-full h-8 w-8 p-1 cursor-pointer' />
            </div>

            <div className="flex items-center space-x-3 text-gray-500">
                <p className='hidden md:inline-flex cursor-pointer'>Become a host</p>
                <AiOutlineGlobal className='cursor-pointer'/>
                <div className="flex items-center border rounded-full p-3 space-x-4">
                    <AiOutlineUser className='cursor-pointer'/>
                    <AiOutlineMenu className='cursor-pointer'/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar