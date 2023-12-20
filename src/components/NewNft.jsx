import React from 'react'
import NewNftCards from './NewNftCards'

const NewNft = () => {
  return (
    <div>
      <p className='text-[#4F4F4F] text-base font-semibold leading-5 pb-7'>New NFTs</p>
      <div className='mb-2'>
        <NewNftCards/>
      </div>
    </div>
  )
}

export default NewNft
