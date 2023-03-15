import React from 'react'

const ExploreCard = ({ name, image, population }) => {
    return (
        <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
            <img src={image} alt={name} className='rounded-md h-16 w-16' />
            <div>
                <h2>{name}</h2>
                <h3 className='text-gray-500'>{`${population} million`}</h3>
            </div>
        </div>
    )
}

export default ExploreCard