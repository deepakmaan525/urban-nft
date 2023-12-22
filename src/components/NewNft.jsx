import React from 'react'
import NewNftCards from './NewNftCards'

const NewNft = () => {
  return (
    <div>
      <p className='text-[#4F4F4F] text-base font-semibold leading-5 md:pb-7 font-inter py-3 md:pt-0'>New NFTs</p>
      <div className='mb-2'>
        <NewNftCards/>
      </div>
    </div>
  )
}

export default NewNft
