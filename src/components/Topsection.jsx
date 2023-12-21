import React from 'react'
import MetroVerse from './MetroVerse'
import NewNft from './NewNft'
import Nav from './Nav'

const TopSection = () => {
  return (
    <div>
      <Nav/>
      <div className='flex pb-16 xl:flex-row flex-col'>
       <div className='xl:w-[70%] w-full'>
        <MetroVerse/>
        </div>
       <div className='xl:w-[30%] w-full'>
        <NewNft/>
        </div>
      </div>
    </div>
  )
}

export default TopSection
