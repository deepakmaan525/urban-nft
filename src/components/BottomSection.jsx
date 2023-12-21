import React from 'react'
import TopCollection from './TopCollection'
import Trending from './Trending'
import History from './History'

const BottomSection = () => {
  return (
    <div className='flex flex-col xl:flex-row'>
      <div className=" xl:w-[70%] w-full">
        <TopCollection/>
        <Trending/>
      </div>
      <div className=" xl:w-[30%] w-full">
        <History/>
      </div>
    </div>
  )
}

export default BottomSection
