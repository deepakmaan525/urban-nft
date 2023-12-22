import React from 'react'
import CollectionCard from './CollectionCards'

const TopCollection = () => {
    return (
        <div className='max-w-[712px]'>
            <div className="flex justify-between pb-4">
                <p className=' text-[#4F4F4F] text-base font-semibold leading-5 font-inter '>Top Collections</p>
                <p className="flex items-center text-[#4F4F4F] text-xs font-semibold leading-5 font-inter ">View All <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.167 7.81706L3.16699 7.81706" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9.13379 3.80083L13.1671 7.81683L9.13379 11.8335" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                </p>
            </div>
            <CollectionCard/>
        </div>
    )
}

export default TopCollection
